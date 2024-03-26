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
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        marginVertical: 8,
        color: colors.blue,
        fontWeight: '500',
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
    },
    arrow: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
        transform: [{rotate: '90deg'}],
    },
    placeholder: {
        flex: 1,
        color: colors.lightGray,
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
});