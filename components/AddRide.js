import React from 'react';
import {View, Pressable, Text, TextInput} from 'react-native'
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';
import {firebase} from '../firebase/Config'
import styles from '../style/style'


export default class Login extends React.Component{

    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }    
    }

   /*  SingOut = () => {
        const {email,password} = this.state
        firebase.auth()
        .signOut()
        .then(() => this.props.navigation.navigate('profile'))
        .catch(error => console.log(error))
    } */

    render(){
        return(
            <View style={styles.container}>

                <Text>This page is showing add ride +</Text>
                <Text>Enter Driver name</Text>
                <TextInput></TextInput>
                <Text>Enter Time and date </Text>
                <TextInput></TextInput>
                <Calendar
                onChange={(date)=> this.setState({date})}
                selected={this.state.date}
                minDate={Moment().startOf('day')}
                maxDate={Moment().add(10,'years').startOf('day')}
                />
                
               {/* <Text>Hello, {firebase.auth().currentUser.email}</Text> */}

              <Pressable style={styles.button} onPress={this.signOut}>
                  <Text style={styles.buttonText}>Add </Text>
              </Pressable> 
            </View>
        )
    }

}