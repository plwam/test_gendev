import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ChanpText from '../../components/ChanpText'
import BottonMult from '../../components/ButtonMult'
import { Alert } from 'react-native'
import { Redirect } from 'expo-router'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Create = () => {
    const [nameprod, setNameprod] = useState('')
    const [descripProd, setDescripProd] = useState('')
    const [priceProduct, setPriceProduct] = useState(0)
    const [height, setHeight] = useState(200);

    //fonction pour ajouter un produit

    const addProduct = async (product) => {
  try {
    const stored = await AsyncStorage.getItem('products');
    const products = stored ? JSON.parse(stored) : [];
    products.push(product);
    await AsyncStorage.setItem('products', JSON.stringify(products));
  } catch (e) {
    console.log('Erreur lors de l\'ajout', e);
  }
};


    //**fonction pour ajouter un produit fin de la fonction

    // un compossant deredirection ves la page des produits
    const router = useRouter();

    const saveProduct= async ()=>{
        if (!nameprod.trim() || !descripProd.trim() || !priceProduct) {
            Alert.alert('Erreur', 'Veuillez remplir tous les champs.')
            return
        }
        
        //evitation des doublon
        const stored = await AsyncStorage.getItem('products');
        const products = stored ? JSON.parse(stored) : [];

        // Vérifier si un produit avec le même nom existe déjà
        const produitExistant = products.find(
            (item) => item.name.trim().toLowerCase() === nameprod.trim().toLowerCase()
        );

        if (produitExistant) {
            Alert.alert('Erreur', 'Ce produit existe déjà.');
            return;
        }


        //::::::::::::::::::::::::::
        // **Ici tu peux enregistrer le produit
        // Ici on stock les valeur des data si les champ ne sont pas vite
        const product = {
            name: nameprod,
            prix: priceProduct,
            description: descripProd,
        };
        await addProduct(product);
        Alert.alert('Succes', 'Le produit a bien ete enregistrer.')

        
        console.log("produit saved")
        //redirection 
        router.replace('/produit'); 
        //***************** */
    }
  return (
    <>  <ScrollView contentContainerStyle={{height:"100%"}}>
        <View style={styles.container}>
            <Text style={styles.headind}>Ajouter un produit</Text>
            <View>
                <Text style={styles.labelfields}>Nom Produit</Text>
                <ChanpText
                    style={styles.input}
                    placeholder='product name'
                    multiline={true}
                    numberOfLines={2}
                    onChangeText={setNameprod}
                    value={nameprod}
                    

                />
            </View>
            <View>
                <Text style={styles.labelfields}>Prix du Produit</Text>
                <ChanpText
                    style={styles.input}
                    placeholder='product price en $'
                    multiline={true}
                    numberOfLines={2}
                    onChangeText={setPriceProduct}
                    value={priceProduct}
                    

                />
            </View>
            <View>
                <Text style={styles.labelfields}>Descrption du Produit</Text>
                <ChanpText
                    style={[styles.inputdc,{height:height}]}
                    placeholder='product description'
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={setDescripProd}
                    value={descripProd}
                    onContentSizeChange={e =>
          setHeight(e.nativeEvent.contentSize.height)
        }
                />
            </View>
            <View>
                <BottonMult
                onPress={saveProduct}
                style={styles.btn}
                title='Enregistrer '
                icon={"save-outline"}
                iconSize={30}
                />
            </View>


        </View>
    </ScrollView>
        
    </>
  )
}

export default Create

const styles = StyleSheet.create({
    container:{
        flex:1,
        //justifyContent:'center',
        //alignItems:"center",
        padding:20,
        backgroundColor:'#f0f0f0',
        height:'100%'

    },
    headind:{
        fontWeight:"bold",
        fontSize:28,
        textAlign:"center",
        marginBottom:20,
        marginTop:20,
        color:"#333"
    },
    input:{
        width:'100%',
        marginBottom:20,
        minHeight:50,
        borderWidth: 1,
        borderColor: '#666',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    inputdc:{
        width:'100%',
        marginBottom:40,
        minHeight:90,
        borderWidth: 1,
        borderColor: '#666',
       // maxHeight:200,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
       // borderColor:'#1485dd'
    },
    btn:{
        backgroundColor:'#007BFF',
        marginTop:40
    },
    labelfields:{
        fontSize:16,
        fontWeight:600,
        color:'#eaeef1'
    }


})