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
    if (testdata < 0.99) {
      setTestData((prev) => prev + 0.1);
    } else {
      setTestData(0);
    }
  };
  const [testdata, setTestData] = useState(0.4);
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
        height={220}
        strokeWidth={7}
        radius={100}
        chartConfig={chartConfig}
        hideLegend={true}
      />

      <View style={{position:"absolute",justifyContent:"center",alignItems:"center"}}>
      <Text style={{color:"white",fontFamily:"Poppins_700Bold",fontSize:17}}>Level</Text>
      <Text style={{color:"white",fontFamily:"Poppins_700Bold",fontSize:17}}>2</Text>
      
      </View>
      
      
    </View>
  );
}
