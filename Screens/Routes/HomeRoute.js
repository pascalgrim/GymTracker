import { useNavigation } from "@react-navigation/native";
import React,{useEffect,useState} from "react";
import { StyleSheet, View, TouchableOpacity, Image,FlatList } from "react-native";
import { auth } from "../../firebase";
import SessionsItem from "../../components/SessionsItem";
import { Colors } from "../../colors";
import MyProgressChart from "../../components/MyProgressChart";

import myTheme from "../../myTheme";
import HeaderRoutes from "../HeaderRoutes";
import doubleArrow from "../../assets/imgs/doublearrow.png";
import MyText from "../../components/MyText";
import SingleUbung from "../SessionScreens/SingleUbung";
import { db } from "../../firebase";

export default function Home() {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <SessionsItem title={item.titel}  />
  );
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const subscriber = db
      .collection("Benutzer")
      .doc(auth.currentUser.uid)
      .collection("Trainingseinheiten")
      .onSnapshot((querySnapshot) => {
        const workouts = [];
        querySnapshot.forEach((documentSnapshot) => {
          workouts.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setWorkouts(workouts);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderRoutes />
      <View>
        <MyText
          text={`Hi ${auth.currentUser.displayName} 🖐`}
          bold
          fontSize={30}
        />
      </View>      
      <TouchableOpacity
        style={styles.sessionStartenButton}
        onPress={() => navigation.navigate("NewSessionFirstInfo")}
      >
        <MyText text="Session starten" fontSize={20} />
        <Image source={doubleArrow} style={{ height: 55, width: 55 }} />
      </TouchableOpacity>
      <FlatList
              style={styles.itemswrapper}
              data={workouts}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#131321",
    paddingLeft: 35,
    paddingRight: 35,
  },
  header: {
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  pointsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  sessionStartenButton: {
    backgroundColor: Colors.offColor,
    borderRadius: 20,
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginTop: 30,
  },
});
