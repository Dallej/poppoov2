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
import Rides from "./Rides";
import { set } from "react-native-reanimated";

export const RideItem = ({
  rideItem: { date, end, mobile, name, start, time, seats },
}) => {
  let [inRide, setInRide] = useState(false);
  let [button, setButton] = useState("JOIN RIDE");
  // TRYING TO JOIN A RIDE
  /* const addUserToRide = () => {
     const user = firebase.auth().currentUser;
    firebase.ref(USER_RIDES + name + USER_RIDES + user).set({
      isActive: true,
    }); 
    seats - 1;
    alert("Successfully joined a ride!");
    return <View>{name}</View>;
  }; */

  // TRYING TO PUSH DATA TO FIREBASE
  const addUserToRide = () => {
    const user = firebase.auth().currentUser;
    let userRef = firebase.database().ref("/rides/" + "-MZrN14UvWadeb9r3mBm");
    userRef.update({
      seats: seats - 1,
    });
    firebase
      .database()
      .ref("/user_rides")
      .push({
        name: name,
        seats: seats - 1,
      })
      .then(() => {
        alert("Successfully joined " + name + "'s" + " ride!");
        setInRide(true);
      })
      .catch((error) => console.log(error));

    if ((inRide = true)) {
      setButton("JOINED");
    }
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
        <Text style={styles.cardboxButtonText}>{button}</Text>
      </Pressable>
    </View>
  );
};
