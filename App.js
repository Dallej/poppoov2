
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './style/style'
import Login from './components/Login'
import Profile from './components/Profile'
import Signup from './components/Signup'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Info from './components/Info';


const Stack = createStackNavigator();


export default class App extends React.Component {
  render(){

  
  return (

    <NavigationContainer >
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="login" component={Login}
          options={{
            title:"poppoo",
            headerTitle:"poppoo"
          }}
          >
          </Stack.Screen>

          <Stack.Screen name="signup" component={Signup}
          options={{
            title:"Available rides",
            headerTitle:"Available rides"
          }}
          >
          </Stack.Screen>

          <Stack.Screen name="profile" component={Profile}
          options={{
            title:"Offer a ride",
            headerTitle:"Offer a ride"
          }}
          >
          </Stack.Screen>

          <Stack.Screen name="info" component={Info}
          options={{
            title:"Info",
            headerTitle:"Info"
          }}
          >
          </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}
}


