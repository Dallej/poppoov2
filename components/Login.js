import React from 'react';
import { View, TextInput, Pressable, Text, Button } from 'react-native'
import { firebase } from '../firebase/Config'
import styles from '../style/style'


export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    signIn = () => {
        const { email, password } = this.state
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                alert("logged-in successfully ")
                console.log('User logged-in successfully!')
                // ...
              })
            .then(() => this.props.navigation.navigate('menu'))
            .catch(error => console.log(error))
    }

    signOut = () => {
        firebase.auth()
            .signOut()
            .then(() => this.props.navigation.navigate('login'))
            .catch(error => console.log(error))
    }



    render() {
        // this.state = {
        //     displayName: firebase.auth().currentUser.displayName,
        //     uid: firebase.auth().currentUser.uid
        // }
        return (
            <View style={styles.container}>

                <Text style={styles.headertext}>Login to your account:</Text>

                <Text style={styles.textStyle}>
                    Hello, {this.state.displayName}
                </Text>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Email'
                    placeholderTextColor="#b8b8b8"
                    autoCapitalize='none'
                    autocomplete="email" 
                    keyboardType="email-address">
                        
                </TextInput>


                <TextInput
                    style={styles.inputBox}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='Password'
                    placeholderTextColor="#b8b8b8"
                    secureTextEntry={true}>
                </TextInput>

                <Pressable style={styles.button} onPress={this.signIn}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={this.signOut}>
                    <Text style={styles.loginButtonText}>Sign Out</Text>
                </Pressable>

                <Button title="Don't have an account yet? Create one!"
                onPress={() => this.props.navigation.navigate('signup')}
                ></Button>
            </View>
        )
    }

}