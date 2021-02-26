import React, { useState, useEffect, useContext } from "react";
import {
  Layout,
  Button,
  Input,
  IconDash,
  IconEndBracket,
  IconStartBracket,
} from "../components/";
import { auth, firestore, createDoc, shortUrl, db } from "./firebase";
import { AuthContext } from "../provider/auth-user-provider";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
export const HomeDefault = () => {
  const [form, setFrom] = useState({ url: "" });
  const [darsan, setDarsan] = useState(false);
  const [haruul, setHaruul] = useState({});
  let randomstring = require("randomstring");

  const change = (e) => {
    setFrom({ ...form, [e.target.id]: e.target.value });
  };
  const { user } = useContext(AuthContext);

  const click = () => {
    setDarsan(true);
    let short = randomstring.generate(7);
    let uid, email;
    if (user) {
      uid = user.uid;
      email = user.email;
    } else {
      uid = null;
      email = null;
    }
    let createdAt = firebase.firestore.FieldValue.serverTimestamp();
    let outputUrl = "https://boginoo-15065.web.app/" + short;
    const { url } = form;
    shortUrl(short, { url, uid, email, outputUrl, createdAt });
    setHaruul({ url, outputUrl });
    setFrom("");
  };
  return (
    <Layout>
      <div className="h100 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <IconStartBracket />
          <IconDash />
          <IconEndBracket />
        </div>
        <div className="font-lobster c-primary fs-56 lh-70 ">Boginoo</div>
        <div className="mt-5 flex justify-center items-center">
          <Input
            className="input b-gray0 h-5 w-8 disabled"
            placeholder="https://www.web-huudas.mn"
            onchange={change}
            id="url"
          />
          <Button
            className="btn font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary  disabled"
            onClick={click}
          >
            Богиносгох
          </Button>
        </div>
        {darsan === true && (
          <div class="font-ubuntu flex w-9 flex-wrap">
            <div class="ph-5">
              <p class="fs-16 ln-18 o-05">Өгөгдсөн холбоос:</p>
              <p>{haruul.url}</p>
            </div>
            <div class="ph-5">
              <p class="fs-16 ln-18 o-05">Богино холбоос:</p>
              <a href={haruul.outputUrl}>{haruul.outputUrl}</a>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
