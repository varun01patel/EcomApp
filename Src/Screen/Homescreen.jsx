import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Homescreen = () => {
  return (
    <View>
      <Text>Homescreen</Text>
      <Icon name ={"facebook"} size={25} />
    <AntDesign name = {"arrowright"} size={50} color={"red"}/>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({})