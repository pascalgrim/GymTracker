import {
  doc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import { auth } from "./firebase";

export const DBM = {
  createUser: function (user) {
    return db.collection("Benutzer").doc(user.uid).set({
      AnzeigeName: user.displayName,
      Email: user.email,
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
};
