import React from 'react';
import { View, TextInput, Pressable, Text, Image } from 'react-native'
import { firebase, ROOT_REF } from '../firebase/Config'
import styles from '../style/style'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';


export default class Info extends React.Component{

    
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            fontsLoaded: false
        }
    }

    async _loadFontsAsync() {
        await Font.loadAsync({
          'headline': require('../assets/fonts/Poppins-SemiBold.ttf'),
        });
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this._loadFontsAsync();
      }
    

    render() {
        if (this.state.fontsLoaded) {
            return (
                <View style={[styles.container, styles.centerpadding]}>
                    <Image style={styles.logo} source={require("../img/OAMKlogo.png")}></Image>


                    <View>
                        <Text style={{ fontWeight: "bold", color: "#fff" }}>OAMK Oulu pickup location</Text>
                        <Text style={{ color: "#fff" }}> Yliopistokatu 9, 90570 Oulu </Text>
                        <Image style={styles.map} source={require("../img/mapfirst.jpg")}></Image>
                    </View>

                    <View>
                        <Text style={{ fontWeight: "bold", color: "#fff" }}>OAMK Oulainen pickup location</Text>
                        <Text style={{ color: "#fff" }}> Kuntotie 2, 86300 Oulainen</Text>
                        <Image style={styles.map} source={require("../img/mapfirst.jpg")}></Image>
                    </View>
                </View>
            );
        }  else {
        return <AppLoading />;
    }
}
}