import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import ButtonMult from "./ButtonMult"

const Product = ({name,prix,description,onDelete}) => {
    const colorScheme=useColorScheme()
  console.log(colorScheme)
  const theme = Colors[colorScheme] ?? Colors.light

  
  return (
    <>
    {/* un produit*/}
    <View style={styles.product}>
            <View style={styles.container}>

            <View style={styles.productProfile}>
                <Text 
                style={styles.profileText}
                >{name.charAt(0).toUpperCase()}</Text>
                
            </View>
            
            <View style={styles.aboutCard}>

                <View style={styles.name_Price}>
                    <Text style={styles.productName}>{name} </Text>
                    <Text style={styles.productPrice}>{prix} $ </Text>
                </View>

                <View style={styles.descriptDiv}>
                    <Text style={styles.descriptText}>{description}</Text>
                </View>
            </View>
            <View>
            </View>
    </View>
            <ButtonMult
            onPress={onDelete}
            style={styles.btn}
            title='Supprimer'
            icon={"trash-outline"}
            iconSize={25}
            />
    </View>
    

    </>
    
  )
}

export default Product

const styles = StyleSheet.create({

    productDiv:{
        backgroundColor:'#fff',
        padding:20,
        margin:10,
        borderRadius:4
    },
    product:{
        justifyContent:'center',
        //alignItems:'center'
        backgroundColor:'#fff',
        borderRadius:6,
        margin:10,
        padding:5,
        marginTop:20,
        // Ombre iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,

  // Ombre Android
  elevation: 9,
        

    },
    container:{
        display:'flex',
        flexDirection:'row',
        gap:5,
        //backgroundColor:'#ffe9dd',
        width:'100%',
        padding:5,
        justifyContent:'center',
        alignItems:'center'
    },
    productProfile:{
        backgroundColor:'#475967',
        width:'25%',
        height:100,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10

    },
    aboutCard:{
        display:'flex',
        width:'70%',
        padding:10

    },
    name_Price:{
        fontSize:20,
    },
    productName:{
        color: '#1485dd',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign:'justify',
        fontFamily:'italic'
    },
    productPrice:{
        color:'#27AE60',
        fontSize:14,
        fontWeight:700
    },
    descriptDiv:{},
    descriptText:{
        color:'#505355',
        fontSize:14,
    },
    btn:{
        backgroundColor:'#007BFF',
        padding:3,
        marginHorizontal:20,
        

    },
    profileText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    },


}) 