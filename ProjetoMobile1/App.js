import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import Logo from './assets/favicon.png'
import CustomInput from './Components/Custominput';

export default function App() {

  const [email, setEmail] = useState()

  const setEmailInputValue = (value) => {
    setEmail(value)
  }

  const [senha, setSenha] = useState()

  const setSenhaInputValue = (value) => {
    setSenha(value)
  }

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={{
          width: '50%',
          height: 100,
          resizeMode: 'contain'
        }}
      />

      <CustomInput value={email}/>
      
      <TextInput
        placeholder='senha'
        value={senha}
        secureTextEntry={true}
        onChangeText={(text) => setSenhaInputValue(text)}
      >

      </TextInput>
      <Button color='#1d0c20' title='Entrar'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
