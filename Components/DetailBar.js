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
        bars:''
      }
    }
  };

//affichage api bar




    _getBarDetail(){
      const { route , navigation} = this.props;
      const { id} = route.params;
      getSingleBar(id).then(data =>{
        this.setState({bars: data})

      })
    };



  componentDidMount(){
    // const { navigation } = this.props
    // this._refreshData = navigation.addListener('focus', () => {
    //   this._getBarDetail();
    // });
    this._getBarDetail();

  };


//   componentWillUnmount() {
//   this._refreshData();
// }
render(){
  const bars = this.state.bars
  const lat = bars.latitude
  const long = bars.longitude
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



       <MapView
         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
         style={styles.map}
         zoomEnabled={true}
          region={{
            latitude: 46.9896,
            longitude: 3.159,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapView.Marker
      coordinate={{
        latitude:lat,
        longitude:long,
      }}
      title={bars.nom}

    />
          >

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
