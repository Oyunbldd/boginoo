import React, { useState, useContext } from "react";
import { Button } from "./";
import { useHistory, useLocation } from "react-router-dom";
import { auth, firestore, createDoc } from "../pages/firebase";
import { AuthContext } from "../provider/auth-user-provider";
import "../style/main.scss";
export const Navigation = (props) => {
  let history = useHistory();
  let location = useLocation();
  // let user1 = auth.currentUser;
  // if (user1) {
  //   console.log(user1.email)
  // } else {
  // }

  const { user } = useContext(AuthContext);
  const { email } = useContext(AuthContext);

  const garah = () => {
    auth
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch((error) => {});
  };

  return (
    <div className="w100 flex justify-end items-center">
      <div className="font-ubuntu fs-20 lh-23 bold c-primary">
        ХЭРХЭН АЖИЛЛАДАГ ВЭ?
      </div>

      {!user && location.pathname != "/login" && location.pathname != "/reset" && (
        <Button
          onClick={() => {
            history.push("/login");
          }}
          className="font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary disabled"
        >
          Нэвтрэх
        </Button>
      )}
      {user && (
        <Button className="font-ubuntu fs-14 lh-23 bold c-black  ml-2 b-default disabled flex">
          {email}
          <svg
            width="15"
            height="12"
            className="mt-2 ml-2 "
            viewBox="0 0 21 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={garah}
          >
            <path
              d="M2 2L10.5 10.5L19 2"
              stroke="#02B589"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
      )}
    </div>
  );
};
