import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export const formatter = new Intl.NumberFormat("vi-VN", {
	style: "currency",
	currency: "VND",
});

export default function SelectVariant({ route, navigation }) {
	const { phoneDetail } = route.params;
	const [selectedVariant, setSelectedVariant] = useState(0);

	const handleNaviBack = () => {
		navigation.navigate("Product Detail", { selected: selectedVariant });
	};

	return (
		<View style={styles.container}>
			<View style={styles.info}>
				<Image
					source={phoneDetail.variant[selectedVariant].image}
					style={styles.image}
				/>
				<View style={{ flex: 1 }}>
					<Text>{phoneDetail.name}</Text>
					<Text
						style={{
							color: phoneDetail.variant[selectedVariant].color,
							fontWeight: "bold",
						}}
					>
						Màu: {phoneDetail.variant[selectedVariant].name}
					</Text>
					<Text>Cung cấp bởi Tiki</Text>
					<Text style={{ fontWeight: "bold" }}>
						{formatter.format(phoneDetail.price)}
					</Text>
				</View>
			</View>
			<View style={styles.select}>
				<Text style={{ fontWeight: "bold" }}>Chọn 1 màu bên dưới:</Text>

				{phoneDetail.variant.map((item, index) => (
					<TouchableOpacity
						key={item.name}
						onPress={() => setSelectedVariant(index)}
						style={{ ...styles.variantButton, backgroundColor: item.color, borderWidth: selectedVariant === index ? 2 : 0 , borderColor: "yellow"}}
					></TouchableOpacity>
				))}

				<TouchableOpacity style={styles.submitButton} onPress={handleNaviBack}>
					<Text
						style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
					>
						XONG
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	info: { flex: 1, flexDirection: "row", padding: 8, backgroundColor: "white" },
	image: {
		width: 100,
		height: 100,
		resizeMode: "contain",
	},
	select: { flex: 4, gap: 8, padding: 12 },
	variantButton: {
		width: 75,
		height: 75,
		alignSelf: "center",
		borderRadius: 4,
	},
	submitButton: {
		padding: 8,
		backgroundColor: "#4e6ec2",
		borderRadius: 8,
		marginTop: "auto",
	},
});
