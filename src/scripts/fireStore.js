import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
  } from "firebase/firestore";
  import { fireStore } from "./firesbase";
  
  export async function updateDocument(path, data) {
    const documentPath = doc(fireStore, path);
    await updateDoc(documentPath, data);
  }
  
  export async function addDocument(path, data) {
    const documentPath = doc(fireStore, path);
    await setDoc(documentPath, data);
  }
  
  export async function addDocumentWithId(path, id, data) {
    let payload = { data: undefined, error: false };
    try {
      const documentReferense = doc(fireStore, path, id);
      await setDoc(documentReferense, data);
  
      payload = { data: `Document with id ${id} is created!`, error: false };
    } catch (error) {
      payload = { data: error, error: true };
    }
    return payload;
  }
  
  export async function getDocument(path) {
    const documentPath = doc(fireStore, path);
    const document = await getDoc(documentPath);
    return document.data();
  }
  
  export async function getCollection(path) {
    const collectionPath = collection(fireStore, path);
    const snapshot = await getDocs(collectionPath);
  
    const documents = snapshot.docs.map((item) => {
      return { id: item.id, ...item.data() };
    });
  
    return documents;
  }
  
  export async function deleteDocument(path) {
    const documentPath = doc(fireStore, path);
    await deleteDoc(documentPath);
  }