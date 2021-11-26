import { ProgressChart } from "react-native-chart-kit";

import React, { useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { Colors } from "../../colors";
import { Button } from "react-native-paper";
import chartConfig from "../../chartConfig";

export default function Achievement() {
  const data = {
    labels: ["weekly Sessions done"], // optional
    data: [0.6],
    perc: "40%",
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white", position: "absolute" }}>3/5</Text>
      <ProgressChart
        data={data}
        width={150}
        strokeWidth={5}
        height={120}
        radius={50}
        chartConfig={chartConfig}
        hideLegend={true}
      />
    </View>
  );
}
