import { StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#2C2F33',
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
    backgroundColor: '#132639',
    borderColor: '#8DB4CF',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
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
  },
  

  cardbox: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#8DB4CF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000000",
    margin: 20,
    width: 190,
    height: 160,
    textAlign: "center",
    justifyContent: "center",
  },
  cardboxText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },
  cardboxHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff'
  },
  cardButton:{
    backgroundColor: '#abc9de',
    borderColor: '#000',
    borderTopWidth:1,
    height:30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 30,
  
  },
  IconButton: {
    
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#3C4152',
    borderColor: '#3C4152',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#abc9de',
    padding: 100,
  }

});