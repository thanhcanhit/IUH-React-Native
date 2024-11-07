import React, { createContext, useState } from 'react';
import { Provider } from 'react-redux'; // Import Provider từ react-redux
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import store from './redux/store'; // Import store
import TodoApp from './pages/TodoApp';
import AddPage from './pages/AddTodo';
import Home from './pages/Home';
import UserInfo from './components/UserInfo';

const Stack = createStackNavigator();

// Tạo Context cho người dùng với dữ liệu và hàm cập nhật
export const UserContext = createContext({
  name: ' ',
  img: '',
});

const customeHeader = () => (
  <View
    style={{
      backgroundColor: 'white',
      paddingHorizontal: 16,
      paddingVertical: 8,
    }}>
    <UserInfo />
  </View>
);

const defaultImg = require('./assets/user-avatar.png');

export default function App() {
  const [user, setUser] = useState({
    name: 'Canh',
    img: defaultImg,
  });

  return (
    <Provider store={store}>
      {' '}
      {/* Đảm bảo sử dụng prop 'store' chứ không phải 'value' */}
      <UserContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ header: customeHeader }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Add" component={AddPage} />
            <Stack.Screen name="TodoApp" component={TodoApp} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </Provider>
  );
}
