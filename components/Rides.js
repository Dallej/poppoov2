import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, Modal, TouchableHighlight,  ScrollView, FlatList } from 'react-native'
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { firebase, ROOT_REF, RIDES, USER_RIDES } from '../firebase/Config'
import styles from '../style/style'




export default class Rides extends React.Component {


    /*  constructor(props) {
        super(props);
        this.state = {
            name: '',
            time: '',
            mobile:''
        }
    
    }  */

    state = {
        rides: null,
        modalVisible: false,
    }

     /* componentDidMount() { 
        firebase.database().ref('/rides').on('value', snapshot => {
          console.log(snapshot.val())
          // console.log(JSON.parse())

        });
    } */

    componentDidMount() { 
        console.log("mounted")
        firebase.database().ref("/rides")
        .get()
        .then( snapshot => {
            console.log(snapshot)
            const rides = [] 
            snapshot.forEach(doc => {
                const data = doc.data()
                rides.push(data)
            })
            this.setState({ rides : rides })
        })
        .catch(error => console.log(error))
           
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

    /*  writeRidesData(rideID, name, mobile, time) {
        firebase.database().ref('rides/ + rideID').set({
          name: name,
          mobile: mobile,
          time : time
        });
    } */

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {

        // let rideKeys = Object.keys(this.state.rides);
        
        return (
            <ScrollView style={{backgroundColor: '#1c1c1c'}}>
            <View style={styles.container}>

                <Text style={styles.ridesHeader}> Current rides </Text>

                 {/* MODAL */}
                    <Modal animationType={"slide"} transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => { console.log("Modal has been closed.") }}>

                        <View style={styles.modal}>
                        <Text style={{fontSize: 30, marginBottom: 30, color: "#77AB9F"}}>OMG A RIDEEE, LETS GOOOO</Text>
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

                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                {/* if there is no rides in my current rides say: 
                No rides yet. Offered or joined rides will appear here*/}

                {/* MY CURRENT RIDES VIEWS */}
                <View style={{ flexDirection: "row" }}>

        {/* ----> TÄSSÄ PITÄISI NÄYTTÄÄ TIETOKANNASTA TULEVA DATA */}
                 {  
                this.state.rides && 
                this.state.rides.map( rides => {
                        return (
                            <View style={styles.cardboxText}>
                                <Text style={styles.cardboxText}>{rides.name}</Text>
                                <Text style={styles.cardboxText}>Mobile:{String(rides.mobile)}</Text>
                            </View>
                        )
                    })
                    } 

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
            </ScrollView>
                <Text style={styles.ridesHeader}>Available rides</Text>

                {/* Add filter for destination here */}

                {/* When view is clicked it opens a "modal" and a button to join that ride */}
            <ScrollView horizontal={true}>
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
                </View>
         </ScrollView>

        </View>
    </ScrollView>
        )
    }

}