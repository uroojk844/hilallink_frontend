import { database } from "@/utils/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

const userRef = collection(database, "users");

export async function addUser(data) {
  fetch("/api/user", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

export function updateUser(id, data) {
  updateDoc(doc(userRef, id), data);
}
