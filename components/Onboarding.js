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
        
         title: 'Welcome to POPPOO',
         image: <Image source={require('../img/kuva.png')} />,
         subtitle: 'Start by checking out rides...',
       },
       {
         backgroundColor: '#f1c11a',
       
         title: 'How to use...',
         image: <Image source={require('../img/kuva.png')} />,
         subtitle: 'Continue by joining a ride...',
       },
       {
         backgroundColor: '#999',
         title: 'Enjoy your free trip!',
         image: <Image source={require('../img/kuva.png')} />,
         subtitle: 'Remember to stay safe!',
       },
     ]}
    />
 );
  
   }}
 