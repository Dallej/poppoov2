import React from 'react';
import {View, Pressable, Text, TextInput,TouchableWithoutFeedback} from 'react-native'
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';

import {firebase} from '../firebase/Config'
require('firebase/auth')

import styles from '../style/style'
import {Keyboard} from 'react-native'





export default class AddRide extends React.Component {


    constructor() {
        super();
        this.state = {
            name: '',
            time: '',
            mobile:''
        }
    
    }

    
      AddToDatabase = () => {
        const {name,time,date} = this.state
        firebase.auth()
        .then(() => firebase.database().ref(ROOT_REF).push({
            name: name,
            time:time,
            mobile:mobile
        }))
        .then(() => this.props.navigation.navigate('rides'))
        .catch(error => console.log(error))
     } 

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                
                <Text style={styles.headertext}>Enter new ride information:</Text>

                <Text style={styles.infotext}>Driver name</Text>

                <TextInput 
                    style={styles.inputBox} 
                    value={this.state.name}
                    onChangeText={name=> this.setState({name})}
                    placeholder='enter your name...'
                    autoCapitalize='none'> 
                </TextInput>

                <Text style={styles.infotext}>Mobile number</Text>

                <TextInput 
                    style={styles.inputBox} 
                    value={this.state.mobile}
                    onChangeText={mobile=> this.setState({mobile})}
                    placeholder='enter your mobile number...'
                    autoCapitalize='none'
                    keyboardType="phone-pad"
                    autocomplete="tel">
                    
                </TextInput>

                <Text style={styles.infotext}>Enter Time </Text>

                <TextInput 
                    style={styles.inputBox} 
                    value={this.state.time}
                    onChangeText={time=> this.setState({time})}
                    placeholder='enter time...'
                    autoCapitalize='none'
                    keyboardType="decimal-pad"
                    type="time"> 
                </TextInput>
    



                <Pressable style={styles.button} onPress={this.AddToDatabase}>
                    <Text style={styles.buttonText}>Add </Text>
                </Pressable>

                <Text style={styles.infotext}>Select date </Text>

                <Calendar
                onChange={(date)=> this.setState({date})}
                selected={this.state.date}
                 minDate={Moment().startOf('day')}
                 maxDate={Moment().add(10,'years').startOf('day')}
                />

            </View>
            </TouchableWithoutFeedback>
            
        )
    }

}