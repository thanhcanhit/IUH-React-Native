import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function Page1() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <TextInput
              placeholder="Password"
              caretHidden={true}
              secureTextEntry={true}
              style={styles.input}
              value={password}
              onChangeText={(value) => setPassword(value)}
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
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }} onPress={() => console.log({
                email,
                password
              })}>
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
});
