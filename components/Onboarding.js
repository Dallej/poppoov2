 import { Image } from 'react-native';
 import React from 'react';

 import Onboarding from 'react-native-onboarding-swiper';



/*  const Simple = () => ( 
 */
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
        image: <Image source={require('../img/createAccount.png')} />,
        subtitle: 'Start by creating an account',
      },
      {
        backgroundColor: '#fff',
       
        title: 'Check out available rides or create your own',
        image: <Image source={require('../img/JoinRideImage.png')} />,
        subtitle: 'Join a ride or offer one',
      },
      {
        backgroundColor: '#fff',
        title: 'Enjoy your free trip!',
        image: <Image source={require('../img/tripImage.png')} />,
        subtitle: 'Remember to thank the driver',
      },
      {
        backgroundColor: '#fff',
        title: 'Remember to stay safe!',
        image: <Image source={require('../img/staySafe.png')} />,
        subtitle: 'More COVID-19 info: www.thl.fi',
      },
    ]}
  />
);
  
   }}
 