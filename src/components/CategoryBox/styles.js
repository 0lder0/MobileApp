import {StyleSheet} from 'react-native';
import {colors} from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 32,
        height: 32,
    },
    title: {
        color: colors.grey,
    },
    imageContainer: {
        backgroundColor: colors.lightGray,
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
    },
});