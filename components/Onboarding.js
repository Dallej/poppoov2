import { Image } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';

const Simple = () => (
    <Onboarding
    onDone={() => this.props.navigation.navigate('info')}
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

export default Simple;