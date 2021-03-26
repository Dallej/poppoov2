import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#8DB4CF',
    borderColor: '#8DB4CF',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  buttonSignup: {
    fontSize: 12
  },
  logo: {
    width: '40%', 
    height:'40%', 
    resizeMode: 'contain', 
    marginTop: -200
  },
  map: {
    width: 200, 
    height:200, 
    resizeMode: 'contain', 
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  headertext:{
    fontSize:20,
    marginBottom:10
  }
});