import { Button, TextInput } from "@react-native-material/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    ToastAndroid,
    View,
} from "react-native";
import Item from "../components/Item";

const List = () => {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    useEffect(() => {
        axios
            .get("https://63477b440484786c6e81397f.mockapi.io/products")
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {});
    }, []);

    const handleAddItem = () => {
        setLoading(true);
        axios
            .post(`https://63477b440484786c6e81397f.mockapi.io/products`, {
                name: value,
                image: "image 99",
                price: 66,
            })
            .then(function (response) {
                console.log(response.data);
                setData([...data, response.data]);
                setLoading(false);
                // ToastAndroid.show("Đã thêm");
            })
            .catch(function (error) {
                console.log(error);
                // ToastAndroid.show("Không thế thêm");
            })
            .finally(function () {});
    };
    const handleRemoveItem = (id) => {
        setLoading(true);
        axios
            .delete(
                `https://63477b440484786c6e81397f.mockapi.io/products/${id}`
            )
            .then(function (response) {
                console.log(response.data);
                // setData(data.filter((item) => item.id !== id));
                setData([...data.filter((item) => item.id !== id)]);
                setLoading(false);
                // ToastAndroid.show("Đã thêm");
            })
            .catch(function (error) {
                console.log(error);
                // ToastAndroid.show("Không thế thêm");
            })
            .finally(function () {});
    };

    // if (isLoading == true) {
    //     return (
    //         <View
    //             style={{
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //             }}
    //         >
    //             <ActivityIndicator size="large" color="#000" />
    //         </View>
    //     );
    // }

    return (
        <View style={styles.wrapper}>
            <View style={styles.add}>
                <TextInput
                    variant="outlined"
                    label="Nhap mon hoc"
                    style={{ flex: 1 }}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                />
                <Button title="them" onPress={handleAddItem} />
            </View>
            {isLoading && (
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ActivityIndicator size="large" color="#000" />
                </View>
            )}
            <View>
                <ScrollView>
                    {/* <FlatList
                        data={data}
                        renderItem={Item}
                        keyExtractor={(item) => item.id}
                    ></FlatList> */}
                    {data.map((item, index) => (
                        <Item
                            handleRemoveItem={handleRemoveItem}
                            key={index}
                            item={item}
                        ></Item>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    add: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default List;
