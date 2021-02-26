import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { db } from "../pages/firebase";
import { useEffect } from "react";
export const Shortener = () => {
  const location = useLocation();
  const history = useHistory();
  let url = location.pathname;
  url = url.substring(1);
  console.log(url);
  useEffect(() => {
    db.collection("shortnedUrl")
      .doc(url)
      .get()
      .then((doc) => {
        window.location.href = doc.data().url;
      })
      .catch(() => {
        history.push("/");
      });
  }, []);
  return <div> Loading .....</div>;
};
