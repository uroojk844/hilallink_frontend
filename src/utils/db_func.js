import { database } from "@/utils/firebase";
import {
  addDoc,
  collection,
  getDoc,
  updateDoc,
  where,
} from "firebase/firestore";

const userRef = collection(database, "users");

export function addUser(data) {
  const { email } = data;
  getDoc(doc(userRef, where("email", "==", email))).then((doc) =>
    console.log(doc)
  );
  // addDoc(userRef, data);
}

function updateUser(data) {
  updateDoc(userRef, data);
}
