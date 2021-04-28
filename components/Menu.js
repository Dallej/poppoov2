import React from 'react';
import {View, TextInput, Pressable, Text, Button,Image, Platform} from 'react-native';
import {firebase} from '../firebase/Config';
import styles from '../style/style';


 import ToggleSwitch from 'toggle-switch-react-native';
 import { MaterialIcons } from '@expo/vector-icons';
 import { FontAwesome } from '@expo/vector-icons';


// import {OAMKlogo} from '../img/OAMKlogo'

export default class Menu extends React.Component{

     state = {
         isOnToggleSwitch: false
         
       };

       onToggle(isOn) {
         console.log("Changed to " + isOn);
       }


    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }    
    }

   /*  singIn = () => {
        const {email,password} = this.state
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('profile'))
        .catch(error => console.log(error))
    }
 */
    render(){
        return(
            
            
            <View style={[styles.container,styles.centerpadding]}>
                    
                <Image style={styles.logo} source={require("../img/POPPOO.png")}></Image>                
                
                <View style={styles.menuButtons}>
                <Pressable style={styles.IconButton} onPress={() => this.props.navigation.navigate('rides')}>
                    <Text style={styles.buttonTextMenu}> <MaterialIcons name="directions-car" size={14} color="orange" />  View rides</Text>
                </Pressable>
                </View>

                <View style={styles.menuButtons}>
                <Pressable style={styles.IconButton} onPress={() => this.props.navigation.navigate('addride')}>
                    <Text style={styles.buttonTextMenu}> <FontAwesome name="plus" size={14} color="orange" />  Offer a ride</Text>
                </Pressable>
                </View>
                <View style={styles.menuButtons}>
                    <Pressable style={styles.IconButton} onPress={() => this.props.navigation.navigate('info')}>
                         <Text style={styles.buttonTextMenu}> <FontAwesome name="info" size={14} color="orange" />  Info</Text>
                    </Pressable>
                </View>
                
                <View style={styles.menuButtons}>
                <Pressable onPress={() => this.props.navigation.navigate('login')}>
                    <Text style={styles.buttonMenuLogin}> <MaterialIcons name="login" size={14} color="orange" />  Login</Text>
                </Pressable>
                </View>

                 <View style={styles.footer}>
                     <View style={styles.footerText}>      
                         <ToggleSwitch
                        label="English"
                        onColor="#F79421"
                        labelStyle={{ color: "#fff", fontWeight: "500" }}
                        isOn={this.state.isOnToggleSwitch}
                        onToggle={isOnToggleSwitch => {
                            this.setState({ isOnToggleSwitch });
                            this.onToggle(isOnToggleSwitch);
                        }}
                        /> 
                         <Text style={{ color: "#F79421", fontWeight: "500", marginLeft: 125, marginTop: -20 }}>Finnish</Text>
                    </View>
                </View> 

                </View>
              
                
              
              
        )
        }}
