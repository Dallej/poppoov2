import React, { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  Modal,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from "react-native";
import { createIconSetFromFontello } from "react-native-vector-icons";
import { firebase, ROOT_REF, RIDES, USER_RIDES } from "../firebase/Config";
import { RideItem } from "../components/Ridesitems";
import styles from "../style/style";
import { addUserToRide } from "../components/Ridesitems";

export default class Rides extends React.Component {
  constructor() {
    super();
    this.state = {
      rides: {},
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref(RIDES)
      .on("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let rideItems = { ...data };
        this.setState({
          rides: rideItems,
        });
      });
  }

  render() {
    let ridesKeys = Object.keys(this.state.rides);

    return (
      <ScrollView style={{ backgroundColor: "#1c1c1c" }}>
        <View style={styles.container}>
          {/* MY CURRENT RIDES VIEWS */}

          <Text style={styles.ridesHeader}> Current rides </Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.ridesInfo}></Text>
              {addUserToRide}
            </View>
          </ScrollView>

          {/* AVAILABLE RIDES VIEWS */}

          <Text style={styles.ridesHeader}>Available rides</Text>

          <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row" }}>
              {ridesKeys.length > 0 ? (
                ridesKeys.map((key) => (
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
    );
  }
}
