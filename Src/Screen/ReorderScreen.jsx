import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const ReorderScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/coming.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
      
    </View>
  )
}

export default ReorderScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#282C34',
  },
  lottie: {
    width: 250,
    height: 200,
  },
  
});
