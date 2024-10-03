import {
  Text,
  Image,
  View,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useEffect, useState } from "react";

const ProductItem = ({ name, image_url, shop_name, rating, num_rating, price, discount_percent, id }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", borderRadius: 4 }}>
      <Image
        source={{ uri: `https://picsum.photos/seed/${id}/200` }}
        style={{ width: "100%", height: 80, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
      />
      <View style={{padding: 8}}>
        <Text>{name}</Text>
        <Text>{} ({num_rating})</Text>
      </View>
    </View>
  );
};

export default function ProductList({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const url = "https://66f5f82b436827ced9758fa8.mockapi.io/products";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error(error.message);
      }
    }

    getData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 40,
          backgroundColor: "#1BA9FF",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 8,
          gap: 32,
          zIndex: 1
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Shop")} >
          <Image
            source={require("../assets/back.svg")}
            style={{ width: 30, height: 30, padding: 8 }}
          />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="Dây sạc"
            style={{
              backgroundColor: "white",
              paddingVertical: 4,
              paddingHorizontal: 8,
            }}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('shop')}>
          <Image
            source={require("../assets/cart.svg")}
            style={{ width: 30, height: 30, padding: 8 }}
          />
        </TouchableOpacity>
      </View>

        <FlatList
          numColumns={2}
          data={products}
          contentContainerStyle={{gap:8}}
          columnWrapperStyle={{gap: 12}}
          renderItem={({ item }) => <ProductItem {...item} />}
          keyExtractor={(item) => item.id}
          style={{height: 500, paddingVertical: 54}}
        />
    </View>
  );
}
