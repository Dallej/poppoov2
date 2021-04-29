
import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native'
import {firebase} from './firebase/Config'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import styles from './style/style'
import Menu from './components/Menu'
import AddRide from './components/AddRide'
import Rides from './components/Rides'
import Login from './components/Login'
import RidesItems from './components/Ridesitems'
import Onboarding from './components/Onboarding'


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
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync({
      'headline': require('./assets/fonts/Poppins-SemiBold.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render(){
    
  
  return (
    

    <NavigationContainer > 
        <Stack.Navigator initialRouteName="Onboarding">

        <Stack.Screen name="onboarding" component={Onboarding}
          options={{
            headerShown: false,
            title:"Available rides",
            headerTitle:"Available rides",
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#292929',
            }
          }}
          >
          </Stack.Screen> 


          <Stack.Screen name="menu"  component={Menu}
          options={{
            headerShown: false,
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
            title:"Rides",
            headerTitle:"Available rides",
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#77AB9F',
            }
           }}
          >
           {/*  <Stack.Screen name="rides" component={Rides}
          options={({ route }) => ({ title: route.params.title,
            //headerTitle:"Available rides",
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#77AB9F',
            }
           })}
          > */}
          </Stack.Screen>

          <Stack.Screen name="addride" component={AddRide}
          options={{
            title:"Offer a ride",
            headerTitle:"Offer a ride",
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#77AB9F',
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
              backgroundColor: '#77AB9F',
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
              backgroundColor: '#77AB9F',
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
};

