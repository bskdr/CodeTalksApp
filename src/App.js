import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import FlashMessage from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import colors from './styles/colors';
import Rooms from './pages/Rooms';
import RoomDetail from './pages/RoomDetail/RoomDetail';

const Stack = createStackNavigator();

const App = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  const AppStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="RoomsPage"
          component={Rooms}
          options={{
            title: 'Odalar',
            headerTintColor: colors.darkorange,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="RoomDetailPage"
          component={RoomDetail}
          options={({route}) => ({
            title: route.params.room_name,
            headerTintColor: colors.darkorange,
            headerTitleAlign: 'center',
            headerRight: () => (
              <Icon
                name="logout"
                size={30}
                color={colors.darkorange}
                onPress={() => auth().signOut()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!userSession ? <AuthStack /> : <AppStack />}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
