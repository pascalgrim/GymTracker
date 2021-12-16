import {
  doc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  Timestamp,
  getDocs,
  arrayUnion,
} from "firebase/firestore";
import { db } from "./firebase";
import { auth } from "./firebase";

export const DBM = {
  // getWorkouts: async function (trainingsId) {
  //   const querySnapshot = await getDocs(
  //     collection(
  //       db,
  //       `Benutzer/${auth.currentUser.uid}/Trainingseinheiten/${trainingsId}/Uebungen`
  //     )
  //   );
  //   return querySnapshot;
  // },

  addSet: async function (trainingsId, uebungsId, number, wdh, gewicht) {
    // return db
    //   .collection("Benutzer")
    //   .doc(auth.currentUser.uid)
    //   .collection("Trainingseinheiten")
    //   .doc(trainingsId)
    //   .collection("Uebungen")
    //   .doc(uebungsId)
    //   .collection("Sätze")
    //   .add({
    //     Nummer: number,
    //     Wiederholungen: wdh,
    //     Gewicht: gewicht,
    //   });
    await addDoc(
      collection(
        db,
        `Benutzer/${auth.currentUser.uid}/Workouts/${trainingsId}/Uebungen/${uebungsId}/Sätze`
      ),
      {
        Nummer: number,
        Wiederholungen: wdh,
        Gewicht: gewicht,
      }
    );
  },

  // ------------- NEW
  createUser: async function () {
    await addDoc(collection(db, "Benutzer"), {
      AnzeigeName: auth.currentUser.displayName,
      Email: auth.currentUser.email,
      EmailVerified: auth.currentUser.emailVerified,
      ID: auth.currentUser.uid,
    });
  },

  getAllWorkoutsIDs: async function () {
    const querySnapshot = await getDocs(
      collection(db, `Benutzer/${auth.currentUser.uid}/Workouts`)
    );
    var arr = [];
    querySnapshot.forEach((doc) => {
      arr.push(doc.id);
    });
    return arr;
  },

  createWorkout: async function (titel) {
    const datum = Timestamp.now();
    await setDoc(doc(db, `Benutzer/${auth.currentUser.uid}/Workouts`, titel), {
      titel: titel,
      datum: datum,
    })
      .then(console.log("created new workout"))
      .catch((error) => console.log(error));
  },

  createWorkoutDay: async function (workoutId) {
    const datum = Timestamp.now();
    await setDoc(
      doc(
        db,
        `Benutzer/${auth.currentUser.uid}/Workouts/${workoutId}/WorkoutDay`,
        datum
      ),
      {
        titel: titel,
        datum: datum,
      }
    )
      .then(console.log("created new workoutday"))
      .catch((error) => console.log(error));
  },
};
