import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
    <View style={styles.appIconContainer}>
        <Image source={require("../Assets/apps.png")} style={styles.appIcon}/>
    </View>
    <Image source={require("../Assets/dp.png")} style={styles.dp}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    appIconContainer:{
     backgroundColor:"#FFFFFF",
     height:44,
     width:44,
     justifyContent:"center",
     alignItems:"center",
     borderRadius:22

    },
    appIcon:{
        height:28,
        width:28,
    },
    dp:{
        height:44,
        width:44,
    },
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})