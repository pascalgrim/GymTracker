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
  getDoc,
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
    return await addDoc(collection(db, `Benutzer/${auth.currentUser.uid}/Workouts/${workoutId}/Workoutdays`), {
      datum:datum,
      titel:workoutId
    }).then(console.log("created new workout day"))
    .catch((error) => console.log(error));;
    
  },


  getWorkoutDaySnap:async function(workoutId,id){
    const docRef = doc(db, `Benutzer/${auth.currentUser.uid}/Workouts/${workoutId}/Workoutdays`, id);
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
};
