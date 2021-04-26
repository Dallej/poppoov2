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
         backgroundColor: '#77AB9F',
        
        title: 'Welcome to OAMK POPPOO',
        titleStyles: {color: "#fff"}, 
        subTitleStyles: {color: "#fff"},
        image: <Image source={require('../img/createAccount.png')} />,
        subtitle: 'Start by creating an account',
      },
      {
        backgroundColor: '#1c1c1c',
       
        title: 'Check out available rides or create your own',
        image: <Image source={require('../img/JoinRideImage.png')} />,
        subtitle: 'Join a ride or offer one',
        titleStyles: {color: "#fff"}, 
        subTitleStyles: {color: "#fff"},
      },
      {
        backgroundColor: '#F79421',
        title: 'Enjoy your free trip!',
        image: <Image source={require('../img/tripImage.png')} />,
        subtitle: 'Remember to thank the driver',
        titleStyles: {color: "#fff"}, 
        subTitleStyles: {color: "#fff"},
      },
      {
        backgroundColor: '#1c1c1c',
        title: 'Remember to stay safe!',
        image: <Image source={require('../img/staySafe.png')} />,
        subtitle: 'More COVID-19 info: www.thl.fi',
        titleStyles: {color: "#fff"}, 
        subTitleStyles: {color: "#fff"},
      },
    ]}
  />
);
  
   }}
 