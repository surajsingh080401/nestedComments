import React, { useState } from 'react';
import {Dimensions} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Main from './views/Main';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const App = ()=>{
  // const [message,setMessage]= useState({id:"",text:"",replies:[]});
  // const [allmessages,setAllMessages]=useState([{id:"1",text:"Hello ",replies:[]},{id:"2",text:"How are you",replies:[]},{id:"3",text:"Nice",replies:[]},{id:"4",text:"Good",replies:[]},{id:"5",text:"Great",replies:[]}])
  return(
    <ScrollView>
      <Main/>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container:{
    marginTop:windowHeight-790,
    marginHorizontal:windowWidth-300,
    padding:10
  },
  heading:{
    fontSize: 40
  }
});

export default App;
