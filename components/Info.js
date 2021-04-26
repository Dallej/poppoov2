import React from 'react';
import { View, TextInput, Pressable, Text, Image } from 'react-native'
import { firebase, ROOT_REF } from '../firebase/Config'
import styles from '../style/style'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';


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
        
            return (
                <ScrollView style={{backgroundColor: '#1c1c1c'}}>
                <View style={[styles.container, styles.centerpadding]}>
                    <Image style={styles.logoInfo} source={require("../img/OAMKlogo.png")}></Image>
                    <View style={styles.infoPage}>
                        <Text style={styles.infoPageHeader}>Purpose of the app:</Text>
                        <Text style={styles.infoPageText}>This app was made for OAMK's teachers and students to make travelling between 
                            Oulu and Oulainen easier and more eco-friendly through carpooling.                         
                        </Text>
                        
                        <Image style={styles.map} source={require("../img/infoImage.png")}></Image>

                        <Text style={styles.infoPageHeader}>Pick up locations:</Text>
                        <Text style={styles.infoPageText}> Yliopistokatu 9, 90570 Oulu </Text>   
                        <Text style={styles.infoPageText}> Kuntotie 2, 86300 Oulainen</Text>
                    </View>
                </View>
                </ScrollView>
            );
        } 
}
