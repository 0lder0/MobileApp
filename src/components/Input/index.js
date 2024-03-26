import React, {useState} from "react";
import {TextInput, View, Text, Image, Modal, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Input = ({label, placeholder, isPassword, value, onChangeText, style, type, ...props}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isPickerModalVisible, setPickerModalVisible] = useState(false)

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {type === "picker" ? (
                <Pressable style={styles.inputContainer} onPress={() => setPickerModalVisible(true)}>
                    <Text style={[styles.placeholder, style]}>{placeholder}</Text>
                        <Image style={styles.arrow} source={require("../../assets/tabs/arrow.png")}/>
                </Pressable>
            ) : (
            <View style={styles.inputContainer}>
            <TextInput value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={[styles.input, style]} {...props}/>

            {
            isPassword ? (
            <Pressable onPress={onEyePress}>
                <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')}/>
            </Pressable>
            ) : null
            }
            </View>
            )}
            <Modal transparent visible={isPickerModalVisible}>
                <TouchableOpacity/>
                    <Text>Select options</Text>
                
            </Modal>
        </View>
    );
}

export default Input;