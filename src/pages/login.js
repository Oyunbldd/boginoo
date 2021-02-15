import React,{useState,useEffect} from 'react';
import { Layoutsignup, Button, Input, IconDash, IconEndBracket, IconStartBracket,Forminput } from '../components';
import { useHistory } from "react-router-dom";
import {auth,firestore,createDoc} from './firebase'
export const Login = () => {
    let history = useHistory();
    const email=localStorage.getItem('email');
    const[value,setValue]=useState('')
    const [form,setFrom]=useState({email:"",password:""});
    const change=(e)=>{
     setFrom({...form ,[e.target.id]:e.target.value})
    }
    const signup=()=>{
       history.push('/signup')
    }
    const login=()=>{
     const {email,password}=form;
     auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
     history.push('/')
     var user = userCredential.user;
   
  })
  .catch((error) => {
  });
    }
   useEffect(()=>{
     const data=localStorage.getItem('email');
     if(data){
         setValue(JSON.parse(data))
     }
   },[])
    console.log(form.email  )
    return (
        <Layoutsignup>
           <div className='h100 flex justify-center'>
                <div className=' form w-8 flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-30 lh-32 '>
                    Boginoo
                </div>
                <div className='font-ubuntu c-primary fs-20 lh-23 mt6 bold'>
                Нэвтрэх
                </div>
                <div>
                    <Forminput label="Цахим хаяг" className='input b-gray0 h-5 w-8 disabled' placeholder='name@mail.domain'  value="form.email" onchange={change} id="email" hadgal={value} />
                    </div>
                    <div>
                     <Forminput label="Нууц үг" className='input b-gray0 h-5 w-8 disabled' placeholder='password'  type='password' type="password" value="form.password" onchange={change} id="password"  />
                   </div>
                  <div className=' form mt-5 flex flex-col items-center'>
                      <div className='w-8 flex justify-between items-center'>
                          <div className='flex items-center'>
                              <input className='w-4 h-4' type='checkbox'/>
                          <div className='font-ubuntu fs-12 c-primary'>Намайг сана</div>
                          </div>
                       <div className='font-ubuntu fs-12 underline' onClick={()=>history.push("/reset")}>Нууц үгээ мартсан</div>
                      </div>
                    <Button className='btn font-ubuntu b-primary c-default  disabled w-8 fs-20 lh-23 bold h-5 ph-4 ' onClick={login}>Нэвтрэх</Button>
                    </div>
                    <div className='font-ubuntu fs-12 underline c-primary' onClick={signup}>Шинэ хэрэглэгч бол энд дарна уу</div>
                </div>
            </div>
        </Layoutsignup>
    )
}