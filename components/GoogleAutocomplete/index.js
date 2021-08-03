import React from 'react';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {View, StyleSheet} from 'react-native';
import { GOOGLE_MAPS_KEY } from "@env";

const GoogleAutocomplete = ({onPress, styles, placeholder}) => {
    return (
		<GooglePlacesAutocomplete
			placeholder={placeholder}
			styles={styles}
			onPress={(data, details) => onPress(data, details)}
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
	);
}

const styles = StyleSheet.create({})

export default GoogleAutocomplete;
