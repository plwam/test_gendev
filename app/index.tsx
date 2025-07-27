import { Text, View,StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import   Product  from "../components/Product"
import { Ionicons } from "@expo/vector-icons";




export default function Index() {
  const colorScheme=useColorScheme()
  console.log(colorScheme)
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View
      style={styles.container}
    >
      <Text style={{color:'#007BFF', fontSize: 50, fontWeight: "bold", textAlign: "center",marginBottom:20}}> AppLife </Text>
      <Text style={styles.title}>
        Bienvenue sur l'application de gestion de produits
          
      </Text>
      <Text style={styles.text}>
        Cliquez sur le bouton ci-dessous pour commencer
      </Text>
      <Link href="/produit" style={styles.button}>
        <Text style={{color:theme.button, fontSize: 26, fontWeight: "bold", textAlign: "center"}}>
        </Text>
                  <Ionicons name="arrow-forward" size={34} color="#fff" />
      </Link>
      <Text> 
        
        
      </Text>
      
        

      
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    color: "#333",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "#666",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    color: '#fff',
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    //un joli bouton
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    textDecorationLine: "none",
    textDecorationColor: "transparent",
    textDecorationStyle: "solid",
  },
}); 
