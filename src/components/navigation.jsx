import React,{useState,useContext} from 'react';
import { Button } from './';
import { useHistory,useLocation } from "react-router-dom";
import {auth,firestore,createDoc} from '../pages/firebase'
import {AuthContext} from '../provider/auth-user-provider'
import '../style/main.scss'
export const Navigation = (props) => {
    let history = useHistory();  
    let location =useLocation();
    console.log(location.pathname)
    const {user}= useContext(AuthContext)
   console.log(user)
      const garah=()=>{
        auth.signOut().then(() => {
            history.push("/")
          }).catch((error) => {
          });
      }
      
    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            
            { !user && location.pathname!="/login" && location.pathname!='/reset' && <Button onClick={()=>{history.push("/login")}} className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary disabled'>Нэвтрэх</Button> }
            {user && <Button className="font-ubuntu fs-20 lh-23 bold c-default  ml-2 b-primary disabled flex" onClick={garah}><svg width="20" height='20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path></svg></Button> }
        </div>
    )
};