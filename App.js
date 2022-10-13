import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import List from "./src/components/List";

export default function App() {
    return (
        <View style={styles.container}>
            <List />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginHorizontal: 10,
        marginVertical: 5,
        marginTop: 30,
    },
});
