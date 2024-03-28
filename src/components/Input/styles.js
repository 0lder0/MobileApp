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
    modalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    modalContent: {
        backgroundColor: colors.white,
        padding: 16,
        borderRadius: 8,
        width: '80%',
    },
    optionTitle: {
        color: colors.black,
        fontSize: 16,
        marginBottom: 16,
    },
    optionText: {
        paddingVertical: 4,
        fontSize: 15,
        color: colors.black,
    },
    selectedOption: {
        backgroundColor: colors.blue,
        fontWeight: "bold",
    },
});