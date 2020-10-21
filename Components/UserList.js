import React from 'react';
import { NavigationEvents } from 'react-navigation';
import {getUsers} from '../barApi'
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


 class UserList extends React.Component {

  constructor(props){
    super(props);{

      this.state = {
        users:[]
      }
    }
  };

//affichage api test
_getAllUser(){
  getUsers().then(data =>{
    this.setState({users: data})

  })
}


  componentDidMount(){
    const { navigation } = this.props
    this._refreshData = navigation.addListener('focus', () => {
      this._getAllUser();
    });
    this._getAllUser();

  };


  componentWillUnmount() {
  this._refreshData();
}
  render(){

    const { navigation,route } = this.props
    const {goBack} = this.props.navigation;

    const viewLog = () => {
      if (route.params){
        return <><Text>Welcome : {route.params.nomLog}</Text>
        <Button title="Click here to Logout" onPress={ () => goBack(null) } /></>
      }
      else {
        return <Text>Welcome</Text>
      }
    }
  return(

    <ScrollView>

    <View>
    {viewLog()}
    </View>

    <FlatList
         data={this.state.users}
         keyExtractor={(item,index) => index.toString()}
         renderItem={({item}) =>
      {
        return(
         <View style = {{margin : 2}}>

           <TouchableOpacity
           style={{ backgroundColor: 'yellow', borderWidth: 1 }}
           onPress={() => {
             navigation.navigate('Edit', {
               itemId: item.id,
               nom: item.nom,
               mail : item.mail,
               id_evenement : item.id_evenement,
               password : item.password
             });
            }}>
           <Text>  nom : {item.login}</Text></TouchableOpacity>
           <Text>mail : {item.email}</Text>

           </View>
         )}}
       />
       </ScrollView>
     )
   }
 }

export default UserList
