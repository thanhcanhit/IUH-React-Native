import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

export default function Page5() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 }}>
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
          <Image
            source={{ uri: 'https://picsum.photos/seed/picsum/150/150' }}
            style={styles.image}
          />

          <View style={{ gap: 16 }}>
            <TextInput
              placeholder="Please input username"
              style={styles.input}
            />
            <TextInput
              placeholder="Please input password"
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
                backgroundColor: '#3FA2F6',
                alignItems: 'center',
                width: '100%',
                borderRadius: 8,
              }}>
              <Text style={{ color: '#fff', fontSize: 18 }}>LOGIN</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <TouchableOpacity>
                <Text style={{ color: '#5B99C2', fontWeight: 'semibold' }}>
                  Register
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ color: '#5B99C2', fontWeight: 'semibold' }}>
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ position: 'relative' }}>
              <Text style={{ backgroundColor: '#fff', zIndex: 1 }}>
                Other login method
              </Text>
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: '#000',
                  height: 1,
                  left: -42,
                  right: -42,
                  top: '50%',
                }}></View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: 24,
                justifyContent: 'center',
                gap: 24,
              }}>
              <TouchableOpacity
                style={{ ...styles.social, backgroundColor: '#478CCF' }}>
                F
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.social, backgroundColor: '#6EACDA' }}>
                Z
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.social, backgroundColor: '#FFD3B6' }}>
                G
              </TouchableOpacity>
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
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
  social: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 8,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 999,
  },
});
