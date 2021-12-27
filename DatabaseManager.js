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
import { Uebungen } from "./Uebungen";

export const DBM = {
  addSet: async function (workoutID, uebungsId, number, wdh, gewicht) {
    const uebungRef = doc(
      db,
      `Benutzer/${auth.currentUser.uid}/Workouts/${workoutID}/Uebungen`,
      uebungsId
    );
    await updateDoc(uebungRef, {
      AnzahlSaetze: increment(1),
    });
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

  createWorkout: async function (titel, kategorie) {
    const datum = Timestamp.now();
    const datumConverted = datum.toDate();

    return await addDoc(
      collection(db, `Benutzer/${auth.currentUser.uid}/Workouts`),
      {
        titel: titel,
        Kategorie: kategorie,
        erstelltAm: datum,
        Zeit: {
          Jahr: datumConverted.getUTCFullYear(),
          Woche: getWeek(datumConverted),
          Tag: getMomentDay(datumConverted),
          Monat: getMomentMonth(datumConverted),
          Stunde: getMomentHour(datumConverted),
        },
        MuskelAnteile: {
          Brust: {
            val: 0,
            name: "Brust",
          },
          Rücken: {
            val: 0,
            name: "Rücken",
          },
          Schulter: {
            val: 0,
            name: "Schulter",
          },
          Trizeps: {
            val: 0,
            name: "Trizeps",
          },
          Bizeps: {
            val: 0,
            name: "Bizeps",
          },
          Beine: {
            val: 0,
            name: "Beine",
          },
          Nacken: {
            val: 0,
            name: "Nacken",
          },
          Bauch: {
            val: 0,
            name: "Bauch",
          },
        },
        AnzahlSaetze: 0,
        AnzahlWiederholungen: 0,
        GewichtGesamt: 0,
        Laenge: null,
        Uebungen: [],
        Volumen: 0,
      }
    ).catch((error) => console.log(error));
  },

  incrementWorkoutStats: async function (
    workoutID,
    wdh,
    sets,
    gewicht,
    uebung
  ) {
    const workoutRef = doc(
      db,
      `Benutzer/${auth.currentUser.uid}/Workouts`,
      workoutID
    );
    var muskelgruppe = uebung.muskelgruppe;
    var uebungObj = Uebungen[muskelgruppe].find(
      (el) => el.label == uebung.name
    );
    const workoutSnap = await getDoc(workoutRef);

    var mergedObject = {};

    Object.keys(workoutSnap.data().MuskelAnteile).forEach(function (grp) {
      mergedObject[grp] = {
        name: grp,
        val: workoutSnap.data().MuskelAnteile[grp].val + uebungObj.anteile[grp],
      };
    });

    await updateDoc(workoutRef, {
      AnzahlSaetze: increment(sets),
      AnzahlWiederholungen: increment(wdh),
      GewichtGesamt: increment(gewicht),
      Volumen: increment(gewicht * wdh * sets),
      MuskelAnteile: mergedObject,
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
    const workoutRef = doc(
      db,
      `Benutzer/${auth.currentUser.uid}/Workouts`,
      workoutId
    );
    await updateDoc(workoutRef, {
      Uebungen: arrayUnion(uebungName),
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
        anzahlSaetze: 0,
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

  getLatesWorkoutIdFromUebungName: async function (uebungName) {
    const q = query(
      collection(db, `Benutzer/${auth.currentUser.uid}/Workouts`),
      where("Uebungen", "array-contains", uebungName),
      orderBy("erstelltAm", "desc"),
      limit(2)
    );
    const querySnapshot = await getDocs(q);
    // Das zweite Item aus der query zurückgeben, da sonst das aktuelle workout geladen wird und nicht das Vorherige
    const secondItem = querySnapshot.docs[querySnapshot.docs.length-1];
    return secondItem.id
  },

  getUebungInfos: async function (workoutID, uebungName) {
    const q = query(
      collection(
        db,
        `Benutzer/${auth.currentUser.uid}/Workouts/${workoutID}/Uebungen`
      ),
      where("name", "==", uebungName)
    );
    const querySnapshot = await getDocs(q);
    var data =[]
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      data = this.getSaetzeData(workoutID,doc.id)
    });
    return data;
  },

  getSaetzeData: async function (workoutID,uebungID){
    var SaetzeRef = collection(db,`Benutzer/${auth.currentUser.uid}/Workouts/${workoutID}/Uebungen/${uebungID}/Sätze`)
    const querySnapshot =  await getDocs(SaetzeRef)
    var data = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      data.push(doc.data())
     
    });
    return data
  }
};
