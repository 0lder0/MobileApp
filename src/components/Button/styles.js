import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        paddingHorizontal: 8,
        paddingVertical: 20,
        width: "100%",
        borderRadius: 8,
        flex: 1,
    },
    title: {
        color: colors.white,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    }
});