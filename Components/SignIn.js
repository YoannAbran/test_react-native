import React from 'react'
import { StyleSheet, View, Text,TextInput,Button,Alert } from 'react-native'


class SignIn extends React.Component {

  constructor(props){
    super(props);{
      this.state = {
        nom_input: '',
        password_input: '',

      }
    }
  }

  fetchPost = () => {
    fetch('http://172.21.201.23:8080/api/test/auth/signin',{
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({

        nom: this.state.nom_input,
        password: this.state.password_input,

      })
    }).then((response)=>response.json())
        .then((responseData) =>{
          if(responseData.accessToken)
        {

            this.props.navigation.navigate('List',{nomLog:this.state.nom_input});

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

  <Button title='submit' onPress={this.fetchPost}/>
  </View>

)
}
}
export default SignIn
