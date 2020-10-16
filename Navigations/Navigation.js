import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import UserList from '../Components/UserList'
import EditUser from '../Components/EditUser'
import SignUp from '../Components/SignUp'
import SignIn from '../Components/SignIn'
import Home from '../Components/Home'
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native'

const Stack = createStackNavigator();

function Navigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator>      
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={UserList} />
        <Stack.Screen name="Edit" component={EditUser} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
