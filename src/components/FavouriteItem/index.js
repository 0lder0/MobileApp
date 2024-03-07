import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./styles";

const FavouriteItem = ({ title, image, price, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image source={{uri: image}} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Image style={styles.icon} source={require("../../assets/close.png")} />
        </Pressable>
    );
}

export default React.memo(FavouriteItem);