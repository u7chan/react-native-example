import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopPage from './pages/TopPage';
import DetialPage from './pages/DetialPage';

const Stack = createNativeStackNavigator();

export default App = () => {
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
