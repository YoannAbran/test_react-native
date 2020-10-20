import React from 'react';
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

class Home extends React.Component {

  render(){
    const { navigation } = this.props
      return(
        <View>
          <TouchableOpacity
            style={{ backgroundColor: 'red', borderWidth: 1, margin:15, height:50 }}
            onPress={() => navigation.navigate('SignUp')}>
              <Text style = {{fontSize:30, textAlign:'center'}}>SignUp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: 'blue', borderWidth: 1, margin:15, height:50}}
            onPress={() => navigation.navigate('SignIn')}>
              <Text style = {{fontSize:30, textAlign:'center',color:'white'}}>SignIn</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: 'green', borderWidth: 1, margin:15, height:50 }}
            onPress={() => navigation.navigate('List')}>
              <Text style = {{fontSize:30, textAlign:'center'}}>List</Text>
          </TouchableOpacity>

        </View>
      )
    }
  }
  export default Home
