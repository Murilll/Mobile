import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Listagem from './pages/Listagem';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

export default function App() {

	return (
		<NavigationContainer>
			<Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Listagem" component={Listagem} />
			</Stack.Navigator>
		</NavigationContainer>	
	);
}