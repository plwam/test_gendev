import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';

const BottonMult = ({style,title,icon,iconSize, ...props}) => {
    const colorScheme=useColorScheme()
  console.log(colorScheme)
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <>
     <Pressable

            
            style={({pressed}) => [styles.btn, pressed && styles.pressed,style]}
            {...props}
            >
                <Text style={[styles.btntitle,{fontWeight:600}]}> {title}  
                 <Ionicons
                    name={icon}
                    size={iconSize || 20}
                    color="#fff"
                    style={{marginLeft:5}}
                />
                </Text>
            </Pressable>
    </>
    
  )
}

export default BottonMult

const styles = StyleSheet.create({

    
    btn:{
        padding:15,
        borderRadius:6,
        marginVertical:0,
        opacity:0.8,
    },
    pressed:{
        opacity:0.5
    },
    btntitle:{
        textAlign:'center',
        fontSize:18,
        color:'#FFF'
    }

})
