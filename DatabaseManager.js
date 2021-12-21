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
} from "firebase/firestore";
import { db } from "./firebase";
import { auth } from "./firebase";

export const DBM = {
  addSet: async function (trainingsId, uebungsId, number, wdh, gewicht) {
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
    return await addDoc(
      collection(db, `Benutzer/${auth.currentUser.uid}/Workouts`),
      {
        titel: titel,
        erstelltAm: datum,
        AnzahlSaetze: 0,
        AnzahlWiederholungen: 0,
        GewichtGesamt: 0,
        Laenge: null,
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
};
