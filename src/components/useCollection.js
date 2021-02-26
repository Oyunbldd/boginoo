import { useEffect, useState } from "react";
import { useFirebase } from "../pages/firebase";
export const useCollection = (path) => {
  const { firestore } = useFirebase();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (firestore && path) {
      firestore.collection(path).onSnapshot((s) => {
        const data = s.docs.map((item) => ({ ...item.data(), id: item.id }));
        setData(data);
      });
    }

    return () => {};
  }, [firestore, path]);

  const createDoc = (docId, data) => {
    firestore.doc(`/${path}/${docId}`).set(data);
  };

  const deleteDoc = () => {};

  return { data, createDoc, deleteDoc, updateDoc };
};
