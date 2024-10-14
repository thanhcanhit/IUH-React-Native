import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';

export default function AddTodo({ navigation }) {

  useEffect(() => {

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, gap: 16, paddingTop: 16 }}>
        <Text style={styles.heading}>ADD YOUR JOB</Text>

        <View>
          <TextInput placeholder="Input your job" style={styles.input}></TextInput>
        </View>

        <TouchableOpacity style={styles.button}>
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
    backgroundColor:"white"
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign:"center"
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16, paddingVertical: 8
  },
  button: {},
  buttonText: {},
  hero: {
    width: 160,
    height: 160
  },
});
