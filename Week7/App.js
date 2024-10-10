import TodoApp from './pages/TodoApp';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{height: 32}}>
        <Stack.Screen name="TodoApp" component={TodoApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
