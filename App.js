import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/page/Home";

export default function App() {
    return (
        <View style={styles.container}>
            <Home />
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
