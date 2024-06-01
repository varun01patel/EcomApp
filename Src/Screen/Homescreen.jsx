import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Component/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../Component/Category';

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Women'];
const Homescreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <Header />
      <Text style={styles.matchText}>Match your style</Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Fontisto name={'search'} size={20} color={'#C0C0C0'} />
        </View>

        <TextInput style={styles.textInput} placeholder="Search" />
      </View>
      <FlatList
        data={categories}
        renderItem={({item})=>(
          <Category
            item={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        keyExtractor={item => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  matchText: {
    fontSize: 20,
    color: '#000000',
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  textInput: {
    flex: 1,
  },
  iconContainer: {
    marginHorizontal: 15,
  },
});
