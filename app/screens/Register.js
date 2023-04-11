import React, { useReducer, useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input } from '../components';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import screenNames from '../values/screenNames';
import base from '../helpers/base';

const mainReducer = (state, action) => {
    return { ...state, ...action }
}

const Login = ({ navigation }) => {
    const [userData, dispatch] = useReducer(mainReducer, {})

    const [loading, setLoading] = useState(false);

    const submit = async () => {
        setLoading(true)
        await base.wait(2000)
        if (userData?.name && userData?.phone && userData?.school && userData?.email && userData?.password && userData?.userName) {
            setLoading(false)
            navigation.navigate(screenNames.questions, { userName: userData.userName });
        } else {
            setLoading(false)
            alert("Fill all input, please")
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                enableOnAndroid={true}
                style={{ paddingHorizontal: 20 }}
                contentContainerStyle={{
                    alignItems: 'center'
                }}
            >
                <Text style={styles.header} >Register</Text>
                <Input
                    label={"Name"}
                    onChangeText={(e) => dispatch({ name: e })}
                />
                <Input
                    label={"Phone Number"}
                    keyboardType={"number-pad"}
                    onChangeText={(e) => dispatch({ phone: e })}
                />
                <Input

                    label={"School"}
                    onChangeText={(e) => dispatch({ school: e })}
                />
                <Input
                    label={"User name"}
                    onChangeText={(e) => dispatch({ userName: e })}

                />
                <Input
                    label={"Email"}
                    onChangeText={(e) => dispatch({ email: e })}
                    keyboardType={"email-address"}
                />
                <Input
                    label={"Password"}
                    onChangeText={(e) => dispatch({ password: e })}
                    password
                />
                <AppButton
                    onPress={submit}
                    loading={loading} style={{ marginTop: 20 }} label={"Submit"} />
            </KeyboardAwareScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.orange
    },
    header: {
        fontSize: 25,
        color: colors.white,
        fontWeight: "600",
        marginBottom: 30
    }
});

export default Login;