import React from 'react';
import {View, Pressable, Text, TextInput} from 'react-native'
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';

import {firebase} from '../firebase/Config'
require('firebase/auth')

import styles from '../style/style'





export default class AddRide extends React.Component {


    constructor() {
        super();
        this.state = {
            name: '',
            time: ''
        }
    
    }

    
      AddToDatabase = () => {
        const {name,time,date} = this.state
        firebase.auth()
        // .createUserWithEmailAndPassword(email, password)
        .then(() => firebase.database().ref(ROOT_REF).push({
            name: name,
            time:time
        }))
        .then(() => this.props.navigation.navigate('rides'))
        .catch(error => console.log(error))
     } 

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.headertext}>Enter new ride information:</Text>

                <Text style={styles.infotext}>Driver name</Text>

                <TextInput 
                    style={styles.inputBox} 
                    value={this.state.name}
                    onChangeText={name=> this.setState({name})}
                    placeholder='enter your name...'
                    placeholderTextColor="#b8b8b8"
                    autoCapitalize='none'> 
                </TextInput>

                <Text style={styles.infotext}>Mobile number</Text>

                <TextInput 
                    style={styles.inputBox} 
                    value={this.state.name}
                    onChangeText={name=> this.setState({name})}
                    placeholder='enter your mobile number...'
                    placeholderTextColor="#b8b8b8"
                    autoCapitalize='none'
                    autocomplete="tel">
                    
                </TextInput>

                

                <Text style={styles.infotext}>Enter Time </Text>

                <TextInput 
                    style={styles.inputBox} 
                    value={this.state.time}
                    onChangeText={time=> this.setState({time})}
                    placeholder='enter time...'
                    placeholderTextColor="#b8b8b8"
                    autoCapitalize='none'
                    keyboardType="decimal-pad"
                    type="time"> 
                </TextInput>

                


                <Text style={styles.infotext}>Select date </Text>
                <Calendar
                onChange={(date)=> this.setState({date})}
                selected={this.state.date}
                 minDate={Moment().startOf('day')}
                 maxDate={Moment().add(10,'years').startOf('day')}
                />
                
                
               {/* <Text>Hello, {firebase.auth().currentUser.email}</Text> */}

                
                <Pressable style={styles.button} onPress={this.AddToDatabase}>
                    <Text style={styles.buttonText}>Add </Text>
                </Pressable>
            </View>
        )
    }

}