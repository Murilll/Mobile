import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

export default function App() {

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Listagem" component={Listagem} />
				<Stack.Screen name="Cadastro" component={Cadastro} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}