import { Button, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import styles from "../styles/styles";
import Cadastro from "../pages/Cadastro"
import { useEffect, useState } from "react";

export default function Listagem() {
  const navigation = useNavigation()

  const [transactions, setTransactions] = useState([])

  const pageCadastro = () => {
    navigation.navigate('Cadastro')
  }

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/transactions')
        console.log(response)
        if (response.status === 200) {
          setTransactions(response.data)
        }
      } catch (err) {
        console.log(err)
      }
    }
    getTransactions()
  }, [])

  return (
    <View style={styles.containerListagem}>
      <TouchableOpacity style={{ marginTop: 15 }} onPress={pageCadastro}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </View>
      </TouchableOpacity>
      <Text></Text>
      {transactions.map((transaction, index) => {
        return (
          <View style={styles.item} key={index}>
            <Text>{transaction.referencia}</Text>
            <Text>{transaction.valor}</Text>
            <Text>{transaction.data}</Text>
          </View>
        )
      })}
    </View>
  );
}