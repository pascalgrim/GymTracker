import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Colors } from "../../../colors";
import { Dimensions } from "react-native";
import { db, auth } from "../../../firebase";

import TripleStats from "../../../components/TripleStats";
import { DBM } from "../../../DatabaseManager";
import { useState, useEffect } from "react";
const screenWidth = Dimensions.get("window").width;

export default function WorkoutUeberblick({ workout }) {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg }}>
      <View style={{ marginTop: 30 }}>
        <Chart workout={workout} />
        <View style={{ marginTop: 20 }}>
          <TripleStats workout={workout} />
        </View>
      </View>
    </View>
  );
}

const Chart = ({ workout }) => {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  async function getData() {
    setLoading(true);
    var data2 = [];
    await DBM.getWorkoutSnap(workout.workoutID).then((res) => {
      Object.keys(res.data().MuskelAnteile).forEach(function (grp) {
        data2.push({
          name: grp,
          val: res.data().MuskelAnteile[grp].val,
          color: "#00A6FB",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        });
      });
    });

    console.log(data2);
    setDatas(data2);
    setLoading(false);

    return data2;
  }

  //getData();
  const data = [
    {
      name: "Brust",
      population: 1.6,
      color: "#266CE0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Schulter",
      population: 0.4,
      color: "#00A6FB",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Trizeps",
      population: 0.3,
      color: "#00D4EA",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  //console.log(data);
  // console.log(data);
  // console.log("---------------");
  // console.log(getData());
  return (
    <PieChart
      data={data}
      width={screenWidth / 1.1}
      height={150}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      center={[0, 0]}
    />
  );
};
const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

class DataSet {
  constructor(name, val) {
    this.name = name;
    this.val = val;
  }
}
