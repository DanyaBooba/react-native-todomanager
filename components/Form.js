import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function Form({ taskAdd }) {
	const [text, textSetValue] = useState("");

	const changeText = (text) => {
		textSetValue(text);
	};

	return (
		<View>
			<TextInput
				style={styles.input}
				onChangeText={changeText}
				placeholder='Новая задача'
			/>
			<Button
				title='Добавить'
				onPress={() => {
					taskAdd(text);
				}}
				style={styles.button}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		marginLeft: 10,
		marginRight: 30,
		paddingLeft: 10,
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 4,
		borderWidth: 1,
	},
	button: {
		fontSize: 16,
	},
});
