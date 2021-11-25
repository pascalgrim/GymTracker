import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import React, { useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { Colors } from "../colors";
import { Button } from "react-native-paper";

export default function MyProgressChart() {
  const handlePress = () => {
    console.log(testdata);
    if (testdata < 0.99) {
      setTestData((prev) => prev + 0.1);
    } else {
      setTestData(0);
    }
  };
  const [testdata, setTestData] = useState(0.0);
  const data = {
    labels: ["weekly Sessions done"], // optional
    data: [testdata],
    perc: "40%",
  };
  const chartConfig = {
    backgroundGradientFrom: Colors.bg,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: Colors.bg,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(243, 47, 77, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ProgressChart
        data={data}
        width={Dimensions.get("window").width}
        height={250}
        strokeWidth={15}
        radius={60}
        chartConfig={chartConfig}
        hideLegend={true}
      />
      <Button onPress={handlePress}>add 10%</Button>
    </View>
  );
}
