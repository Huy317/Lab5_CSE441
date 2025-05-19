import React, { useEffect } from "react";
import { View } from "react-native";
import Login from "./src/Login";
import Home from "./src/Home";
import AddService from "./src/AddService";
import { NavigationContainer } from "@react-navigation/native";
import { storage } from "./src/Storage";
import { useMMKVBoolean } from "react-native-mmkv";

// 0373007856
// 123
const App = () => {
  var isSignedIn;
  useEffect(()=>{
    isSignedIn = storage.getBoolean("isSignedIn");  
  },[isSignedIn])
  
  return(

    <NavigationContainer>
      {isSignedIn?(
        <Home/>
      ):(
        <Login/>
      )}
    </NavigationContainer>
      
  );
}

export default App;