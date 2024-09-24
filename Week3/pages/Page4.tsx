import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Page4 = () => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flex: 3,
            gap: 8,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 48,
                fontWeight: 'bold',
              }}>
              CODE
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              VERIFICATION
            </Text>

            <Text
              style={{
                paddingLeft: 32,
                paddingRight: 32,
                textAlign: 'center',
              }}>
              Provide your account's email for which you want to reset password
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 2,
            width: '100%',
            gap: 32,
            paddingLeft: 32,
            paddingRight: 32,
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TextInput style={styles.input} inputMode="numeric" maxLength={1} />
            <TextInput style={styles.input} inputMode="numeric" maxLength={1} />
            <TextInput style={styles.input} inputMode="numeric" maxLength={1} />
            <TextInput style={styles.input} inputMode="numeric" maxLength={1} />
            <TextInput style={styles.input} inputMode="numeric" maxLength={1} />
            <TextInput style={styles.input} inputMode="numeric" maxLength={1} />
          </View>

          <TouchableOpacity style={styles.button}>VERIFY CODE</TouchableOpacity>
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
    height: 40,
    width: 40,
    borderWidth: 1,
    fontSize: 20,
    textAlign:"center"
  },
  button: {
    padding: 12,
    backgroundColor: '#FCDE70',
    textAlign: 'center',
    margin: 8,
    fontWeight: 'bold',
  },
});

export default Page4;
