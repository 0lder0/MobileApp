import React from "react";
import {TouchableOpacity, View, Image} from "react-native";

import {styles} from "./styles";

const Checkbox = ({checked, onCheck}) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={() => onCheck(!checked)}>
            {checked ? ( 
            <View style={styles.innerContainer}>
                <Image source={require('../../assets/Check.png')} />
            </View>
            ) : null}
        </TouchableOpacity>
    );
}

export default Checkbox;