import { StyleSheet, Text, View,SafeAreaView,ScrollView,TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Product from "../../components/Product"
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useFocusEffect,Link } from 'expo-router';
// vecteur pour les icones

import AsyncStorage from '@react-native-async-storage/async-storage';

const Produits = () => {
  //**yeah take me to the top i'm ready for whatever it takes */
  //** */ on cree un etat pour une variable aui contiendra la liste de produits
          const [products, setProducts] = useState([]);
          const [searchQuery, setSearchQuery] = useState(''); // champ de recherche

          const loadProducts = async () => {
          const stored = await AsyncStorage.getItem('products');
          setProducts(stored ? JSON.parse(stored) : []);
        };

        //ce useEffect permet de charge les donnees au chergement de la page
        useEffect(() => {
          loadProducts();
        }, []);
        // ce useFocusEffect permet de recharge la page une fois active
         useFocusEffect(
          React.useCallback(() => {
            loadProducts();
          }, []));

    // Pour rafraîchir après suppression
  const handleDelete = async (index) => {
    Alert.alert(
    'Avertissement',
    'Êtes-vous sûr de vouloir supprimer ce produit ?',
    [
      {
        text: 'Non',
        onPress: () => console.log('Suppression annulée'),
        style: 'cancel',
      },
      {
        text: 'Oui',
        onPress: async () => {
          const newProducts = [...products];
          newProducts.splice(index, 1);
          await AsyncStorage.setItem('products', JSON.stringify(newProducts));
          setProducts(newProducts);
        },
        style: 'destructive',
      },
    ],
    { cancelable: false } // empêche de fermer en tapant en dehors
  );
  };
//imagine dragons whatever it's takes cause i love the adrenaline in my veins 
//i'll do whatever it takes to make it break
// pour le stockage des produits  hahahahahahaha
//le filtre des produits hahaha
  const filteredProducts = products.filter((prod) =>
  prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
  prod.prix.toString().includes(searchQuery)
);


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headind} >Les produits actuels </Text>
      <View style={styles.searchContainer}>
  <Ionicons name="search" size={20} color="333" style={styles.icon} />
  <TextInput
    style={styles.input}
    placeholder="Rechercher un produit..."
    placeholderTextColor='#939494'
    value={searchQuery}
    onChangeText={setSearchQuery}
  />
</View>
      <ScrollView contentContainerStyle={styles.productsContainer}>
      {filteredProducts.map((prod, idx) => (
        <Product
          key={idx}
          name={prod.name}
          prix={prod.prix}
          description={prod.description}
          onDelete={() => handleDelete(idx)}
        />
      ))}
      {filteredProducts.length === 0 && (
        <>
        <Text style={{textAlign:'center', color:'#333', fontSize:16, marginTop:20}}>
          Aucun produit trouvé.
        </Text>
        <Link href="/(dashboard)/create" style={{textAlign:'center', color:'#fff', fontSize:16, 
          marginTop:20,
          backgroundColor:'#007BFF',
          padding:10,
          borderRadius:5,}}>
          Ajouter un produit
          <Ionicons name="add-circle-outline" size={20} color="#fff" style={{marginLeft:5}} />
        </Link>
        </>
      )}
      <View style={{marginBottom: 70}}></View>


      </ScrollView>
      
    </SafeAreaView>
  )
}

export default Produits

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:'#f0f0f0',
        paddingVertical:40,

    },
    headind:{
        fontWeight:"bold",
        fontSize:18,
        textAlign:"center",
        color:'333'
    },
    productsContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },
  input: {
    width: '90%',
    borderColor: '#333',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#333',
  borderRadius: 10,
  paddingHorizontal: 10,
  paddingVertical: 0,
  marginBottom: 15,
  marginTop:15,

  width: '90%',
},

icon: {
  marginRight: 8,
},



})