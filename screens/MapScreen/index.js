
import React from 'react';
import Map from '../../components/Map';
import tw from "tailwind-react-native-classnames";
import { View, Text, StyleSheet } from "react-native";
import NavigateCard from '../../components/NavigateCard';
import RideOptionCard from '../../components/RideOptionCard';
import { createStackNavigator } from '@react-navigation/stack';

const MapScreen = () => {

	const Stack = createStackNavigator();

    return (
		<View>
			<View style={tw`h-1/2`}>
				<Map />
			</View>
			<View style={tw`h-1/2`}>
				<Stack.Navigator>
					<Stack.Screen
						name="NavigateCard"
						component={NavigateCard}
						options={{
							headerShown: false
						}}
					/>
					<Stack.Screen
						name="RideOptionCard"
						component={RideOptionCard}
						options={{
							headerShown: false
						}}
					/>
				</Stack.Navigator>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({})

export default MapScreen;
