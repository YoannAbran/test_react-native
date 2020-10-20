import React from 'react'
import { StyleSheet, View, Text,TextInput,Button,Alert } from 'react-native'


class SignUp extends React.Component {

  constructor(props){
    super(props);{
      this.state = {
        nom_input: '',
        password_input: '',
        mail_input: '',
        id_evenement_input: ''
      }
    }
  }

  fetchPost = () => {
    fetch('http://172.21.201.23:8080/api/test/auth/signup',{
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        nom: this.state.nom_input,
        password: this.state.password_input,
        mail: this.state.mail_input,
        id_evenement: this.state.id_evenement_input,
      })
    }).then((response)=>response.json())
        .then((responseData) =>{
          if(responseData.nom && responseData.password && responseData.mail && responseData.id_evenement)
        {
          Alert.alert('Utilisateur créer avec succés');
        }
        else{
          Alert.alert(JSON.stringify(responseData.message)); // Alerts doesn't allow arrays or JSONs, so stringify them to view in Alerts
      }
      }
      )
      .catch((error)=>{console.error(error);});
  };

  render(){

  return(
  <View>
  <TextInput
  placeholder= 'nom'
  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
  onChangeText={text => this.setState({nom_input: text})}

  />
  <TextInput
  placeholder= 'password'
  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
  onChangeText={text => this.setState({password_input: text})}

  />
  <TextInput
  placeholder= 'mail'
  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
  onChangeText={text => this.setState({mail_input: text})}

  />
  <TextInput
  placeholder= 'evenement'
  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
  onChangeText={text => this.setState({id_evenement_input: text})}

  />

  <Button title='submit' onPress={this.fetchPost}/>
  </View>

)
}
}
export default SignUp
