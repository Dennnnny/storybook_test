
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number,object } from "@storybook/addon-knobs";


import OAuthInput from '../components/OAuthInput';

export default {
    component: OAuthInput,
    title: 'OAuthInput',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,  
    decorators: [withKnobs]
};

export const inputData = {
    inputLabel:'label',
    placeHolder:'placeHolder',
    check:false,
    userName:'userName',
    userInput:'',
    error:{},
    type:'text',
    visibility:false,
};

export const inputPhoneData = {
    inputLabel:'手機號碼',
    placeHolder:'例：0912345678',
    check:false,
    userName:'userPhone',
    error:{},
    type:'text',
    visibility:false,
    userInput:''
};

export const inputEmailData = {
    inputLabel:'電子信箱',
    placeHolder:'例：123@gamil.com',
    userName:'userEmail',
    check:false,
    error:{},
    type:'text',
    visibility:false,
    userInput:''
};

export const inputTextData = {
    inputLabel:'輸入簡訊驗證碼',
    placeHolder:'七碼英數組合，不分大小寫',
    userName:'userText',
    check:false,
    error:{},
    type:'text',
    visibility:false,
    userInput:''
};

export const inputText2Data = {
    inputLabel:'輸入簡訊驗證碼',
    placeHolder:'請輸入簡訊驗證碼',
    check:false,
    userName:'userText',
    error:{},
    type:'text',
    visibility:false,
    userInput:''
};

export const passwordData = {
    inputLabel:'驗證碼（密碼）',
    placeHolder:'請輸入密碼',
    check:false,
    userName:'userPassword',
    error:{},
    type:'password',
    visibility:true,
    userInput:'ssss'
};

export const actionsData = {
  setUserInput: action('onBlur...'),
  passwordVisibility : action('click')
};

export const styleData = {
    display:'flex',
    flexDirection:'column',
}


export const Default = () => <OAuthInput  { ...inputData }/>;

export const CorrectInput = () => <OAuthInput  {...{...inputData,check:true,userInput:'...'}}/>;

export const ErrorInput = () => <OAuthInput  {...{...inputData,check:false,error:{'userName':{type:'required'}}}}/>;

export const FormatErrorInput = () => <OAuthInput  {...{...inputData,check:false,error:{'userName':{type:'pattern'}}}}/>;

export const PhoneInput = () => <OAuthInput  { ...inputPhoneData }/>;

export const EmailInput = () => <OAuthInput  { ...inputEmailData }/>;

export const TextInput = () => <OAuthInput  { ...inputTextData }/>;

export const Text2Input = () => <OAuthInput  { ...inputText2Data }/>;

export const PasswordInput = () => <OAuthInput  { ...passwordData } {...actionsData} />;

export const PasswordNotInvisibleInput = () => <OAuthInput  { ...{...passwordData,visibility:false,type:'text'} } {...actionsData} />;






