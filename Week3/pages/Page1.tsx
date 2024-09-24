import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';

const Page1 = () => {
  return (
    <View
      style={{
        flex: 1,
        gap: 20,
        ...styles.container,
      }}>
      <View style={{ flex: 2, ...styles.flexCenter }}>
        <Image
          source={{ uri: 'https://picsum.photos/seed/picsum/150/150' }}
          style={styles.image}
        />
      </View>
      <View
        style={{
          flex: 2,
          gap: 4,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text style={styles.heading}>GROW {'\n'}YOUR BUSSINESS</Text>
        <Text
          style={{ textAlign: 'center', paddingLeft: 32, paddingRight: 32 }}>
          We will help you to grow your business using online service
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <Button title="Login" color="#E8B86D" />
        <Button title="Sign up" color="#E8B86D" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    background: '#78B7D0',
  },
  image: {
    width: 150,
    height: 150,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actionContainer: {
    flex: 1,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Page1;
