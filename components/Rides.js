import React from 'react';
import { View, TextInput, Pressable, Text, Button } from 'react-native'
import { firebase, ROOT_REF } from '../firebase/Config'
import styles from '../style/style'


export default class Rides extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <View style={styles.container}>



                <Text style={{ fontWeight: "bold", fontSize: 20 }}> My current rides </Text>

                {/* if there is no rides in my current rides say: 
                No rides yet. Offered or joined rides will appear here*/}

                {/* MY CURRENT RIDES VIEWS */}
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.cardbox}>
                        <Text style={styles.cardboxHeader}> Minna's ride</Text>
                        <Text style={styles.cardboxText}> OULU - OULAINEN </Text>
                        <Text style={styles.cardboxText}> 24 Mar 2021 </Text>
                        <Text style={styles.cardboxText}> Departure: </Text>
                        <Text style={styles.cardboxText}> Seats left: </Text>
                        <Pressable style={styles.cardButton}>
                            <Text style={styles.cardboxText}>View</Text>
                        </Pressable>
                    </View>
                    <View style={styles.cardbox}>
                        <Text style={styles.cardboxHeader}> Minna's ride</Text>
                        <Text style={styles.cardboxText}> OULU - OULAINEN </Text>
                        <Text style={styles.cardboxText}> 24 Mar 2021 </Text>
                        <Text style={styles.cardboxText}> Departure: </Text>
                        <Text style={styles.cardboxText}> Seats left: </Text>
                        <Pressable style={styles.cardButton}>
                            <Text style={styles.cardboxText}>View</Text>
                        </Pressable>
                    </View>
                </View>

                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Join available rides</Text>

                {/* Add filter for destination here */}

                {/* When view is clicked it opens a "modal" and a button to join that ride */}

                {/* AVAILABLE RIDES VIEWS */}
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.cardbox}>
                        <Text style={styles.cardboxHeader}> Minna's ride</Text>
                        <Text style={styles.cardboxText}> OULU - OULAINEN </Text>
                        <Text style={styles.cardboxText}> 24 Mar 2021 </Text>
                        <Text style={styles.cardboxText}> Departure: </Text>
                        <Text style={styles.cardboxText}> Seats left: </Text>
                        <Pressable style={styles.cardButton}>
                            <Text style={styles.cardboxText}>View</Text>
                        </Pressable>
                    </View>
                    <View style={styles.cardbox}>
                        <Text style={styles.cardboxHeader}> Anssi's ride</Text>
                        <Text style={styles.cardboxText}> OULU - OULAINEN </Text>
                        <Text style={styles.cardboxText}> 24 Mar 2021 </Text>
                        <Text style={styles.cardboxText}> Departure: </Text>
                        <Text style={styles.cardboxText}> Seats left: </Text>
                        <Pressable style={styles.cardButton}>
                            <Text style={styles.cardboxText}>View</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        )
    }

}