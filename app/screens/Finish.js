import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

const Finish = ({ route: { params: { total = 0 } } }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.total} >Your total point is: {total}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.orange
    },
    total: {
        fontSize: 30,
        fontWeight: "600",
        color: colors.white
    }
});

export default Finish;