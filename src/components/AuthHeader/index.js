import React from "react";
import { View, Pressable, Image, Text } from "react-native";
import { styles } from "./styles";

const AuthHeader = ({title, onBackPress}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onBackPress}>
                <Image source={require("../../assets/auth-back.png")} style={styles.image}/>
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default AuthHeader;