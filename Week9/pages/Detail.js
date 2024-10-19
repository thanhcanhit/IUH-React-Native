import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Heart } from 'lucide-react-native';

const data = {
  id: 1,
  name: 'Pinarello',
  price: 1800,
  type: 'RoadBike',
  img: 'https://s3-alpha-sig.figma.com/img/241c/1c58/11168d8e6671f151053b8a6c8424a1a8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCPuZPtzO1oI2jXnHZcflYaQ2ywVhDYYPJWuM5i5Hj~OxhE29ok~sEmcttbUbbO3n8C-3IqAfDZCja1y9Q0r0IqpN9qcqAqAZj-TtN7hAg8wfrkMqrDyaukaOw6AZgIlkAsJQ5c7pqcr9K9J24Q3pCskyhhtzgKgXszLrzGO0anbAJtYfPhvope7nLOCmoeHVeID7EBoEvbQKAb1t3cpjti7OdHWFkjIP4P2FXB8eOMPfE20ieug8rVRed3IRWsiG8casD7x6OXtfevS8clXxgPUlhpRV71pzgvX4wl6juKfi8UYYTMExq~MlaDvPPKNCAdudc6OsyZFLO3KNKmACw__',
  discount: 10,
  description:
    'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
  liked: 100,
};

const Home = ({ navigation }) => {
  const discountPrice = data.price - (data.price * data.discount) / 100;
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flex: 1,
          padding: 8,
          borderRadius: 8,
          backgroundColor: '#E941411A',
          alignItems: 'center',
          margin: 8,
        }}>
        <Image
          source={data.img}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
            padding: 16,
          }}></Image>
      </View>
      <View style={{ flex: 1, margin: 16 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{data.name}</Text>
        <View style={{ flexDirection: 'row', gap: 16 }}>
          <Text style={{ color: 'gray', fontWeight: 'bold' }}>
            {data.discount} % OFF | {discountPrice}$
          </Text>
          <Text
            style={{ textDecorationLine: 'line-through', fontWeight: 'bold' }}>
            {data.price}$
          </Text>
        </View>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 16,
            marginBottom: 8,
          }}>
          Description
        </Text>
        <Text style={{ color: '#00000091' }}>{data.description}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 16,
          alignItems: 'center',
          justifyContent: 'flex-end',
          margin: 16,
        }}>
        <TouchableOpacity>
          <Heart />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#E94141',
            paddingVertical: 8,
            paddingHorizontal: 16,
            flex: 1,
            borderRadius: 16,
          }}>
          <Text
            style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
            Add to card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
