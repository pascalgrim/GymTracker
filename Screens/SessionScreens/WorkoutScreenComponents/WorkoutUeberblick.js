import React from "react";
import { View} from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Colors, getMuskelGruppeColor } from "../../../colors";
import { Dimensions } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import TripleStats from "../../../components/TripleStats";
import { DBM } from "../../../DatabaseManager";
import { useState, useEffect } from "react";
import MyText from "../../../components/MyText";

const screenWidth = Dimensions.get("window").width;

export default function WorkoutUeberblick({ workout }) {
  const [anteileData, setAnteileData] = useState([]);
  
  useEffect(() => {
    const m = setAnteileData(getData());
    return () => {
      m;
    };
  }, []);
  async function getData() {
    var data = [];
    await DBM.getWorkoutSnap(workout.workoutID).then((res) => {
      Object.keys(res.data().MuskelAnteile).forEach(function (grp) {
        if (res.data().MuskelAnteile[grp].val > 0)
          data.push({
            name: grp,
            val: res.data().MuskelAnteile[grp].val,
            color: getMuskelGruppeColor(grp),
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          });
      });
      setAnteileData(data);
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg }}>
      <View style={{ marginTop: 30 }}>
        <Chart workout={workout} anteileData={anteileData} />
        <View style={{ marginTop: 20 }}>
          <TripleStats workout={workout} />
        </View>
      </View>
    </View>
  );
}

const Chart = ({anteileData }) => {
  const fillData = [
    {
      name: "Brust",
      val: 1,
      color: getMuskelGruppeColor("Brust"),
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Rücken",
      val: 1,
      color: getMuskelGruppeColor("Rücken"),
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beine",
      val: 1,
      color: getMuskelGruppeColor("Beine"),
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  const [loadingTimeOver, setLoadingTimeOver] = useState(false);
  setTimeout(() => {
    setLoadingTimeOver(true);
  }, 3000);
  return (
    <View>
      {anteileData.length ? (
        <PieChart
          data={anteileData}
          width={screenWidth / 1.1}
          height={150}
          chartConfig={chartConfig}
          accessor={"val"}
          backgroundColor={"transparent"}
          center={[0, 0]}
        />
      ) : (
        <View style={{ justifyContent: "center" }}>
          <View style={{ opacity: 0.1 }}>
            <PieChart
              data={fillData}
              width={screenWidth / 1.1}
              height={150}
              chartConfig={chartConfig}
              accessor={"val"}
              backgroundColor={"transparent"}
              center={[0, 0]}
            />
          </View>
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
            }}
          >
            {loadingTimeOver ? (
              <MyText text={"Noch keine Übung vorhanden"} fontSize={16} />
            ) : (
              <View>
                <ActivityIndicator
              animating={!loadingTimeOver}
              color={"white"}
              size={"large"}
              style={{ paddingBottom: 10 }}
            />
                <MyText text={"Versuche Übungen zu finden..."} fontSize={16} />
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
