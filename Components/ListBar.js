import React from 'react';
import { NavigationEvents } from 'react-navigation';
import {getBar} from '../barApi'
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


class ListBar extends React.Component {

  constructor(props){
    super(props)
      this.state = {
        bars:[]
      }
    };


_getBars(){
  getBar().then(data =>{
    this.setState({bars: data})
  })
}

componentDidMount(){
  const { navigation } = this.props
    this._refreshData = navigation.addListener('focus', () => {
      this._getBars();
    });

    this._getBars();
};

componentWillUnmount() {
  this._refreshData();
}

  render() {
    const { navigation,route } = this.props
    const {goBack} = this.props.navigation;

    return(

    <ScrollView>

      <FlatList
           data={this.state.bars}
           keyExtractor={(item) => item.id.toString()}
           renderItem={({item}) => {
          return(

            <View style = {{margin : 2}}>
              <TouchableOpacity
               style={{ backgroundColor: 'yellow', borderWidth: 1 }}
               onPress={ () => {
                 navigation.navigate('Detail', {
                id: item.id,
                 });
                }
              }>
              <Text>nom : {item.nom}</Text></TouchableOpacity>
              <Text>mail : {item.adresse}</Text>
              <Text>mail : {item.telephone}</Text>
            </View>
             )}
           }
      />
       </ScrollView>
     )
   }
 }

export default ListBar
