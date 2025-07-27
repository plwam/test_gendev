import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import * as SystemUI from 'expo-system-ui';import { useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DashboardLayout = () => {
    const insets = useSafeAreaInsets(); 
    const colorScheme=useColorScheme()
      console.log(colorScheme)
      const theme = Colors[colorScheme] ?? Colors.light

      useEffect(() => {
        SystemUI.setBackgroundColorAsync('#2c3E50'); // change la couleur en bas // true = light icons
        }, []);
  return (
    <>
     <Tabs
    screenOptions={{headerShown:false,
        tabBarStyle:{
            backgroundColor:'#f0f0f0',
            borderTopWidth:0,
            borderTopColor:'#2c3E50',
            boxShadowColor:'#fff',
            position:'absolute',
            left:10,
            right:10,
            height:84,
            marginHorizontal:10,
            bottom:5, //,
            borderRadius:20,
            paddingHorizontal: 0,
            paddingBottom:5            

        },
        tabBarActiveTintColor:'#000',
        tabBarInactiveTintColor:'#007BFF',
        tabBarLabelStyle:{
            fontSize:14,
            fontWeight:400,
            margin:3
        },
        tabBarHideOnKeyboard:true,
        tabBarShowLabel:true
    }}
    >
                <Tabs.Screen 
        name='produit' 
        options={{
            title:'Products',
            tabBarIcon:({focused})=>(
                 <Ionicons
                 size={32}
                 name= {focused ? 'list' : 'cart-outline'}
                 color={focused ? '#000' : '#007BFF'}
                 />
            )
        }}/>

        <Tabs.Screen 
        name='create' 
        options={{
            title:'Ajouter',
            tabBarIcon:({focused})=>(
                 <Ionicons
                 size={30}
                 name= {focused ? 'add-circle' : 'add-circle-outline'}
                 color={focused ? '#000' : '#007BFF'}
                 />
            )
        }}/>
                <Tabs.Screen 
        name='profile' 
        options={{
            title:'A propos ',
            tabBarIcon:({focused})=>(
                 <Ionicons
                 size={32}
                 name= {focused ? 'information-circle' : 'information-circle-outline'}
                 color={focused ? '#000': '#007BFF'}
                 />
            )
            
        }}/>

        

    </Tabs>
    </>
   
  )
}
 
export default DashboardLayout