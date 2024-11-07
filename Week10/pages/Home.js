import {
  Text, StyleSheet,
  TouchableOpacity, View,
  Image, TextInput
} from 'react-native';
import React, { useState, useContext } from 'react';
import { UserContext } from '../App.js';
import { Mail, MoveRight } from 'lucide-react-native';

export default function App({ navigation }) {
  const [input, setInput] = useState('');
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = () => {
    setUser({ ...user, name: input });
    navigation.navigate('TodoApp');
  };
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Image
          style={styles.img}
          source={require('../assets/hero.png')}></Image>
      </View>
      <View style={styles.action}>
        <Text style={styles.title}>MANAGE YOUR {'\n'} TASK</Text>
        <View style={styles.inputItem}>
          <Mail style={{ position: 'absolute', top: 10, left: 40 }} size={16} />
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="gray"
            value={input}
            onChangeText={(text) => setInput(text)}></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>GET STARTED </Text>
          <MoveRight size={12} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero: {
    flex: 2,
    alignItems: 'center',
    padding: 24,
  },
  action: {
    flex: 3,
  },
  img: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#8353E2',
    textAlign: 'center',
  },
  inputItem: {
    paddingHorizontal: 32,
    marginTop: 32,
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    paddingLeft: 32,
  },
  button: {
    backgroundColor: '#00BDD6',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 40,
    width: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginTop: 32,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'semibold',
  },
});
