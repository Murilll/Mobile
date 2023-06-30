import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, AccessibilityInfo } from 'react-native';
import Logo from '../assets/logo.png'
import CustomInput from '../components/CustomInput';
import styles from '../styles/styles';
import app from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

export default function Cadastro() {
    const [valor, setValor] = useState('')
    const [referencia, setReferencia] = useState('')
    const [data, setData] = useState('')

    const navigation = useNavigation()

    const pageListagem= () => {
        navigation.navigate('Listagem')
      }

    const setValorInputValue = (value) => {
        setValor(value)    
    }

    const setReferenciaInputValue = (value) => {
        setReferencia(value)    
    }

    const setDataInputValue = (value) => {
        setData(value)
    }

    const CadastrarTranferecia = async () => {
        const body = {
            value : valor,
            reference : referencia,
            date : data
        }

        console.log(body)
        
        const req = await axios.post('http://localhost:3000/transaction', body)

        console.log(req)
    }

    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                style={{
                    width: 100,
                    height: 100
                }}
            />

            <CustomInput
                placeholder='Valor'
                value={valor}
                funcao={setValorInputValue}
            />

            <CustomInput
                placeholder='Referencia'
                value={referencia}
                funcao={setReferenciaInputValue}
            />

            <CustomInput
                placeholder='Data'
                value={data}
                funcao={setDataInputValue}
            />
            <TouchableOpacity style={{ marginTop: 15 }} onPress={CadastrarTranferecia}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 15 }} onPress={pageListagem}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Listagem</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}