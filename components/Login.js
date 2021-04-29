import React, {useState} from 'react';
import { View, TextInput, Pressable, Text, Button } from 'react-native'
import { firebase } from '../firebase/Config'
import styles from '../style/style'

const user = firebase.auth().currentUser;
// const [loginState, setLoginState] = useState("Login");

export default class Login extends React.Component {


    
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            
            
        }
    }

    signIn = () => {
        const { email, password} = this.state
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                var name = user.displayName;
                alert("Logged-in successfully", "test")
                console.log('User logged-in successfully!', {email})
                //setLoginState("Sign Out")
                // ...
              })
            .then(() => this.props.navigation.navigate('rides', {title:"Welcome " + email}))
            .catch(error => console.log(error))

            user.providerData.forEach((userInfo) => {
                console.log('User info for provider: ', userInfo);
              });
    }

    signOut = () => {firebase.auth().signOut()
            .then(() => {
                alert("Sign-out successful.")
                this.props.navigation.navigate('login')}
                )
            .catch(error => console.log(error))
    }

    


    render() {
        // this.state = {
        //     displayName: firebase.auth().currentUser.displayName,
        //     uid: firebase.auth().currentUser.uid
        // }
        return (
            <View style={styles.container}>

                <Text style={styles.headertext}>Login to your account</Text>

                {/* <Text style={styles.textStyle}>
                    Hello, {this.state.displayName}
                </Text> */}
                <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Enter your email'
                    placeholderTextColor="#838383"
                    autoCapitalize='none'
                    autocomplete="email" 
                    keyboardType="email-address">
                        
                </TextInput>


                <TextInput
                    style={styles.inputBox}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='Enter your password'
                    placeholderTextColor="#838383"
                    secureTextEntry={true}>
                </TextInput>

                <Pressable style={styles.loginButton} onPress={this.signIn}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </Pressable>

                {/* <Pressable style={styles.button} onPress={this.signOut}>
                    <Text style={styles.loginButtonText}>Sign Out</Text>
                </Pressable> */}

                <Button style={styles.createAccountButton} title="Create new account here"
                onPress={() => this.props.navigation.navigate('signup')}
                ></Button>
            </View>
        )
    }

}