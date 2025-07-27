import { Stack } from "expo-router";
import {  StatusBar, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export default function RootLayout() {

  const colorScheme=useColorScheme()
  console.log(colorScheme)
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <>
    <StatusBar 
        backgroundColor="#2c3E50"
       />
        <Stack screenOptions={{headerShown:false,
      headerStyle:{backgroundColor:'#2c3E50',
},
      headerTintColor:theme.title,
      
    }}>

      
      <Stack.Screen name="index"
      options={{title:'Home'}} 
      />
      <Stack.Screen name="(dashboard)"
      options={{title:'Home'}} 
      />
      
      
    </Stack>
    </>

  );
}
