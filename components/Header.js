import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
	return (
		<View style={styles.main}>
			<Text style={styles.text}>Список дел</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		paddingTop: 40,
		height: 100,
		backgroundColor: "#eee",
		marginBottom: 10,
	},
	text: {
		fontSize: 18,
		color: "green",
		textAlign: "center",
	},
});
