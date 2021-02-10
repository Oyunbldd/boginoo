import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import {auth,firestore,createDoc} from './firebase'
import { useHistory } from "react-router-dom"
export const HomeDefault = () => {
    return (
        <Layout>
            <div className='h100 flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70 '>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input className='input b-gray0 h-5 w-8 disabled' placeholder='https://www.web-huudas.mn'  />
                    <Button className='btn font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary  disabled'>Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}