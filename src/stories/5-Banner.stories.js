
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number,object } from "@storybook/addon-knobs";


import Banner from '../components/Banner';

export default {
    component: Banner,
    title: 'Banner',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,  
    decorators: [withKnobs]
};

export const bannerData = {
  bannerLink:'http://invoice.tw/news/wp-content/uploads/2020/04/理膚寶水.001.png',
  logoLink:'https://invoice.tw/news/wp-content/uploads/2020/04/logo_240x240.png'
};

export const actionsData = {
  setUserInput: action('onBlur...'),
};

export const styleData = {
    backgroundColor:'#ccc'
}

// export const withAButton = () => (
//     <button disabled={boolean("Disabled", false)}>
//       {text("Label", "Hello Storybook")}
//     </button>
//   );
  
//   // Knobs as dynamic variables.
//   export const asDynamicVariables = () => {
//     const name = text("Name", "James");
//     const age = number("Age", 35);
//     const content = `I am ${name} and I'm ${age} years old.`;
  
//     return <div>{content}</div>;
//   };


export const Default = () => <Banner style={object('style',styleData)} {...bannerData} />;

export const NoBanner = () => <Banner {...{...bannerData,bannerLink:'' }}/>;