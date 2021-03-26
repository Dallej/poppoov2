
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './style/style'
import Menu from './components/Menu'
import AddRide from './components/AddRide'
import Rides from './components/Rides'
import Login from './components/Login'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Info from './components/Info';


const Stack = createStackNavigator();


export default class App extends React.Component {
  render(){

  
  return (

    <NavigationContainer >
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="menu" component={Menu}
          options={{
            title:"poppoo",
            headerTitle:"poppoo"
          }}
          >
          </Stack.Screen>

          <Stack.Screen name="rides" component={Rides}
          options={{
            title:"Available rides",
            headerTitle:"Available rides"
          }}
          >
          </Stack.Screen>

          <Stack.Screen name="addride" component={AddRide}
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

          <Stack.Screen name="login" component={Login}
          options={{
            title:"Login",
            headerTitle:"Login"
          }}
          >
          </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}
}


