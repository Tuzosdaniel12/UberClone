
import React from 'react';
import Map from '../../components/Map';
import tw from "tailwind-react-native-classnames";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NavigateCard from '../../components/NavigateCard';
import RideOptionCard from '../../components/RideOptionCard';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const MapScreen = () => {

	const Stack = createStackNavigator();
	const navigation = useNavigation();

    return (
		<View>
			<TouchableOpacity
				onPress={() => navigation.navigate("HomeScreen")}
				style={[
					tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`
				]}>
				<Icon name="menu" />
			</TouchableOpacity>

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
