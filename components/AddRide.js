import React, {useState} from 'react';
import {View, Pressable, Text, TextInput,TouchableWithoutFeedback, ScrollView} from 'react-native'
import Calendar from 'react-native-calendar-datepicker';
import moment from 'moment';

import {firebase, RIDES} from '../firebase/Config'
require('firebase/auth')

import styles from '../style/style'
import {Keyboard} from 'react-native'
import Rides from './Rides';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';




export default class AddRide extends React.Component {
    

    constructor() {
        super();
        this.state = {
            name: '',
            mobile:'',
            time: '',
            start:'',
            date:moment().format(),
            end:'',
            seats: 4,
            nameError: "",
            phoneError: '',
            startError:'',
            endError: '',
            timeError: ''
           
        }
    
    }
    
      AddToDatabase = () => {
        const {name,time,date,mobile,start,end,seats} = this.state
        firebase.database().ref('/rides').push({
            name: name,
            time:time,
            mobile:mobile,
            start:start,
            date: moment(this.state.date).format('DD.MM.YYYY'),
            end:end,
            seats:seats
        })
        .then(() => this.props.navigation.navigate('rides'))
        .catch(error => console.log(error))
     }

     validate(){
         if (this.state.name.trim()!==""&&
         this.state.nickname.trim()!==""&&
         this.state.description.trim()!==""){
             return true;
         }
         else{
             return false;
         }
     }

     
    nameValidator(){
         if(this.state.name==""){
             this.setState({nameError: "Name field can not be empty"})
         }else{
             this.setState({nameError:""})
         }
     }

     phoneValidator(){
        if(this.state.mobile==""){
            this.setState({phoneError: "Mobile number field can not be empty"})
        }else{
            this.setState({phoneError:""})
        }
    }

        startValidator(){
            if(this.state.start==""){
                this.setState({startError: "Start point field can not be empty"})
            }else{
                this.setState({startError:""})
            }
        }

        endValidator(){
            if(this.state.end==""){
                this.setState({endError: "End point field can not be empty"})
            }else{
                this.setState({endError:""})
            }
        }

        timeValidator(){
            if(this.state.time==""){
                this.setState({timeError: "Departure time can not be empty"})
            }else{
                this.setState({timeError:""})
            }
        }

    render() {

        const {date} = this.state;
        const selectedDate = date?date.toString():'';

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ScrollView style={{backgroundColor: '#1c1c1c'}} >

                     <View style={styles.containerAddride}>
                
                        <Text style={styles.headertext}>Enter driver information</Text>
                        <Text style={styles.infotext}><FontAwesome name="user" size={14} color="orange" />  Drivers name</Text>
                        <TextInput 
                            style={styles.inputBoxAddride} 
                            value={this.state.name}
                            onBlur= {() => this.nameValidator()}
                            onChangeText={name=> this.setState({name})}
                            placeholder='Enter your name'
                            placeholderTextColor="#838383"
                            autoCapitalize='words'
                            autoCompleteType='name'                           
                            maxLength={15}> 
                        </TextInput>
                        <Text style={styles.errorMessage}>{this.state.nameError}</Text>

                        <Text style={styles.infotext}><FontAwesome name="mobile-phone" size={14} color="orange" />  Mobile number</Text>

                        <TextInput 
                            style={styles.inputBoxAddride} 
                            value={this.state.mobile}
                            onBlur= {() => this.phoneValidator()}
                            onChangeText={mobile=> this.setState({mobile})}
                            placeholder='Enter your mobile number'
                            placeholderTextColor="#838383"
                            autoCapitalize='none'
                            keyboardType="phone-pad"
                            autocompletetype="tel"
                            textContentType="telephoneNumber"
                            maxLength={15}>
                            
                        </TextInput>
                        <Text style={styles.errorMessage}>{this.state.phoneError}</Text>


                        <Text style={styles.headertext}>Enter ride information</Text>

                        <Text style={styles.infotext}><MaterialIcons name="home" size={14} color="orange" />  Start point  </Text>

                        <TextInput 
                            style={styles.inputBoxAddride} 
                            value={this.state.start}
                            onBlur= {() => this.startValidator()}
                            onChangeText={start=> this.setState({start})}
                            placeholder='Enter ride starting point.'
                            placeholderTextColor="#838383"
                            autoCapitalize='characters'> 
                        </TextInput>
                        <Text style={styles.errorMessage}>{this.state.startError}</Text>

                        <Text style={styles.infotext}> <MaterialIcons name="gps-fixed" size={14} color="orange" />  End point</Text>

                        <TextInput 
                            style={styles.inputBoxAddride} 
                            value={this.state.end}
                            onBlur= {() => this.endValidator()}
                            onChangeText={end=> this.setState({end})}
                            placeholder='Enter ride arriving point.'
                            placeholderTextColor="#838383"
                            autoCapitalize='characters'> 
                        </TextInput>
                        <Text style={styles.errorMessage}>{this.state.endError}</Text>

                        <Text style={styles.infotext}><FontAwesome name="clock-o" size={14} color="orange" />  Departure time </Text>

                         <TextInput 
                            style={styles.inputBoxAddride} 
                            value={this.state.time}
                            onBlur= {() => this.timeValidator()}
                            onChangeText={time=> this.setState({time})}
                            placeholder='Enter departure time '
                            placeholderTextColor="#838383"
                            autoCapitalize='none'
                            keyboardType="decimal-pad"
                            type="time">                 
                        </TextInput> 
                        <Text style={styles.errorMessage}>{this.state.timeError}</Text>

                        <Text style={styles.infotext}><MaterialIcons name="event-seat" size={14} color="orange" />  Seats</Text>
                            <DropDownPicker items={[
                            { label: "1 seat", value: 1 },
                            { label: "2 seats", value: 2 },
                            { label: "3 seats", value: 3 },
                            { label: "4 seats", value: 4 },
                            { label: "5 seats", value: 5 },
                            { label: "6 seats", value: 6 }
                            ]}
                            defaultValue={this.state.seats}
                            style={styles.dropDown}
                            dropDownStyle={{
                            width: '2.1%',
                            marginLeft: '15%'}}
                            onChangeItem={item => this.setState({seats: item.value})}
                            labelStyle={{
                                fontSize: 14,
                                textAlign: 'left',
                                color: '#000',
                            }}
                            ></DropDownPicker>

                        <Text style={styles.infotext}> <FontAwesome name="calendar" size={14} color="orange" />  Select date </Text>

                        <Calendar
                        style={styles.calendarAddride}
                        onChange={(date)=> this.setState({date})}
                        selected={this.state.date}
                        minDate={moment().startOf('day')}
                        maxDate={moment().add(10,'years').startOf('day')}
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