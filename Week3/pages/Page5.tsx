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
      <View
        style={{ flex: 1, backgroundColor: '#C4DAD2', paddingHorizontal: 16 }}>
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 24,
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
              <Text style={{ color: '#fff', fontSize: 18 }}>LOGIN</Text>
            </TouchableOpacity>
            <Text>When you agree to term and conditions</Text>
            <TouchableOpacity>
              <Text style={{ color: '#5B99C2', fontWeight: 'semibold' }}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
            <Text>Or login with</Text>
            <View style={{ flexDirection: 'row', width:"100%", justifyContent: "center" }}>
              <TouchableOpacity style={{...styles.social, backgroundColor: "#478CCF"}}>F</TouchableOpacity>
              <TouchableOpacity style={{...styles.social, backgroundColor: "#6EACDA"}}>Z</TouchableOpacity>
              <TouchableOpacity style={{...styles.social, backgroundColor: "#FFD3B6"}}>G</TouchableOpacity>
            </View>
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
    width: "33%",
    alignItems: "center",
    padding: 8,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  }
});
