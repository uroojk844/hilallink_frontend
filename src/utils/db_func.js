import { database } from "@/utils/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const userRef = collection(database, "users");

export async function addUser(data) {
  const { email } = data;
  const q = query(userRef, where("email", "==", email));
  const user = await getDocs(q);
  if (!user.size) return;
  addDoc(userRef, data);
}

export function updateUser(id, data) {
  updateDoc(doc(userRef, id), data);
}
