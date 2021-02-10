import React from 'react';
import { Navigation } from './';

export const LayoutLogin = ({ children }) => {
    return (
        <div className='flex flex-col items-center pa-3' style={{ width: '100vw', height: '100vh' }}>
        
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
        </div>

            <div className='w100 flex-1'>
                {children}
            </div>

            <div className='font-ubuntu fs-16 lh-18'>
                Made with ♥️ by Nest Academy
            </div>
            <div className='font-ubuntu fs-16 lh-18' style={{ opacity: 0.2 }}>
                ©boginoo.io 2021
            </div>
        </div>
    );
};