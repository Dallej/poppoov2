import React from 'react';
import {View, TextInput, Pressable, Text} from 'react-native'
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
            <View style={styles.container}>
                
                <Text>OAMK Oulu pickup location</Text>
                <Text>PICTURE OF MAP OR MAP</Text>
            
                <Text>OAMK Oulainen pickup location</Text>
                <Text>PICTURE OF MAP OR MAP</Text>

                
                {/* <Pressable style={styles.button} onPress={this.signUp}>
                    <Text style={styles.buttonText}>Signup</Text>
                </Pressable> */}
            </View>
        )
    }

}