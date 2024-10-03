import {
  SafeAreaView,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";

const ShopItem = ({ id, product_name, product_img, shop_name, selectedId, setSelectedId }) => {
  return (
    <TouchableOpacity key={id} onPress={() => setSelectedId(id)}>
      <View style={styles.shopItemContainer}>
        <Image
          source={{ uri: `https://picsum.photos/seed/${id}/200` }}
          style={styles.shopItemImage}
        />
        <View style={styles.shopItemTextContainer}>
          <Text numberOfLines={1} style={styles.productName}>
            {product_name}
          </Text>
          <Text numberOfLines={1} style={styles.shopName}>
            Shop{" "}
            <Text style={{ color: selectedId === id ? "red" : "black" }}>
              {shop_name}
            </Text>
          </Text>
        </View>
        <View style={styles.chatButtonContainer}>
          <TouchableOpacity style={styles.chatButton}>
            <Text style={{ color: "white" }}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Shop({ navigation }) {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    async function getData() {
      const url = "https://66f5f82b436827ced9758fa8.mockapi.io/shops";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setProducts(json);
        console.log("Loaded products:", json); // Thêm dòng này để kiểm tra
      } catch (error) {
        console.error(error.message);
      }
    }

    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
          <Image
            source={require("../assets/back.svg")}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Image
            source={require("../assets/cart.svg")}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>
<View style={styles.infoContainer}>
          <Text>Bạn có thắc mắc? Đừng ngại nhắn tin với shop</Text>
        </View>
      <FlatList
          style={styles.flatList}
          initialNumToRender={30}
          data={products}
          renderItem={({ item }) => (
            <ShopItem
              {...item}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 40,
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  headerIcon: {
    width: 30,
    height: 30,
    padding: 8,
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
  },
  infoContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  flatList: {
    marginTop: 8,
    height: 200
  },
  shopItemContainer: {
    flexDirection: "row",
    gap: 8,
    paddingRight: 16,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    backgroundColor: "transparent",
    paddingVertical: 8,
  },
  shopItemImage: {
    width: 75,
    height: 75,
    borderRadius: 4,
  },
  shopItemTextContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  productName: {
    fontWeight: '600',
    fontSize: 12,
  },
  shopName: {
    fontSize: 12,
  },
  chatButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  chatButton: {
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
});
