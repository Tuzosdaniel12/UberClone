import React from 'react'
import { GOOGLE_MAPS_KEY } from "@env";
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../../components/NavOptions';
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from './styles';

const HomeScreen = () => {
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
					styles={{
						container: {
							flex: 0
						},
						textInput: {
							fontSize: 18
						}
					}}
                    onPress={(data, details = null) => {
                        console.log("hit")
                        console.log(data)
                        console.log(details);
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
			</View>
		</SafeAreaView>
	);
}

export default HomeScreen


