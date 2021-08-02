import React from 'react';
import { useSelector } from 'react-redux';
import {View, StyleSheet} from 'react-native';
import tw from "tailwind-react-native-classnames"
import MapView, { Marker } from "react-native-maps"
import { selectOrigin } from '../../slices/navSlice';

const Map = () => {

    const origin = useSelector(selectOrigin);

    return (
		<MapView
			style={tw`flex-1`}
			mapType="mutedStandard"
			initialRegion={{
				latitude: origin.location.lat,
				longitude: origin.location.lng,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005
			}}
		/>
	);
}

const styles = StyleSheet.create({})

export default Map;