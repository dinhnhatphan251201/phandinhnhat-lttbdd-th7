import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import Item from "./Item";

const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {});
    }, []);
    return (
        <View>
            <FlatList
                data={data}
                renderItem={Item}
                keyExtractor={(item) => item.id}
            ></FlatList>
        </View>
    );
};

export default List;
