import React from 'react'
import styles, {googlePlacesContainer} from './styles';
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../../components/NavOptions';
import { setDestination, setOrigin } from '../../slices/navSlice';
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NavFavorites from '../../components/NavFavorites';

const HomeScreen = () => {

    const dispatch = useDispatch()

    return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
					style={styles.image}
					source={{
						uri: "https://links.papareact.com/gzs"
					}}
				/>

				<GooglePlacesAutocomplete
					placeholder="Where From?"
					styles={googlePlacesContainer}
					onPress={(data, details = null) => {
						dispatch(
							setOrigin({
								location: details.geometry.location,
								description: data.description
							})
						);

						dispatch(setDestination(null));
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

				<NavOptions />
                <NavFavorites/>
			</View>
		</SafeAreaView>
	);
}

export default HomeScreen


