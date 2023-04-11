import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Register, Questions, Finish } from '../screens';
import screenNames from '../values/screenNames';

const MainStack = createNativeStackNavigator();

const options = {
    gestureEnabled: false
}

const Stack = () => {

    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false

            }}
        >
            <MainStack.Screen name={screenNames.register} component={Register} />
            <MainStack.Screen
                options={options}
                name={screenNames.questions} component={Questions} />
            <MainStack.Screen
                options={options}
                name={screenNames.finish}
                component={Finish} />
        </MainStack.Navigator>
    )
};

export default Stack;