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
    bottomBarHeight={60}
    topBarHeight={0}
    imageContainerStyles={{height:400,width:10,paddingTop:10}}
    containerStyles={{height:0}}
    pages={[
      {
        backgroundColor: '#fff',
        
        title: 'Welcome to OAMK POPPOO',
        image: <Image source={require('../img/kuva5.png')} />,
        subtitle: 'Start by creating an account.',
      },
      {
        backgroundColor: '#f1c11a',
       
        title: 'Check out available rides or create your own',
        image: <Image source={require('../img/kuva6.png')} />,
        subtitle: 'Join a ride.',
      },
      {
        backgroundColor: '#999',
        title: 'Enjoy your free trip!',
        image: <Image source={require('../img/kuva2.png')} />,
        subtitle: 'Remember to thank the driver.',
      },
      {
        backgroundColor: '#fff',
        title: 'Remember to stay safe!',
        image: <Image source={require('../img/kuva3.png')} />,
        subtitle: 'More COVID-19 info: www.thl.fi',
      },
    ]}
  />
);
  
  }}
