import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export const formatter = new Intl.NumberFormat("vi-VN", {
	style: "currency",
	currency: "VND",
});

const phoneDetail = {
	name: "Điện thoại VSmart Joy 3 - Hàng chính hãng",
	rating: 5,
	rating_count: 828,
	price: 1790000,
	discount_price: 1790000,
	variant: [
		{
			name: "Đỏ",
			color: "#f30d0d",
			image: require("../assets/vs_red.png"),
		},
		{
			name: "Xanh",
			color: "#234896",
			image: require("../assets/vs_blue.png"),
		},
		{
			name: "Đen",
			color: "#000000",
			image: require("../assets/vs_black.png"),
		},
		{
			name: "Bạc",
			color: "#c5f1fb",
			image: require("../assets/vs_silver.png"),
		},
	],
};

const Star = () => {
	return (
		<Image
			style={{ width: 20, height: 20 }}
			source={require("../assets/star-svgrepo-com.svg")}
		></Image>
	);
};

export default function ProductDetail({ navigation, route }) {
	const nagiSelectVariant = () => {
		navigation.navigate("Select Variant", { phoneDetail });
	};

	return (
		<View style={styles.container}>
			<View style={styles.photoContainer}>
				<Image
					style={styles.photo}
					source={phoneDetail.variant[route.params?.selected || 0].image}
				/>
			</View>
			<View style={styles.details}>
				<Text style={styles.para}>{phoneDetail.name}</Text>
				<View style={styles.rating}>
					<View style={styles.stars}>
						<Star />
						<Star />
						<Star />
						<Star />
						<Star />
					</View>
					<Text style={{ ...styles.para, fontWeight: "bold", fontSize: 12 }}>
						(Xem {phoneDetail.rating_count} lượt đánh giá)
					</Text>
				</View>
				<View style={styles.pricing}>
					<Text style={{ ...styles.para, fontWeight: "bold" }}>
						{formatter.format(phoneDetail.discount_price)}
					</Text>
					<Text
						style={{
							...styles.para,
							fontWeight: "bold",
							textDecorationLine: "line-through",
							color: "gray",
						}}
					>
						{formatter.format(phoneDetail.price)}
					</Text>
				</View>
				<View style={styles.refund}>
					<Text
						style={{
							...styles.para,
							color: "red",
							fontWeight: "bold",
							fontSize: 12,
						}}
					>
						Ở ĐÂU RẺ HƠN HOÀN TIỀN
					</Text>
					<Image
						style={{ width: 25, height: 25 }}
						source={require("../assets/question.svg")}
					/>
				</View>

				<TouchableOpacity
					style={{
						...styles.button,
						borderWidth: 1,
						borderRadius: 4,
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
					}}
					onPress={nagiSelectVariant}
				>
					<Text
						style={{
							...styles.buttonText,
							color: route.params?.selected  ? phoneDetail.variant[route.params?.selected].color : "black",
						}}
					>
						{phoneDetail.variant.length} Màu -{" "}
						{route.params?.selected
							? phoneDetail.variant[route.params.selected].name
							: "Chọn màu"}
					</Text>
					<Image
						style={{ width: 25, height: 25 }}
						source={require("../assets/angle-right-svgrepo-com.svg")}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						...styles.button,
						backgroundColor: "red",
						borderRadius: 8,
						marginTop: "auto",
						padding: 12,
					}}
				>
					<Text style={{ ...styles.buttonText, color: "white" }}>Chọn mua</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	photoContainer: {
		flex: 3,
		alignItems: "center",
	},
	photo: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
	refund: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	para: {},
	details: { flex: 2, padding: 16, gap: 8 },
	rating: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	stars: { flexDirection: "row", gap: 2 },
	pricing: { flexDirection: "row", gap: 32 },
	button: {
		padding: 8,
	},
	buttonText: { textAlign: "center", fontWeight: "bold" },
});
