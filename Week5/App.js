import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailScreen from './pages/ProductDetail.jsx';
import SelectVariantScreen from './pages/SelectVariant.jsx';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Product Detail"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Product Detail" component={ProductDetailScreen} />
        <Stack.Screen name="Select Variant" component={SelectVariantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
