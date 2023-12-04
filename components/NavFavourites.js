import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, selectOrigin, setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: '123',
        icon: 'home',
        description: 'Home',
        location:'San Donato Milanese, Metropolitan City of Milan, Italy',
    },
    {
        id: '456',
        icon: 'airplane',
        description: 'Airport',
        location:'Linate, Metropolitan City of Milan, Italy',
    },
    {
        id: '789',
        icon: 'heart',
        description: 'Gym',
        location:'Porta Venezia Fitness Club, Via Gustavo Modena, Milan, Italy',
    },
];

const NavFavourites = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);

    return (
        <FlatList
        style={tw`bg-gray-200 rounded-3xl top-12`}
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View
                    style={tw`bg-gray-200 `}
                />
            )}
            renderItem={({item: { location, description, icon } }) => (
                <TouchableOpacity
                    style={tw`flex-row items-center p-6`}
                    onPress={( item ) => {
                        if (!origin) {
                            dispatch(
                                setOrigin({
                                    location: location,
                                    description: description,
                                }),
                                
                                console.log(`Origin: ${location}`),
                            );
                            
                            navigation.navigate("MapScreen");
                        } else if (!destination) {
                            dispatch(
                                setDestination({
                                    location: location,
                                    description: description,
                                }),
        
                                console.log(`Destination: ${location} and ${description}`),
                            );
                            
                            navigation.navigate("MapScreen");
                        }
                    }}
                >
                    <Icon
                        style={{
                            backgroundColor: "black",
                            padding: 8,
                            borderRadius: 100,
                            marginRight: 10,
                        }}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{description}</Text>
                        <Text style={tw`text-gray-500`}>{location}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites