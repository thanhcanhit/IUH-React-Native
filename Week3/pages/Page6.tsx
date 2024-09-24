import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Switch,
} from 'react-native';

export default function Page6() {
  return (
    <>
      <View
        style={{ flex: 1, backgroundColor: '#C4DAD2', paddingHorizontal: 16 }}>
        <View style={{ flex: 3, justifyContent: 'space-evenly' }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 24,
            }}>
            REGISTER
          </Text>

          <View style={{ gap: 16 }}>
            <TextInput placeholder="Name" style={styles.input} />
            <TextInput
              placeholder="Phone"
              inputMode="tel"
              style={styles.input}
            />
            <TextInput
              placeholder="Email"
              inputMode="email"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              caretHidden={true}
              secureTextEntry={true}
              style={styles.input}
            />
            <TextInput placeholder="Birth Date" style={styles.input} />

            <View style={{ flexDirection: 'row', gap: 32 }}>
              <Text>Male</Text>
              <Text>Female</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              paddingBottom: 32,
            }}>
            <TouchableOpacity
              style={{
                padding: 8,
                backgroundColor: '#C7253E',
                alignItems: 'center',
                width: '100%',
              }}>
              <Text style={{ color: '#fff', fontSize: 18 }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
