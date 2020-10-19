import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
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
const Drawer = createDrawerNavigator();


function Normal() {

  return (

    <Stack.Navigator  >
    <Stack.Screen name="Bar" component={RightBar} />
    <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
    <Stack.Screen name="Edit" component={EditUser} options={{title: 'Edit'}} />
    <Stack.Screen name="List" component={UserList} options={{title: 'List'}} />
    <Stack.Screen name="SignUp" component={SignUp} options={{title: 'SignUp'}} />
    <Stack.Screen name="SignIn" component={SignIn} options={{title: 'Login'}} />

    </Stack.Navigator>


  );
}
function RightBar() {

  return (

      <Drawer.Navigator initialRoute="Home" >
        <Drawer.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Drawer.Screen name="List" component={UserList} options={{title: 'List'}} />
        <Drawer.Screen name="SignUp" component={SignUp} options={{title: 'SignUp'}} />
        <Drawer.Screen name="SignIn" component={SignIn} options={{title: 'Login'}} />
      </Drawer.Navigator>

  );
}

export default Normal;
