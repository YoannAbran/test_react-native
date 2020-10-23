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
        bars:[],
        isLoading: false,
        markers: []
      }
    }
  };

  _getBarDetail(){
    const { route , navigation} = this.props;
    const { id} = route.params;
    getSingleBar(id).then(data =>{

      this.setState({bars: data, isLoading:false});
      console.log(this.state.bars);

    })
  };

  _barMarkers(id, lat, long, name) {
    this.state.markers.push({
      id: id,
      title : name,
      coordinates: {
        latitude: lat,
        longitude: long
      }
    });
    this.setState({ markers: this.state.markers });
    console.log('new coordinates', this.state.markers[0]);
  }

  getCoord() {
    const {bars, isLoading} = this.state
    const id = bars.id;
    const lat = bars.latitude
    const long = bars.longitude
    const name = bars.nom
    this._barMarkers(id, lat, long, name);
  }

  mapMarkers() {
    return this.state.markers.map(
      (markers) =>
      <Marker
        key={markers.id}
        coordinate={{
          latitude: markers.coordinates.longitude,
          longitude: markers.coordinates.latitude
        }}
        title={markers.title}
      >
      </Marker>
    )
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this._getBarDetail();
  };

  componentDidUpdate(previousProps, previousState) {
    if (this.state.bars.latitude != previousState.bars.latitude) {

      this.getCoord();

    }
  }

render() {

  const {bars, isLoading, marker, markers} = this.state

  if (isLoading ){
    return <Text>Loading</Text>
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
           latitude: 46.9896,
           longitude: 3.159,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         }}>
         {this.mapMarkers()}
      </MapView>
    </View>
  )

}

}
const styles = StyleSheet.create({
  container : {
    flex : 1,
  },

 map: {
   height: 350,
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
 },
});
export default DetailBar
