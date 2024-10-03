import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Shop from './pages/Shop.jsx';
import ProductList from './pages/ProductList.jsx';
import {Button} from "react-native"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductList"
        screenOptions={{headerShown: false}} 
        >
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="ProductList" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
