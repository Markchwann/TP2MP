import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AvatarItemPickerMain from './AvatarPickerMain';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AvatarPickerMain">
        <Stack.Screen name="AvatarPickerMain" component={AvatarItemPickerMain} options={{ headerShown: false }} />
        <Stack.Screen name="DisplaySomeComponent" component={DisplaySomeComponent} options={{ title: 'Display Some Component' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const DisplaySomeComponent = () => {
  return (
    <View>
      <Text>Display Some Component</Text>
    </View>
  );
};

export default App;