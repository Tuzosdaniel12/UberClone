import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames"
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";


const NavCardBottom = () => {
	const navigation = useNavigation();
	return (
		<View
			style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
			<TouchableOpacity
				onPress={() => navigation.navigate("RideOptionCard")}
				style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
				<Icon name="car" type="font-awesome" color="white" size={16} />
				<Text style={tw`text-white text-center`}>Rides</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
				<Icon
					name="fast-food-outline"
					type="ionicon"
					color="black"
					size={16}
				/>
				<Text style={tw`text-center`}>Eats</Text>
			</TouchableOpacity>
		</View>
	);
};

export default NavCardBottom;
