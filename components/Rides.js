import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, Modal, TouchableHighlight } from 'react-native'
import { firebase, ROOT_REF, RIDES, USER_RIDES } from '../firebase/Config'
import styles from '../style/style'




export default class Rides extends React.Component {


    /* constructor() {
        super();
        this.state = {
            name: '',
            time: '',
            mobile:''
        }
    
    } */
     componentDidMount() { 
        firebase.database().ref('/rides').on('value', snapshot => {
           console.log(snapshot.val())
           
        });
     } 

     /* componentDidMount() {
        firebase.ref(RIDES).on("value", querySnapShot => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          let rideItem = { ...data };
          this.setState({
            rides: rideItem,
          });
        });
      } */

     writeRidesData(name, mobile, time) {
        firebase.database().ref('rides/').set({
          name: name,
          mobile: mobile,
          time : time
        });
    }
     
     
    state = {
        modalVisible: false,
    }

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {

        // let rideKeys = Object.keys(this.state.rides);
        
        return (
            <View style={styles.container}>

                <Text style={styles.ridesHeader}> Current rides </Text>

                 {/* MODAL */}
                    <Modal animationType={"slide"} transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => { console.log("Modal has been closed.") }}>

                        <View style={styles.modal}>
                        <Text style={{fontSize: 30, marginBottom: 30, color: "#fff"}}></Text>
                            <Text style={styles.modalText}></Text>
                            <Text style={styles.modalText}> Oulainen to Oulu </Text>
                            <Text style={styles.modalText}> Mobile number:  </Text>
                            <Text style={styles.modalText}> date:  </Text>
                            <Text style={styles.modalText}> Departure: time</Text>
                            <Text style={styles.modalText}> Seats left: </Text>

                            <Pressable style={styles.buttonModal} onPress={() => {
                                this.toggleModal(!this.state.modalVisible)}}>
                                <Text style={styles.buttonText}>Close</Text>
                            </Pressable>

                            {/* JOIN RIDE */}
                            <Pressable style={styles.buttonModal}><Text style={styles.buttonText}>JOIN RIDE</Text></Pressable>
                        </View>
                    </Modal>

                {/* if there is no rides in my current rides say: 
                No rides yet. Offered or joined rides will appear here*/}

                {/* MY CURRENT RIDES VIEWS */}
                <View style={{ flexDirection: "row" }}>
                
                    <View style={styles.cardbox}>
                        <Text style={styles.cardboxHeader}> Driver:</Text>
                        <Text style={styles.cardboxText}> OULU - OULAINEN </Text>
                        <Text style={styles.cardboxText}> 24 Mar 2021 </Text>
                        <Text style={styles.cardboxText}> Departure: </Text>
                        <Text style={styles.cardboxText}> Seats left: </Text>
                        <Pressable style={styles.cardButton} onPress={() => { this.toggleModal(true) }}>
                            <Text style={styles.cardboxButtonText}>VIEW RIDE</Text>
                        </Pressable>
                    </View> 

                    <View style={styles.cardbox}>
                        <Text style={styles.cardboxHeader}> Driver: Minna</Text>
                        <Text style={styles.cardboxText}> OULU - OULAINEN </Text>
                        <Text style={styles.cardboxText}> 24 Mar 2021 </Text>
                        <Text style={styles.cardboxText}> Departure: </Text>
                        <Text style={styles.cardboxText}> Seats left: </Text>
                        <Pressable style={styles.cardButton} onPress={() => {
                                this.toggleModal(!this.state.modalVisible)}}>
                            <Text style={styles.cardboxButtonText}>VIEW RIDE</Text>
                        </Pressable>
                    </View>
                </View>

                <Text style={styles.ridesHeader}>Available rides</Text>

                {/* Add filter for destination here */}

                {/* When view is clicked it opens a "modal" and a button to join that ride */}

                {/* AVAILABLE RIDES VIEWS */}
                <View style={{ flexDirection: "row" }}>

                    <View style={styles.cardbox}>
                        <Text style={styles.cardboxText}> Driver: Minna</Text>
                        <Text style={styles.cardboxText}> OULU - OULAINEN </Text>
                        <Text style={styles.cardboxText}> 24 Mar 2021 </Text>
                        <Text style={styles.cardboxText}> Departure: </Text>
                        <Text style={styles.cardboxText}> Seats left: </Text>
                        <Pressable style={styles.cardButton} onPress={() => {
                                this.toggleModal(!this.state.modalVisible)}}>
                            <Text style={styles.cardboxButtonText}>VIEW RIDE</Text>
                        </Pressable>
                    </View>

                    <View style={styles.cardbox}>
                        <Text style={styles.cardboxText}> Driver: Anssi</Text>
                        <Text style={styles.cardboxText}> OULU - OULAINEN </Text>
                        <Text style={styles.cardboxText}> 24 Mar 2021 </Text>
                        <Text style={styles.cardboxText}> Departure: </Text>
                        <Text style={styles.cardboxText}> Seats left: </Text>
                        <Pressable style={styles.cardButton} onPress={() => {
                                this.toggleModal(!this.state.modalVisible)}}>
                            <Text style={styles.cardboxButtonText}>VIEW RIDE</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        )
    }

}