import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/shopping.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
      <Text style={styles.thankYouText}>Thank you for shopping</Text>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',  
  },
  lottie: {
    width: 250,
    height: 200,
  },
  thankYouText: {
    marginTop: 20,  
    fontSize: 24,
    color: '#333333',  
    fontWeight: 'bold',
    textAlign: 'center',  
    paddingHorizontal: 20,  
  },
});
