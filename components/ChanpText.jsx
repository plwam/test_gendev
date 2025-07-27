import { StyleSheet, Text, View ,TextInput,useColorScheme} from 'react-native'
import React from 'react'
import { Colors } from "../constants/Colors";


const ChanpText = ({style,...props}) => {
    const colorScheme=useColorScheme()
      console.log(colorScheme)
      const theme = Colors[colorScheme] ?? Colors.light
  return (
        <TextInput
        placeholderTextColor='#ccc'
            style={[
                {
                    color:'#000',
                    padding:10,
                    borderRadius:6,
                    marginTop:15

                },
                style
            ]
            }
            {...props}
        />
  )
}

export default ChanpText

const styles = StyleSheet.create({})