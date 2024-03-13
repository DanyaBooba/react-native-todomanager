import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, FlatList, Text } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/List";
import Form from "./components/Form";

export default function App() {
	const [listOfItems, setListOfItems] = useState([
		{ text: "Купить молоко", key: "1" },
		{ text: "Купить масло", key: "2" },
		{ text: "Обновить макбук", key: "3" },
		{ text: "Быть крутым", key: "4" },
	]);

	const taskAdd = (text) => {
		setListOfItems((list) => {
			return [
				...list,
				{ text: text, key: Math.random().toString(36).substring(5) },
			];
		});
	};

	const itemPress = (key) => {
		setListOfItems((list) => {
			return list.filter((listOfItems) => listOfItems.key != key);
		});
	};

	return (
		<View style={styles.main}>
			<Header />
			<View>
				<FlatList
					data={listOfItems}
					renderItem={({ item }) => (
						<ListItem item={item} itemPress={itemPress} />
					)}
				/>
			</View>
			<Form taskAdd={taskAdd} />
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		width: "100%",
	},
});
