import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 32,
        paddingHorizontal: 32,
        justifyContent: 'space-between',
        gap: 16,
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          flex: 1,
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View
        style={{
          backgroundColor: '#E941411A',
          borderRadius: 32,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24,
          paddingVertical: 32,
          flex: 2,
        }}>
        <Image
          source={require('../assets/bifour_-removebg-preview.png')}
          style={{
            width: 150,
            height: 150,
            resizeMode: 'contain',
          }}></Image>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          POWER BIKE {'\n'} SHOP
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Store')}
          style={{
            backgroundColor: '#E94141',
            paddingHorizontal: 32,
            paddingVertical: 8,
            marginHorizontal: 'auto',
            borderRadius: 16,
            marginTop: 8,
            width: '100%',
          }}>
          <Text
            style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
