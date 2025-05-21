import React, { useEffect } from "react";
import './gesture-handler';
import { View } from "react-native";
import Login from "./src/Login";
import Home from "./src/Home";
import AddService from "./src/AddService";
import { NavigationContainer } from "@react-navigation/native";
import { storage } from "./src/Storage";
import { useMMKVBoolean } from "react-native-mmkv";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "./src/Detail";
import EditService from "./src/EditService";

// 0373007856
// 123
const Stack = createStackNavigator();
const HomeScreen = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#EF506B',
          },
          headerTintColor: '#fff',
        }}
    >
        <Stack.Screen name="Home" component={Home} 
          options={{
            headerShown: false,}}
        />
        <Stack.Screen name="Add Service" component={AddService} options={({route}) => ({title: "Add Service"})} />
        <Stack.Screen name="Detail" component={Detail} options={({route})=>({title: "Detail Page"})} />
        <Stack.Screen name="Edit Service" component={EditService} options={({route})=>({title: "Edit Service"})} />
    </Stack.Navigator>
  )
}

const App = () => {
  const [isSignedIn, setIsSignedIn] = useMMKVBoolean("isSignedIn");

  // for debug
  const resetSignIn = false;
  useEffect(() => {
      if (resetSignIn){
        setIsSignedIn(false);
      }
  },[])

  return (

    <NavigationContainer>
      {isSignedIn ? (
        <HomeScreen />
      ) : (
        <Login onSignin={() => setIsSignedIn(true)} />
      )}
    </NavigationContainer>

  );
}

export default App;