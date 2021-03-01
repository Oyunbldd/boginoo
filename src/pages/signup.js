import React, { useState, useContext, useEffect } from "react";

import {
  Layoutsignup,
  Button,
  Input,
  IconDash,
  IconEndBracket,
  IconStartBracket,
  Forminput,
} from "../components";
import { auth, firestore, createDoc } from "./firebase";

import { AuthContext } from "../provider/auth-user-provider";

import { useHistory } from "react-router-dom";

export const Signup = () => {
  const { user } = useContext(AuthContext);
  let history = useHistory();
  if (user) {
    history.push("/");
  }

  const [form, setFrom] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [check, setCheck] = useState("");

  const change = (e) => {
    setFrom({ ...form, [e.target.id]: e.target.value });
    setCheck("");
  };

  const signUp = async () => {
    const { email, password, username, password2 } = form;

    if (password === password2) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const { uid } = userCredential.user;
          createDoc(`users/${uid}`, { username, email });
          history.push("/");
        })
        .catch((error) => {
          let err = error.message;
          setCheck(err);
        });
    } else {
      setCheck("The password you’ve entered is incorrect");
    }
  };

  return (
    <Layoutsignup>
      <div className="h100 flex justify-center">
        <div className="form  w-8 flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <IconStartBracket />
            <IconDash />
            <IconEndBracket />
          </div>
          <div className="font-lobster c-primary fs-30 lh-32 ">Boginoo</div>
          <div className="font-ubuntu c-primary fs-20 lh-23 mt6 bold">
            Бүртгүүлэх
          </div>
          <div>
            <div>
              <Forminput
                className="input b-gray0 h-5 w-8 disabled"
                placeholder="username"
                value="form.username"
                onchange={change}
                id="username"
                label="Хэрэглэгчийн нэр"
              />
            </div>
            <div>
              <Forminput
                label="Цахим хаяг"
                className="input b-gray0 h-5 w-8 disabled"
                placeholder="name@mail.domain"
                value="form.email"
                onchange={change}
                id="email"
              />
            </div>
            <div>
              <Forminput
                label="Нууц үг"
                className="input b-gray0 h-5 w-8 disabled"
                placeholder="password"
                type="password"
                value="form.password"
                onchange={change}
                id="password"
              />
            </div>
            <div>
              <Forminput
                label="Нууц үгээ давтна уу?"
                className="input b-gray0 h-5 w-8 disabled"
                placeholder="password"
                type="password"
                value="form.password2"
                onchange={change}
                id="password2"
              />
            </div>
          </div>
          <div className="flex-center text-center">
            <div className="font-ubuntu c-error fs-12 flex-center">{check}</div>
          </div>

          <Button
            className="btn ph-4 font-ubuntu w-8 fs-20 lh-23 bold c-default h-5  b-primary disabled"
            onClick={signUp}
          >
            Бүртгүүлэх
          </Button>
        </div>
      </div>
    </Layoutsignup>
  );
};
