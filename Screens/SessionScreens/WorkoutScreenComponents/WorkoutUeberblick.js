import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Colors } from "../../../colors";
import { Dimensions } from "react-native";
import TripleStats from "../../../components/TripleStats";
const screenWidth = Dimensions.get("window").width;

export default function WorkoutUeberblick() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg }}>
      <View style={{ marginTop: 30 }}>
        <Chart />
        <View style={{ marginTop: 20 }}>
          <TripleStats />
        </View>
      </View>
    </View>
  );
}

const Chart = () => {
  const data = [
    {
      name: "Brust",
      population: 3,
      color: "#266CE0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Schulter",
      population: 2,
      color: "#00A6FB",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Trizeps",
      population: 1,
      color: "#00D4EA",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
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
