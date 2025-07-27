import { SafeAreaView, StyleSheet, Text, View,ScrollView, TouchableOpacity,Linking } from 'react-native'
import React from 'react'

const Profil = () => {
  const openLink = () => {
    Linking.openURL('https://Gendev.PythonAnyWhere.com');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{height:"100%"}}>
        
        <Text style={styles.title}>À propos de l'application</Text>

      <Text style={styles.paragraph}>
        Cette application permet de stocker et gérer facilement vos produits. Pour chaque produit, vous pouvez :
      </Text>

      <Text style={styles.bullet}>• Enregistrer un nom</Text>
      <Text style={styles.bullet}>• Ajouter un prix</Text>
      <Text style={styles.bullet}>• Écrire une description</Text>

      <Text style={styles.paragraph}>
        Une fois les produits enregistrés, ils s'affichent dans une page dédiée où l'utilisateur peut voir tous les produits enregistrés.
        Chaque produit possède un bouton de suppression permettant de le retirer facilement de la liste.
      </Text>

      <Text style={styles.paragraph}>
        Ce projet a été développé par l'équipe Gendev. Vous pouvez en savoir plus en visitant notre site :
      </Text>

      <TouchableOpacity onPress={openLink}>
        <Text style={styles.link}> Deticas: https://Gendev.PythonAnyWhere.com</Text>
      </TouchableOpacity>

      </ScrollView>
      
    </SafeAreaView>
  )
}

export default Profil

const styles = StyleSheet.create({
    

    
    headind:{
        fontWeight:"bold",
        fontSize:18,
        textAlign:"center",
        color:'white'

    },
    container: {
    padding: 20,
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#f0f0f0',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    color: '#666',
    lineHeight: 22,
  },
  bullet: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 6,
    color: '#333',
    fontFamily: 'Arial, sans-serif, monospace',
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
    fontSize: 16,
    marginTop: 10,
  },


})