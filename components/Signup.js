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
        .then(() => {
            alert("Signup successfull!")
            this.props.navigation.navigate('menu')})
        .catch(error => console.log(error))
    }

    render(){
        return(
            <View style={styles.containerSignup}>

                <Text style={styles.headertext}>Create new account</Text>

                <Text style={styles.infotextSignup}>Name</Text>

                <TextInput 
                    style={styles.inputBoxSignup} 
                    value={this.state.name}
                    onChangeText={name=> this.setState({name})}
                    placeholder='Enter your full name'
                    placeholderTextColor="#838383"
                    autoCapitalize='none'> 
                </TextInput>

                <Text style={styles.infotextSignup}>Email</Text>

                <TextInput 
                    style={styles.inputBoxSignup} 
                    value={this.state.email}
                    onChangeText={email=> this.setState({email})}
                    placeholder='Enter your email'
                    placeholderTextColor="#838383"
                    autoCapitalize='none'> 
                </TextInput>

                <Text style={styles.infotextSignup}>Create a password</Text>

                <TextInput 
                    style={styles.inputBoxSignup} 
                    value={this.state.password}
                    onChangeText={password=> this.setState({password})}
                    placeholder='Enter your password'
                    placeholderTextColor="#838383"
                    autoCapitalize='none'
                    secureTextEntry={true}> 
                </TextInput>

                <Pressable style={styles.buttonSignup} onPress={this.signUp}>
                    <Text style={styles.buttonTextSignup}>Signup</Text>
                </Pressable>
            </View>
        )
    }

}