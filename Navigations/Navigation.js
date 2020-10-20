import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserList from '../Components/UserList'
import EditUser from '../Components/EditUser'
import SignUp from '../Components/SignUp'
import SignIn from '../Components/SignIn'
import Home from '../Components/Home'
import ListBar from '../Components/ListBar'
import DetailBar from '../Components/DetailBar'
import React from 'react'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function UserNav() {

  return (

    <Stack.Navigator>
      <Stack.Screen name="List" component={UserList} options={{title: 'List'}} />
      <Stack.Screen name="Edit" component={EditUser} options={{title: 'Edit'}} />
    </Stack.Navigator>
  );
}
function BarNav() {

  return (

    <Stack.Navigator>
      <Stack.Screen name="ListBar" component={ListBar} options={{title: 'Bars'}} />
      <Stack.Screen name="Detail" component={DetailBar} options={{title: 'Detail'}} />
    </Stack.Navigator>
  );
}
function RightBar() {

  return (

      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Drawer.Screen name="List" component={UserNav} options={{title: 'List'}} />
        <Drawer.Screen name="Bars" component={BarNav} options={{title: 'Bars'}} />
        <Drawer.Screen name="SignUp" component={SignUp} options={{title: 'SignUp'}} />
        <Drawer.Screen name="SignIn" component={SignIn} options={{title: 'Login'}} />
      </Drawer.Navigator>

  );
}

export default RightBar;
