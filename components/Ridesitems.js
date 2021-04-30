import React, { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  Modal,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { firebase, ROOT_REF, RIDES, USER_RIDES } from "../firebase/Config";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import styles from "../style/style";

export const RideItem = ({
  rideItem: { date, end, mobile, name, start, time, seats },
}) => {
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

      <Pressable style={styles.cardButton} onPress={() => {}}>
        <Text style={styles.cardboxButtonText}>JOIN RIDE</Text>
      </Pressable>
    </View>
  );
};
