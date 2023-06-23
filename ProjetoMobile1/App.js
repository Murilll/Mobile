import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';
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

      <CustomInput
        value={email}
        placeholder={"E-mail"}
        funcao={setEmailInputValue} />

      <CustomInput
        placeholder={'Senha'}
        value={senha}
        funcao={setSenhaInputValue}
        isPassword={true}
      />

      <TouchableOpacity style={{marginTop: 15}}>
        <View style={styles.button}>
          <Text style={styles.ButtonText}>Entrar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#00D8FF',
    width: 156,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  ButtonText: { color: '#302850', fontSize: 16 }

});
