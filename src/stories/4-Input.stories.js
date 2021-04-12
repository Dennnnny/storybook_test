
import React from 'react';
import { action } from '@storybook/addon-actions';

import Input from '../components/Input';

export default {
    component: Input,
    title: 'Input',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,  
};

export const inputData = {
  label:'收件人姓名',
  inputName:"userName",
  inputType:"text",
  inputMode:"",
  placeHolder:"預設值",
//   register={required:true},
  errors:{},
  userInput:''
};

export const actionsData = {
  setUserInput: action('onBlur...'),
};

export const NameData = {
  label:'收件人姓名',
  inputName:"userName",
  inputType:"text",
  inputMode:"",
  placeHolder:"請輸入真實姓名",
//   register={required:true},
  errors:{},
  userInput:''
}

export const PhoneNumberData = {
  label:'電話',
  inputName:"userPhone",
  inputType:"tel",
  inputMode:"",
  placeHolder:"請輸入手機號碼",
//   register={required:true},
  errors:{},
  userInput:''
}



export const Default = () => <Input {...inputData} {...actionsData} />;

export const ErrorInput = () => <Input {...{...inputData, errors:{'userName':{type:'required'}}}}  />;

export const ErrorFormatInput = () => <Input {...{...inputData,userInput:'formatError', errors:{'userName':{type:'pattern'}}}}  />;

export const CorrectInput = () => <Input {...{...inputData, userInput:'testUser'}} />

export const PhoneInput = () => <Input {...{...PhoneNumberData}}  /> 
// export const Pinned = () => <Input task={{ ...inputData, state: 'TASK_PINNED' }} {...actionsData} />;

// export const Archived = () => (
//   <Input task={{ ...inputData, state: 'TASK_ARCHIVED' }} {...actionsData} />
// );