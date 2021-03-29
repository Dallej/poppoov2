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

                <Text>Driver name</Text>

                <TextInput 
                    style={styles.inputBox} 
                    value={this.state.name}
                    onChangeText={name=> this.setState({name})}
                    placeholder='enter your name...'
                    autoCapitalize='none'> 
                </TextInput>

                {/* <TextInput placeholder="enter your name..."></TextInput> */}

                <Text>Enter Time </Text>

                <TextInput 
                    style={styles.inputBox} 
                    value={this.state.time}
                    onChangeText={time=> this.setState({time})}
                    placeholder='enter time...'
                    autoCapitalize='none'
                    keyboardType="decimal-pad"> 
                </TextInput>

                {/* <TextInput placeholder="enter time..." keyboardType="decimal-pad"></TextInput> */}


                <Text>Select date </Text>
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