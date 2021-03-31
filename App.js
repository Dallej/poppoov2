
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {firebase} from './firebase/Config'

import styles from './style/style'
import Menu from './components/Menu'
import AddRide from './components/AddRide'
import Rides from './components/Rides'
import Login from './components/Login'


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Info from './components/Info';
import Signup from './components/Signup';


const Stack = createStackNavigator();
const user = firebase.auth().currentUser;

if (user) {
 console.log('User email: ', user.email);
}


export default class App extends React.Component {
  render(){
  
  
  return (

    <NavigationContainer >
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="menu"  component={Menu}
          options={{
            title:"OAMK poppoo",
            headerTitle:"OAMK poppoo", 
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#292929',
            }
          }}
          >
          </Stack.Screen>

          <Stack.Screen name="rides" component={Rides}
          options={{
            title:"Available rides",
            headerTitle:"Available rides",
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#292929',
            }
          }}
          >
          </Stack.Screen>

          <Stack.Screen name="addride" component={AddRide}
          options={{
            title:"Offer a ride",
            headerTitle:"Offer a ride",
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#292929',
            }
          }}
          >
          </Stack.Screen>

          <Stack.Screen name="info" component={Info}
          options={{
            title:"Info",
            headerTitle:"Info",
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#292929',
            }
          }}
          >
          </Stack.Screen>

          <Stack.Screen name="login" component={Login}
          options={{
            title:"Login",
            headerTitle:"Login",
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#292929',
            }
          }}
          >
          </Stack.Screen>

          <Stack.Screen name="signup" component={Signup}
          options={{
            title:"Signup",
            headerTitle:"Signup",
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#292929',
            }
          }}
          >
          </Stack.Screen>

        </Stack.Navigator>
    </NavigationContainer>
  );

}

}


