import React,{useState} from 'react';
import { Layoutsignup, Button, Input, IconDash, IconEndBracket, IconStartBracket,Forminput } from '../components';
import { useHistory } from "react-router-dom";
import {auth,firestore,createDoc} from './firebase'
export const Reset = () => {
    let history = useHistory();
    const [form,setFrom]=useState({email:""});
    const change=(e)=>{
     setFrom({...form ,[e.target.id]:e.target.value})
    }
    var emailAddress = form.email;
    console.log(emailAddress)
    const ilgeeh=(emailAddress)=>{
        auth.sendPasswordResetEmail(emailAddress).then(function() {
           console.log('ilgeegdsen')
          }).catch(function(error) {
            console.log("amjiltgui")
          });
    }

    return (
        <Layoutsignup>
           <div className='h100 flex justify-center'>
                <div className='  w-8 flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-32 lh-32 mt-4'>
                    Boginoo
                </div>
                <div className='font-ubuntu c-primary fs-20 lh-23  bold mt-5'>
                Нууц үг сэргээх
                </div>
                <div className='font-ubuntu fs-13 lh-25 items-center text-align mt-4 '>
                Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
                </div>
                <div className="mt-4">
                    <Forminput label="Цахим хаяг" className='input b-gray0 h-5 w-8 disabled' placeholder='name@mail.domain'  value="form.email" onchange={change} id="email" />
                </div>
                  
                <Button className='btn font-ubuntu b-primary c-default  disabled w-8 fs-20 lh-23 bold h-5 ph-4 mt-5' oncClick={ilgeeh(emailAddress)}>Илгээх</Button>
             </div>
             </div>
        </Layoutsignup>
    )
}