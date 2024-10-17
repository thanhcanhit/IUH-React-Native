import TodoApp from './pages/TodoApp';
import AddPage from './pages/AddTodo';
import Home from './pages/Home';
import { createContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import UserInfo from './components/UserInfo.jsx';
const Stack = createStackNavigator();

export const UserContext = createContext({
  name: ' ',
  img: '',
});

const customeHeader = () => {
  return (
    <View style={{backgroundColor:"white", paddingHorizontal: 16, paddingVertical: 8}}>
      <UserInfo />
    </View>
  );
};
const defaultImg = require('./assets/user-avatar.png')

export default function App() {
  const [user, setUser] = useState({
    name: 'Canh',
    img: defaultImg,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="TodoApp"
          screenOptions={{ header: customeHeader }}>
          <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
          <Stack.Screen name="Add" component={AddPage} />
          <Stack.Screen name="TodoApp" component={TodoApp} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
