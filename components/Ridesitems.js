import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, Modal, TouchableHighlight } from 'react-native'
import { firebase, ROOT_REF, RIDES, USER_RIDES } from '../firebase/Config'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const RidesItem = ({ ridesItem: {ridesItem: title, done }, id}) => {

const [doneState, setDone] = useState(done);

const onCheck = () => {
    setDone(!doneState);
    firebase.ref(RIDES).update({
        [id]: {
            ridesItem: title,
            done: !doneState,
        },
    });
};

const onRemove = () => {
    firebase.ref(RIDES + [id]).remove();
};

return (
    <View>
            <Text onPress={onCheck}
            style={
                [
                {backgroundColor: doneState ? "lightgreen" : "lightblue"}]}>
                {title}
                </Text>
                <Entypo name={"trash"} size={32} onPress={onRemove} />
    </View>
)


}