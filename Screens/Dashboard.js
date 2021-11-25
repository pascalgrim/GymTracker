import * as React from "react";
import { View, StyleSheet } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import { Colors } from "../colors";
import myTheme from "../myTheme";
import HomeRoute from "./Routes/HomeRoute";
import StatsRoute from "./Routes/StatsRoute";

const Dashboard = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "stats", title: "Stats", icon: "poll" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    stats: StatsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      theme={myTheme}
      barStyle={{ backgroundColor: Colors.bg }}
      shifting={true}
    />
  );
};
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    left: 150,
    bottom: 20,
  },
});
export default Dashboard;
