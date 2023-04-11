import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import colors from '../config/colors';
import Animated, { FadeInDown } from 'react-native-reanimated';

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity)
const AppButton = ({ activeOpacity = 0.5, onPress, style, label, loading = false, ...props }) => {

    return (
        <AnimatedButton
            entering={FadeInDown.delay(1000).duration(1200).springify()}
            disabled={loading}
            activeOpacity={activeOpacity}
            onPress={onPress}
            {...props}
            style={[styles.container, style]}>
            {
                loading ?
                    <ActivityIndicator color={colors.black} size={"small"} />
                    :
                    <Text style={styles.label} >{label}</Text>
            }
        </AnimatedButton>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: colors.white,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 18,
        color: colors.black,
        fontWeight: "600",
    }
});

export default memo(AppButton);