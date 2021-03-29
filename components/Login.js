import React from 'react';
import {View, TextInput, Pressable, Text, Button} from 'react-native'
import {firebase} from '../firebase/Config'
import styles from '../style/style'


export default class Login extends React.Component{

    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }    
    }

    singIn = () => {
        const {email,password} = this.state
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('menu'))
        .catch(error => console.log(error))
    }

    singOut = () => {
        firebase.auth()
        .signOut()
        .then(() => this.props.navigation.navigate('login'))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.headertext}>Login to your account:</Text>

                <TextInput 
                    style={styles.inputBox} 
                    value={this.state.email}
                    onChangeText={email=> this.setState({email})}
                    placeholder='Email'
                    autoCapitalize='none'> 
                </TextInput>

                
                <TextInput 
                    style={styles.inputBox} 
                    value={this.state.password}
                    onChangeText={password=> this.setState({password})}
                    placeholder='Password'
                    secureTextEntry={true}> 
                </TextInput>

                <Pressable style={styles.button} onPress={this.signIn}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={this.signOut}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </Pressable>

                <Button title="Dont have an account yet? Create one!"
                onPress={() => this.props.navigation.navigate('signup')}
                ></Button>
            </View>
        )
    }

}