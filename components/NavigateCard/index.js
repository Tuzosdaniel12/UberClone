import React from 'react';
import styles from "./styles"
import { useDispatch } from 'react-redux';
import tw from "tailwind-react-native-classnames";
import { setDestination } from '../../slices/navSlice';
import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import NavFavorites from '../NavFavorites';
import NavCardBottom from '../NavCardBottom';
import GoogleAutocomplete from '../GoogleAutocomplete';

const NavigateCard = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation();

	const onPress = (data, details = null) => {
		dispatch(
			setDestination({
				location: details.geometry.location,
				description: data.description
			})
		);

		navigation.navigate("RideOptionCard");
	};

    return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			<Text style={tw`text-center py-5 text-xl`}>Good Morning!!!</Text>
			<View style={tw`border-t border-gray-200 flex-shrink`}>
				<View>
					<GoogleAutocomplete
						placeholder="Where To?"
						styles={styles}
						onPress={onPress}
					/>
				</View>

				<NavFavorites />
			</View>

			<NavCardBottom />
		</SafeAreaView>
	);
}

export default NavigateCard;
