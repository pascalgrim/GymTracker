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
  increment,
  where,
} from "firebase/firestore";
import {
  getMomentDay,
  getMomentHour,
  getMomentMonth,
  getWeek,
} from "./DateConverter";
import { db } from "./firebase";
import { auth } from "./firebase";
import moment from "moment";

export const DBM = {
  addSet: async function (workoutID, uebungsId, number, wdh, gewicht) {
    await addDoc(
      collection(
        db,
        `Benutzer/${auth.currentUser.uid}/Workouts/${workoutID}/Uebungen/${uebungsId}/Sätze`
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
    await setDoc(doc(db, "Benutzer", auth.currentUser.uid), {
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
    const datumConverted = datum.toDate();

    return await addDoc(
      collection(db, `Benutzer/${auth.currentUser.uid}/Workouts`),
      {
        titel: titel,
        erstelltAm: datum,
        Zeit: {
          Jahr: datumConverted.getUTCFullYear(),
          Woche: getWeek(datumConverted),
          Tag: getMomentDay(datumConverted),
          Monat: getMomentMonth(datumConverted),
          Stunde: getMomentHour(datumConverted),
        },
        AnzahlSaetze: 0,
        AnzahlWiederholungen: 0,
        GewichtGesamt: 0,
        Laenge: null,
        Uebungen :[]
      }
    ).catch((error) => console.log(error));
  },
  incrementWorkoutStats: async function (workoutID, wdh, sets, gewicht) {
    const workoutRef = doc(
      db,
      `Benutzer/${auth.currentUser.uid}/Workouts`,
      workoutID
    );

    await updateDoc(workoutRef, {
      AnzahlSaetze: increment(sets),
      AnzahlWiederholungen: increment(wdh),
      GewichtGesamt: increment(gewicht),
    });
  },
  getWorkoutSnap: async function (workoutId) {
    const docRef = doc(
      db,
      `Benutzer/${auth.currentUser.uid}/Workouts/`,
      workoutId
    );
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap;
    } else {
      console.log("No such document!");
    }
  },

  createUebung: async function (
    workoutId,
    uebungMuskelgruppe,
    uebungName,
    nummer
  ) {
    const workoutRef = doc(db,  `Benutzer/${auth.currentUser.uid}/Workouts`, workoutId);
    await updateDoc(workoutRef, {
      Uebungen: arrayUnion(uebungName)
  });
    return await addDoc(
      collection(
        db,
        `Benutzer/${auth.currentUser.uid}/Workouts/${workoutId}/Uebungen`
      ),
      {
        name: uebungName,
        muskelgruppe: uebungMuskelgruppe,
        Nummer: nummer,
      }
    );
  },

  getUebungSnap: async function (workoutId, id) {
    const docRef = doc(
      db,
      `Benutzer/${auth.currentUser.uid}/Workouts/${workoutId}/Uebungen`,
      id
    );
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap;
    } else {
      console.log("No such document!");
    }
  },

  getLatesWorkoutIdFromUebungName : async function(uebungName){
    const q = query(collection(db,`Benutzer/${auth.currentUser.uid}/Workouts`),where("Uebungen","array-contains",uebungName),orderBy("erstelltAm","desc"),limit(1));
    const querySnapshot = await getDocs(q);
    var id;
    querySnapshot.forEach((doc) => {
      id = doc.id
    });
    return id
    },

    getUebungInfos : async function (workoutID,uebungName){
      const q = query(collection(db,`Benutzer/${auth.currentUser.uid}/Workouts/${workoutID}/Uebungen`),where("name","==",uebungName));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        console.log(workoutId,uebungName)
      });
     
    }
      
};
