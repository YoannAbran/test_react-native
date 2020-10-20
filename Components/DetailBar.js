import React from 'react';
import { NavigationEvents } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
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


 class DetailBar extends React.Component {

  constructor(props){
    super(props);{

      this.state = {
        data:[]
      }
    }
  };

//affichage api bar

  fetchData = async()=>{
    const { route , navigation} = this.props;
    const { itemId} = route.params;

    const response= await fetch('http://172.21.201.23:8080/api/bar/'+ itemId)
    const bar = await response.json()
    this.setState({data:bar})

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
  const bars = this.state.data
  return(
    <View tyle={styles.container}>
      <Text>{bars.nom}</Text>
      <Text>telephone : {bars.telephone}</Text>
      <Text>{bars.reseau_sociaux}</Text>
      <Text>{bars.photo}</Text>
      <Text>adresse : {bars.adresse}</Text>
      <Text>Horares : </Text>
      <Text>{bars.horaire_jour}</Text>
      <Text>latitude : {bars.latitude}</Text>
      <Text>longitude : {bars.longitude}</Text>

      <View style={styles.containermap}>
       <MapView
         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
         style={styles.map}
         region={{
           latitude: 46.9896,
           longitude: 3.159,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       />

     </View>
    </View>
  )

}

}
const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
 containermap: {
   ...StyleSheet.absoluteFillObject,
   flex :2,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'baseline',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});
export default DetailBar
