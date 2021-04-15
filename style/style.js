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

  //Footer styles
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
    fontSize: 14,
    backgroundColor: '#EAEAEA',
    color: '#fff',
    borderRadius: 5,
    textAlign: 'left'
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
    color: '#fff'
  },
  //Login page 
  loginButton:{
    marginTop: 20,
    marginBottom: 30,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#3b3b3b',
    borderColor: '#474747',
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
  },
  loginButtonText: {
    color: '#EAEAEA'
    
  },
 createAccountButton: {
   fontSize: 12
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
    marginTop: 60,
    color:"#EAEAEA",
    
  },
  infotext:{
    color:"#EAEAEA",
    fontSize:18
  },


  //Available rides page
  ridesHeader: {
    fontWeight: "500", 
    fontSize: 20, 
    color: "#EAEAEA", 
    margin: 20
  },
  cardbox: {
    paddingTop: 20,
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000000",
    margin: 10,
    width: 160,
    height: 160,
    textAlign: "center",
    justifyContent: "center",
  },
  cardboxText: {
    fontSize: 13,
    color: '#000',
    textAlign: "left",
    marginTop: 5
  },
  cardboxButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#EAEAEA',
    textAlign: 'center',
    marginTop: 5
  },
  cardButton:{
    backgroundColor: '#3b3b3b',
    borderColor: '#474747',
    borderWidth: 1,
    height:30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 30,
    
  },

  //Menu buttons
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
    color: "#3385ff",
    fontSize: 21,
  },
  buttonTextMenu: { 
    fontSize: 18,
    color: '#EAEAEA',
  },
  menuButtons:{
    marginTop: 10,
    marginBottom: 10,
  },


  //
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
    color: "#EAEAEA"
  },
  headline: {
    fontSize: 35,
    color: "black",
    fontFamily: "headline"
  },
  


});