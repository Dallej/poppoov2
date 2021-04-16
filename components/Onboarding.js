import { Image } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';



/* const Simple = () => ( */

 export default class Simple extends React.Component{  
  
  constructor(){
    super();
    this.state={
        
    }   
}

  render(){
    
    return ( 

    <Onboarding
    onDone={() =>  this.props.navigation.navigate('menu')}
    onSkip={() => this.props.navigation.navigate('menu')}
    pages={[
      {
        backgroundColor: '#fff',
        
        title: 'Welcome',
        image: <Image source={require('../img/boarding1.jpg')} />,
        subtitle: 'testing text',
      },
      {
        backgroundColor: '#fe6e58',
        
        title: 'How to use...',
        image: <Image source={require('../img/boarding1.jpg')} />,
        subtitle: 'testing text',
      },
      {
        backgroundColor: '#999',
        title: 'Stay safe!',
        image: <Image source={require('../img/boarding1.jpg')} />,
        subtitle: 'testing text',
      },
    ]}
  />
);
  
  }}
