import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView, StatusBar,
} from 'react-native';
import Stack from './app/stacks/Stack';
import colors from './app/config/colors';



function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.orange }} >
      <NavigationContainer>
        <Stack />
        <StatusBar translucent={false} backgroundColor={colors.orange} barStyle={"dark-content"} />
      </NavigationContainer>
    </SafeAreaView>
  )

}


export default App;
