import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: colors.gray,
        width: '100%',
        height: '100%',
    },
    container: {
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 4,
        width: 22,
        height: 22,
    },
    checkIcon: {
        width: 12,
        height: 9,
    },
});