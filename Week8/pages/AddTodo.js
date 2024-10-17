import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './TodoApp';

export default function AddTodo({ route, navigation }) {
  const [input, setInput] = useState('');
  useEffect(() => {
    if (route.params?.id && route.params?.name) {
      setInput(route.params.name);
    }
  }, [route.params]);

  const handleSubmit = async  () => {
    if (route.params?.id ) {
      await handleUpdate();
    } else {
      await handleAdd();
    }
    navigation.navigate({name:"TodoApp", merge: true});
  }

  const handleAdd = async () => {
     axios.post(API_URL, {
      name: input,
      isChecked: false,
    });

  };

  const handleUpdate = async () => {
     axios.put(API_URL + '/' + route.params?.id, {
      name: input,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          gap: 16,
          paddingTop: 16,
          marginHorizontal: 32,
          justifyContent: 'space-around',
        }}>
        <Text style={styles.heading}>
          {route.params?.id ? 'UPDATE' : 'ADD'} YOUR JOB
        </Text>

        <View>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Input your job"
            style={styles.input}></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>FINISH</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={styles.hero}
          source={require('../assets/hero.png')}></Image>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  button: {
    backgroundColor: '#00BDD6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 40,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'semibold',
    fontSize: 18,
  },
  hero: {
    width: 160,
    height: 160,
  },
});
