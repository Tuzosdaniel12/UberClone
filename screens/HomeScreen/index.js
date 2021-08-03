import React from 'react'
import styles, { googlePlacesContainer } from "./styles";
import { useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../../components/NavOptions';
import { View, SafeAreaView, Image } from "react-native";
import NavFavorites from '../../components/NavFavorites';
import { setDestination, setOrigin } from '../../slices/navSlice';
import GoogleAutocomplete from "../../components/GoogleAutocomplete";

const HomeScreen = () => {

    const dispatch = useDispatch()

	const onPress = (data, details = null) => {
		dispatch(
			setOrigin({
				location: details.geometry.location,
				description: data.description
			})
		);
		dispatch(setDestination(null));
	}
    return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
					style={styles.image}
					source={{
						uri: "https://links.papareact.com/gzs"
					}}
				/>
				<GoogleAutocomplete
					placeholder="Where To?"
					styles={googlePlacesContainer}
					onPress={onPress}
				/>
				<NavOptions />
				<NavFavorites />
			</View>
		</SafeAreaView>
	);
}

export default HomeScreen


