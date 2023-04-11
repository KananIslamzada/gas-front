import React, { memo, useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import colors from '../../config/colors';

const Input = ({ label, onChangeText, keyboardType, password = false, style, ...props }) => {
    const [visible, setVisible] = useState(!password)

    return (
        <View style={styles.container}>
            <Text style={styles.label} >{label}</Text>
            <View style={styles.inside} >
                <TextInput

                    autoCapitalize="none"
                    autoComplete="off"
                    secureTextEntry={!visible}
                    selectionColor={colors.orange}
                    style={[styles.input, style]}
                    onChangeText={onChangeText}
                    autoCorrect={false}
                    keyboardType={keyboardType}
                    {...props}
                />
                {password && <Text onPress={() => setVisible(!visible)} style={styles.eye} >{visible ? "hide" : "show"}</Text>}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {

    },
    label: {
        fontSize: 18,
        color: colors.white,
        marginBottom: 7,
        fontWeight: "500"
    },
    input: {
        height: "100%",
        flex: 1,
        color: colors.black,
    },
    inside: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        width: "100%",
        height: 45,
        borderRadius: 20,
        marginBottom: 15,
        paddingHorizontal: 15
    },
    eye: {
        fontWeight: "500",
        fontSize: 16,
        color: colors.orange
    }
});

export default memo(Input);