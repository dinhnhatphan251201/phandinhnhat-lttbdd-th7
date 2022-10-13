import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ListItem } from "@react-native-material/core";
import axios from "axios";
import React from "react";
import {
    Image,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View,
} from "react-native";

const Item = ({ item, handleRemoveItem }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 12,
            }}
        >
            <View
                style={{
                    width: 350,
                    flexDirection: "row",
                }}
            >
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                        uri: "https://res.cloudinary.com/dxcxnowht/image/upload/v1665627817/cld-sample-5.jpg",
                    }}
                />
                <Text style={{ width: 300, marginLeft: 5 }}>{item.name}</Text>
            </View>

            <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                <MaterialCommunityIcons name="close" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

export default Item;
