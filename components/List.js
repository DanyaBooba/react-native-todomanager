import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default function ListItem({ item, itemPress }) {
	return (
		<TouchableHighlight
			onPress={() => {
				itemPress(item.key);
			}}
		>
			<Text style={styles.text}>{item.text}</Text>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	text: {
		paddingLeft: 20,
		paddingTop: 10,
		paddingBottom: 10,
		fontSize: 16,
		marginBottom: 8,
	},
});
