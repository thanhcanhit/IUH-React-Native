import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function Page5() {
  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
              alignSelf: 'flex-start',
            }}>
            LOGIN
          </Text>

          <View style={{ gap: 16 }}>
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput
              placeholder="Password"
              caretHidden={true}
              secureTextEntry={true}
              style={styles.input}
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              gap: 32,
              alignItems: 'center',
              paddingBottom: 32,
            }}>
            <TouchableOpacity
              style={{
                padding: 8,
                backgroundColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontWeight: 'bold' }}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    background:
      'linear-gradient(0deg, rgba(194,181,33,1) 42%, rgba(255,243,67,1) 70%)',
  },
  input: {
    padding: 8,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  social: {
    width: '33%',
    alignItems: 'center',
    padding: 8,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
