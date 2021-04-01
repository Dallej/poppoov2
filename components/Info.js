import React from 'react';
import {View, TextInput, Pressable, Text, Image} from 'react-native'
import {firebase, ROOT_REF} from '../firebase/Config'
import styles from '../style/style'


export default class Info extends React.Component{

    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:''
        }    
    }

    render(){
        return(
            <View style={[styles.container,styles.centerpadding]}>
                <Image style={styles.logo} source={require("../img/OAMKlogo.png")}></Image> 
                
                <Text style={{fontWeight: "bold", color: "#fff"}}>OAMK Oulu pickup location</Text>
                <Text style={{color: "#fff"}}> Yliopistokatu 9, 90570 Oulu </Text>
            <Image style={styles.map} source={require("../img/mapfirst.jpg")}></Image> 
            
                <Text style={{fontWeight: "bold", color: "#fff"}}>OAMK Oulainen pickup location</Text>
                <Text  style={{color: "#fff"}}> Kuntotie 2, 86300 Oulainen</Text>
                {/* <Pressable style={styles.button} onPress={this.signUp}>
                    <Text style={styles.buttonText}>Signup</Text>
                </Pressable> */}
            </View>
        )
    }

}