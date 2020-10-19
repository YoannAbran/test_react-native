import React from 'react';
import { NavigationEvents } from 'react-navigation';

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

        data:[]
      }
    }
  };

//affichage api test

  fetchData = async()=>{
    const response= await fetch('http://172.21.201.23:8080/api/test')
    const test = await response.json()
    this.setState({data:test})
  };





  componentDidMount(){
    const { navigation } = this.props
    this._refreshData = navigation.addListener('focus', () => {
      this.fetchData();
    });
    this.fetchData();

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
         data={this.state.data}
         keyExtractor={(item,index) => index.toString()}

         renderItem={({item}) =>
{ const commentList=()=>{ return item.commentaires.map(commentaires=>{
  return(
    <View key = {commentaires.id}>
          <Text >avis : {commentaires.avis}</Text>
          <Text >comment : {commentaires.commentaire}</Text>
        </View>
  );
});
};
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
           <Text>  nom : {item.nom}</Text></TouchableOpacity>

           <Text>mail : {item.mail}</Text>


           <View>{commentList()}</View>



           </View>)}}
       />
       </ScrollView>



  )
}

}
export default UserList
