import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 14,
    },
    label: {
        marginVertical: 8,
        color: colors.blue,
        fontWeight: '500',
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
});