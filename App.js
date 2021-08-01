import React from 'react';
import store from './store';
import "react-native-gesture-handler";
import { Provider } from 'react-redux'

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from './screens/HomeScreen/index.js';
import MapScreen from './screens/MapScreen/index.js';





//redux

export default function App() {

  const Stack = createStackNavigator();

  return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<Stack.Navigator>
						<Stack.Screen
							name="HomeScreen"
							component={HomeScreen}
							options={{
								headerShown: false
							}}
						/>
						<Stack.Screen
							name="MapScreen"
							component={MapScreen}
							options={{
								headerShown: false
							}}
						/>
					</Stack.Navigator>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
