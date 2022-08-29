import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopPage from './src/TopPage';
import DetialPage from './src/DetialPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: 'Back',
        }}
      >
        <Stack.Screen
          name="Example"
          component={TopPage}
          options={{ title: 'Example' }}
        />
        <Stack.Screen name="Detial" component={DetialPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
