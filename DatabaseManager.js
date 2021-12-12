import {
  doc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
  getDocs,
  arrayUnion
} from "firebase/firestore";
import { db } from "./firebase";
import { auth } from "./firebase";

export const DBM = {
  createUser: function (user,pw) {
    return db.collection("Benutzer").doc(user.uid).set({
      AnzeigeName: user.displayName,
      Email: user.email,
      Passwort : pw,
      EmailVerified: user.emailVerified,
      ID: user.uid,
      
    });
  },
  createTraining: function (titel, anmerkung) {
    const datum = Timestamp.now();
    return db
      .collection("Benutzer")
      .doc(auth.currentUser.uid)
      .collection("Trainingseinheiten")
      .add({
        titel: titel,
        anmerkung: anmerkung,
        datum: datum,
      });
  },
  getWorkouts: async function (trainingsId) {
    const querySnapshot = await getDocs(
      collection(
        db,
        `Benutzer/${auth.currentUser.uid}/Trainingseinheiten/${trainingsId}/Uebungen`
      )
    );
    return querySnapshot;
  },
  addSet:async function (trainingsId,uebungsId,number,wdh,gewicht) {
    return db.collection("Benutzer")
      .doc(auth.currentUser.uid)
      .collection("Trainingseinheiten")
      .doc(trainingsId)
      .collection("Uebungen")
      .doc(uebungsId)
      .collection("Sätze")
      .add(
        {
          Nummer: number,
          Wiederholungen : wdh,
          Gewicht : gewicht
        }
      )
  }

};
