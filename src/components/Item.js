import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ListItem } from "@react-native-material/core";
import axios from "axios";
import React from "react";
import { Text, ToastAndroid, TouchableOpacity, View } from "react-native";

const Item = ({ item, handleRemoveItem }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 12,
            }}
        >
            <Text style={{ width: 350 }}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                <MaterialCommunityIcons name="close" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

export default Item;
