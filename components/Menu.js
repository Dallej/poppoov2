import React from 'react';
import {View, TextInput, Pressable, Text, Button,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {firebase} from '../firebase/Config';
import styles from '../style/style';

// import {OAMKlogo} from '../img/OAMKlogo'


export default class Login extends React.Component{

    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }    
    }

   /*  singIn = () => {
        const {email,password} = this.state
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('profile'))
        .catch(error => console.log(error))
    }
 */
    render(){
        return(
            
            <View style={styles.container}>
                    
                <Image style={styles.logo} source={require("../img/POPPOO.png")}></Image>                

                <View style={styles.menuButtons}>
                <Icon.Button name="group" color= '#292929' style={styles.IconButton} onPress={() => this.props.navigation.navigate('rides')}>
                    <Text style={styles.buttonText}>Rides</Text>
                </Icon.Button>
                </View>

                <View style={styles.menuButtons}>
                <Icon.Button name="car" color= '#292929' style={styles.IconButton} onPress={() => this.props.navigation.navigate('addride')}>
                    <Text style={styles.buttonText}>Offer a Ride</Text>
                </Icon.Button>
                </View>

                <View style={styles.menuButtons}>
                <Icon.Button name="user" color= '#292929'
                style={styles.IconButton} onPress={() => this.props.navigation.navigate('login')}>
                    <Text style={styles.buttonText}>Login</Text>
                </Icon.Button>
                </View>

                <View style={styles.menuButtons}>
                <Icon.Button name="info" color= '#292929' style={styles.IconButton} onPress={() => this.props.navigation.navigate('info')}>
                    <Text style={styles.buttonText}>About</Text>
                </Icon.Button>
                </View>
            </View>
             
        )
    }

}
