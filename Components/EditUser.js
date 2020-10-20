import React from 'react'
import { StyleSheet, View, Text,TextInput,Button } from 'react-native'

class EditUser extends React.Component {

  constructor(props){
    super(props);{
      const { route , navigation} = this.props;
      const { itemId, nom, password, mail, id_evenement } = route.params;
      this.state = {

        nom: '',
        password: '',
        mail: '',
        id_evenement: '',
        nom_input: nom,
        password_input: password,
        mail_input: mail,
        id_evenement_input: id_evenement,
      }
    }
  };

  fetchPut = () => {
    const { route , navigation} = this.props;
    const { itemId} = route.params;

    fetch('http://172.21.201.23:8080/api/test/utilisateur/'+ itemId,{
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        nom: this.state.nom_input,
        password: this.state.password_input,
        mail: this.state.mail_input,
        id_evenement: this.state.id_evenement_input
      })
    }).then((response)=>response.json())
      .catch((error)=>{console.error(error);});
  };


  render() {
    const { route , navigation} = this.props;
    const { itemId, nom, password, mail, id_evenement } = route.params;
      return (
        <View >
          <Text>{JSON.stringify(itemId)}</Text>

          <TextInput
          placeholder  = 'nom'
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          defaultValue = {nom}
          onChangeText={nom => this.setState({nom_input: nom})}
          />

          <TextInput
          placeholder= 'password'
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          defaultValue = {password}
          onChangeText={text => this.setState({password_input: text})}
          />

          <TextInput
          placeholder= 'mail'
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          defaultValue = {mail}
          onChangeText={text => this.setState({mail_input: text})}
          />

          <TextInput
          placeholder= 'id'
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          defaultValue = {id_evenement.toString()}
          onChangeText={text => this.setState({id_evenement_input: text})}
          />

          <Button title='submit' onPress={this.fetchPut}/>
        </View>

    )
  }
}


export default EditUser
