import React from 'react';
import { NavigationEvents } from 'react-navigation';
import MapView, { Marker ,PROVIDER_GOOGLE } from "react-native-maps";
import {getSingleBar} from '../barApi'
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
        bars:'',
        isLoading: false,
        mapLoading:false,

      }
    }
  };

//affichage api bar




    _getBarDetail(){
      const { route , navigation} = this.props;
      const { id} = route.params;
      getSingleBar(id).then(data =>{

        this.setState({bars: data, isLoading:false})

      })
    };



  componentDidMount(){
    // const { navigation } = this.props
    // this._refreshData = navigation.addListener('focus', () => {
    //   this._getBarDetail();
    // });
      this.setState({ isLoading: true });
    this._getBarDetail();

  };


//   componentWillUnmount() {
//   this._refreshData();
// }
render(){

  const {bars,isLoading,mapLoading} = this.state
  const lat = bars.latitude
  const long = bars.longitude
  


  // let getCoord = () => {
  //
  //   if (lat !== undefined && long !== undefined){
  //     return(
  //
  //          )
  //         }
  //       }

if (isLoading && lat===undefined && long===undefined ){
  return <Text>Loading</Text>
  mapLoading = true



console.log(lat);
if (mapLoading && <MapView></MapView>){
  return <Text>Loading</Text>
}
}
  return (

    <View style={styles.container}>
      <Text>{bars.nom} </Text>
      <Text>telephone : {bars.telephone}</Text>
      <Text>{bars.reseau_sociaux}</Text>
      <Text>{bars.photo}</Text>
      <Text>adresse : {bars.adresse}</Text>
      <Text>Horares : </Text>
      <Text>{bars.horaire_jour}</Text>
      <Text>latitude : {bars.latitude}</Text>
      <Text>longitude : {bars.longitude}</Text>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        zoomEnabled={true}
         region={{
           latitude: lat,
           longitude: long,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         }}>
         {console.log("marker:"+lat)}
             <Marker
               coordinate={{latitude: lat,longitude: long}}
               />
           </MapView>
    </View>
  )

}

}
const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
 // containermap: {
 //   ...StyleSheet.absoluteFillObject,
 //   flex :1,
 //   height: 400,
 //   width: 400,
 //   justifyContent: 'flex-end',
 //   alignItems: 'baseline',
 // },
 map: {
   height: 350,
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
 },
});
export default DetailBar
