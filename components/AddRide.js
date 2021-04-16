import React from 'react';
import {View, Pressable, Text, TextInput,TouchableWithoutFeedback, ScrollView} from 'react-native'
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';

import {firebase, RIDES} from '../firebase/Config'
require('firebase/auth')

import styles from '../style/style'
import {Keyboard} from 'react-native'
import Rides from './Rides';

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
        const {name,time,date,mobile} = this.state
        firebase.database().ref('/rides').push({
            name: name,
            time:time,
            mobile:mobile
        })
        // .then(() => this.props.navigation.navigate('rides'))
        .catch(error => console.log(error))
     } 

    render() {

        
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ScrollView >

                     <View style={styles.containerAddride}>
                
                        <Text style={styles.headertext}>Enter your ride information</Text>

                        <Text style={styles.infotext}>Drivers name</Text>

                        <TextInput 
                            style={styles.inputBoxAddride} 
                            value={this.state.name}
                            onChangeText={name=> this.setState({name})}
                            placeholder='Enter your name'
                            placeholderTextColor="#838383"
                            autoCapitalize='none'> 
                        </TextInput>

                        <Text style={styles.infotext}>Mobile number</Text>

                        <TextInput 
                            style={styles.inputBoxAddride} 
                            value={this.state.mobile}
                            onChangeText={mobile=> this.setState({mobile})}
                            placeholder='Enter your mobile number'
                            placeholderTextColor="#838383"
                            autoCapitalize='none'
                            keyboardType="phone-pad"
                            autocomplete="tel">
                            
                        </TextInput>

                        <Text style={styles.infotext}>Departure time </Text>

                        <TextInput 
                            style={styles.inputBoxAddride} 
                            value={this.state.time}
                            onChangeText={time=> this.setState({time})}
                            placeholder='Enter departure time '
                            placeholderTextColor="#838383"
                            autoCapitalize='none'
                            keyboardType="decimal-pad"
                            type="time"> 
                        </TextInput>

                        <Text style={styles.infotext}>Select date </Text>

                        <Calendar
                        style={styles.calendarAddride}
                        onChange={(date)=> this.setState({date})}
                        selected={this.state.date}
                        minDate={Moment().startOf('day')}
                        maxDate={Moment().add(10,'years').startOf('day')}
                        />

                        <Pressable style={styles.buttonAddride} onPress={this.AddToDatabase}>
                            <Text style={styles.buttonText}>Offer a ride </Text>
                        </Pressable>

                    </View>
                 </ScrollView>
            </TouchableWithoutFeedback>
            
        )
    }

}