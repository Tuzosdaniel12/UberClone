import React from 'react';
import styles from "./styles"
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from 'react-redux';
import tw from "tailwind-react-native-classnames";
import { setDestination } from '../../slices/navSlice';
import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



const NavigateCard = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation();

    return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			<Text style={tw`text-center py-5 text-xl`}>Good Morning!!!</Text>
			<View style={tw`border-t border-gray-200 flex-shrink`}>
				<GooglePlacesAutocomplete
					placeholder="Where To?"
					styles={styles}
					onPress={(data, details = null) => {
						dispatch(
							setDestination({
								location: details.geometry.location,
								description: data.description
							})
						);
						
                        navigation.navigate("RideOptionCard")
					}}
					fetchDetails={true}
					enablePoweredByContainer={false}
					minLength={2}
					query={{
						key: GOOGLE_MAPS_KEY,
						language: "en"
					}}
					nearbyPlacesAPI="GooglePlaceSearch"
					debounce={400}
				/>
			</View>
		</SafeAreaView>
	);
}

export default NavigateCard;
