import React from 'react';
import {View, TextInput, Pressable, Text} from 'react-native'
import {firebase, ROOT_REF} from '../firebase/Config'
import styles from '../style/style'


export default class Signup extends React.Component{

    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:''
        }    
    }

    signUp = () => {
        const {name, email,password} = this.state
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => firebase.database().ref(ROOT_REF).push({
            name: name,
            email:email
        }))
        .then(() => this.props.navigation.navigate('profile'))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.inputBox} 
                    value={this.state.name}
                    onChangeText={name=> this.setState({name})}
                    placeholder='Full Name'> 
                </TextInput>

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

                <Pressable style={styles.button} onPress={this.signUp}>
                    <Text style={styles.buttonText}>Signup</Text>
                </Pressable>
            </View>
        )
    }

}