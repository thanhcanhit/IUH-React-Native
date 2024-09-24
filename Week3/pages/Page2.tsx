import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const StyledButton = ({ text }: { text: string }) => {
  return (
    <TouchableOpacity style={{ backgroundColor: '#FCDE70', paddingVertical: 8, paddingHorizontal: 16 }}>
      <Text style={{ fontWeight: 'bold' }}>{text}</Text>
    </TouchableOpacity>
  );
};
const Page2 = () => {
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
          flex: 1,
          gap: 4,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text style={styles.heading}>GROW YOUR BUSSINESS</Text>
        <Text>We will help you to grow your business</Text>
      </View>
      <View style={{ flex: 2, ...styles.flexCenter, gap: 8 }}>
        <View style={styles.actionContainer}>
          <StyledButton text="Join us" />
          <StyledButton text="Later" />
        </View>
        <Text style={{ ...styles.heading, flex: 1 }}>HOW WE WORK</Text>
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
    background:
      'linear-gradient(0deg, rgba(182,231,235,1) 39%, rgba(255,255,255,1) 65%)',
  },
  image: {
    width: 150,
    height: 150,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  actionContainer: {
    flex: 1,
    display: 'flex',
    width: '100%',
    gap: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Page2;
