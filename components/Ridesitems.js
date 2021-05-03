import React, { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  Modal,
  TouchableHighlight,
  StyleSheet,
  DrawerLayoutAndroidBase,
} from "react-native";
import { firebase, ROOT_REF, RIDES, USER_RIDES } from "../firebase/Config";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import styles from "../style/style";

export const RideItem = ({
  rideItem: { date, end, mobile, name, start, time, seats },
}) => {
  const addUserToRide = () => {
    /* const user = firebase.auth().currentUser;
    firebase.ref(RIDES + this.state.name + USER_RIDES + this.state.user).set({
      isActive: true,
    }); */
    seats - 1;
  };

  return (
    <View style={styles.cardbox}>
      <Text style={styles.cardboxHeader}> Driver: {name}</Text>
      <Text style={styles.cardboxText}>
        {" "}
        {start} - {end}
      </Text>
      <Text style={styles.cardboxText}> Date: {date} </Text>
      <Text style={styles.cardboxText}> Departure: {time} </Text>
      <Text style={styles.cardboxText}> Mobile: {mobile}</Text>
      <Text style={styles.cardboxText}> Seats: {seats}</Text>

      <Pressable style={styles.cardButton} onPress={addUserToRide}>
        <Text style={styles.cardboxButtonText}>JOIN RIDE</Text>
      </Pressable>
    </View>
  );
};
