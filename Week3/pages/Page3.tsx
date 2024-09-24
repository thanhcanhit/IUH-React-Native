import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Page3 = () => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
          }}>
          <Image
            source={{ uri: 'https://picsum.photos/seed/picsum/150/150' }}
            style={{ width: 150, height: 150 }}></Image>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            FORGET PASSWORD
          </Text>

          <Text
            style={{ paddingLeft: 32, paddingRight: 32, textAlign: 'center' }}>
            Provide your account's email for which you want to reset password
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            width: '100%',
            gap: 32,
            paddingLeft: 32,
            paddingRight: 32,
          }}>
          <TextInput style={styles.input} />

          <TouchableOpacity style={styles.button}>NEXT</TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    background:
      'linear-gradient(0deg, rgba(182,231,235,1) 39%, rgba(255,255,255,1) 65%)',
  },
  input: {
    height: 30,
    borderWidth: 1,
  },
  button: {
    padding: 12,
    backgroundColor: '#FCDE70',
    textAlign: 'center',
    margin: 8,
    fontWeight: 'bold',
  },
});

export default Page3;
