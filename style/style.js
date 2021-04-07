import { StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    
  },
  centerpadding:{
  paddingTop:200
  },
  footer: {
    marginBottom: -150,
    marginTop: 50,
    flexDirection: 'row',
    width: "100%",
    height: 70,
    padding: 20
  },
  footerText: {
  width: "100%",
  textAlign: "center",
  color: "#fff",
  marginLeft: 95
  },
  inputBox: {
    width: '75%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#292929',
    color: '#fff',
    // borderColor: '#d3d3d3',
    // borderBottomWidth: 1,
    textAlign: 'center'
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#3b3b3b',
    borderColor: '#474747',
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: "Avenir-Medium"
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonSignup: {
    fontSize: 12
  },
  logo: {
    width: '80%', 
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
    marginBottom:10,
    color:"#fff"
  },
  infotext:{
    color:"#fff",
    fontSize:18
  },
  cardbox: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#808080",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000000",
    margin: 10,
    width: 190,
    height: 160,
    textAlign: "center",
    justifyContent: "center",
  },
  cardboxText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10
  },
  cardboxHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
    margin: 10
  },
  cardButton:{
    backgroundColor: '#666666',
    borderColor: '#000',
    borderTopWidth:1,
    height:30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 30,
    textAlign: "center"
  
  },
  buttonModal: {
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#3b3b3b',
    borderColor: '#474747',
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
  },

  IconButton: {
    paddingVertical: 13,
    alignItems: 'center',
    backgroundColor: '#3b3b3b',
    borderColor: '#474747',
    borderWidth: 2,
    borderRadius: 10,
    width: 200,
    margin: 10,
  },
  buttonMenuLogin: {
    color: "#5da3b3",
    fontSize: 21,
    fontFamily: "Avenir-Medium"
  },
  buttonTextMenu: { 
    fontSize: 18,
    //fontWeight: 'bold',
    color: '#fff',
    fontFamily: "Thonburi"
  },
  menuButtons:{
    marginTop: 10,
    marginBottom: 10,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    padding: 100,
  },
  modalText: {
    color: "#b8b8b8",
    margin: 7,
    fontSize: 21,
  },
  textStyle: {
    color: "#fff"
  },
  headline: {
    fontSize: 35,
    color: "black",
    fontFamily: "headline"
  },
  


});