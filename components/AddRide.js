import React from 'react';
import {View, Pressable, Text, TextInput} from 'react-native'
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';
import {firebase} from '../firebase/Config'
import styles from '../style/style'





export default class AddRide extends React.Component {


    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        
       
    }

    
    /*  AddToDatabase = () => {
         const {email,password} = this.state
         firebase.auth()
         .signOut()
         .then(() => this.props.navigation.navigate('profile'))
         .catch(error => console.log(error))
     } */

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.headertext}>Enter new ride information:</Text>

                <Text>Driver name</Text>
                <TextInput placeholder="enter your name..."></TextInput>

                <Text>Enter Time </Text>
                <TextInput placeholder="enter time..." keyboardType="decimal-pad"></TextInput>


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