import React, { createContext, useEffect, useState } from "react";
import { firebase, db, storage, auth } from "../pages/firebase";
import {
  BrowserRouter as router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
export const AuthContext = createContext({
  user: null,
  userReady: false,
  email: null,
});
export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    userReady: false,
    email: null,
  });

  useEffect(() => {
    if (!auth) {
      return;
    }
    const subscribe = auth.onAuthStateChanged((user) => {
      user
        ? setState({ user: user, userReady: true, email: user.email })
        : setState({ user: null, userReady: true, email: null });
    });
    return () => subscribe();
  }, [auth]);
  return (
    <AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>
  );
};
