import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, Modal, TouchableHighlight,  ScrollView, FlatList } from 'react-native'
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { firebase, ROOT_REF, RIDES, USER_RIDES } from '../firebase/Config'
import { RideItem } from '../components/Ridesitems';
import styles from '../style/style'




export default class Rides extends React.Component {

    constructor() {
        super();
        this.state = {
          rides: {}
        };
      }
 
    componentDidMount() {
        firebase.database().ref(RIDES).on('value', querySnapShot => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          let rideItems = {...data};
          this.setState({
            rides: rideItems,
          });
        });
      }


    render() {

        let ridesKeys = Object.keys(this.state.rides);
        
        return (
            <ScrollView style={{backgroundColor: '#1c1c1c'}}>
            <View style={styles.container}>

                <Text style={styles.ridesHeader}> Current rides </Text>


                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>

                {/* MY CURRENT RIDES VIEWS */}
                <View style={{ flexDirection: "row" }}>
                              
                    <View style={styles.cardbox}>
                        <Text style={styles.cardboxHeader}> Driver:</Text>
                        <Text style={styles.cardboxText}> OULU - OULAINEN </Text>
                        <Text style={styles.cardboxText}> 24 Mar 2021 </Text>
                        <Text style={styles.cardboxText}> Departure: </Text>
                        <Text style={styles.cardboxText}> Seats left: </Text>
                        <Pressable style={styles.cardButton} onPress={() => {}}>
                            <Text style={styles.cardboxButtonText}>VIEW RIDE</Text>
                        </Pressable>
                    </View> 
                    
                </View>
            </ScrollView>
                <Text style={styles.ridesHeader}>Available rides</Text>

            <ScrollView horizontal={true}>
                {/* AVAILABLE RIDES VIEWS */}
                <View style={{ flexDirection: "row" }}>

                          {ridesKeys.length > 0 ? (
                        ridesKeys.map(key => (
                        <RideItem
                            key={key}
                            id={key}
                            rideItem={this.state.rides[key]}
                        />
                        ))
                    ) : (
                        <Text style={styles.ridesInfo}>There are no rides</Text>
                    )}
                
                </View>
         </ScrollView>

        </View>
    </ScrollView>
        )
    }

}