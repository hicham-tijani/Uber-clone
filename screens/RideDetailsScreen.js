import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, FlatList, Image, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';
import tw from 'tailwind-react-native-classnames';
import Modal from "react-native-modal";
import { createStackNavigator } from '@react-navigation/stack'
import MapView from 'react-native-maps';
import Map from '../components/Map';


const data = [
    {
        id: "Uber-X-123",
        title: "Uber X",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },

];




const SURGE_CHARGE_PRICE = 1.5;


const RideDetailsScreen = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const Stack = createStackNavigator();

    return (
        <View style={tw`bg-white h-full`}>

            <View style={tw`h-1/2 bg-white`}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("NavigateCard"); }}
                    style={tw`absolute top-20 left-0 z-50 p-3 w-11 rounded-r-2xl bg-black`}>
                    <Icon name="chevron-left" color="white" type="font-awesome" size={14} />
                </TouchableOpacity>
       
                <TouchableOpacity
                    style={tw`absolute top-20 right-5 z-50 p-1 w-24  rounded-full border bg-white`}>
                    <Text style={tw`text-black text-sm`}> Ride details</Text>
                </TouchableOpacity>

                <Image
                    style={{
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                        right: -22,
                        top: 35,
                        backgroundColor: "white",
                        resizeMode: 'contain',
                    }}
                    source={{ uri: "https://links.papareact.com/3pn" }}
                />
                <Text />
            </View>
            <View style={tw`h-28 bg-white`}>

                <FlatList
                    style={tw`bg-gray-200 bottom-11 rounded-3xl mt-7 ml-2 mr-2`}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item: { id, title, multiplier, image }, item }) => (
                        <TouchableOpacity

                            onPress={() => setSelected(item)}
                            style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"
                                }`}
                        >

                            <View style={tw`-ml-6 top-5`}>
                                <Text style={tw`text-2xl font-semibold`}>{title}</Text>
                                <Text>{travelTimeInformation?.duration?.text}  Travel Time</Text>
                            </View>
                            <Text style={tw`text-2xl right-1 top-5`}>
                                {new Intl.NumberFormat('de-DE', {
                                    style: 'currency',
                                    currency: 'EUR'
                                }).format(
                                    (travelTimeInformation?.duration?.value * SURGE_CHARGE_PRICE * multiplier) / 100,
                                )}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={styles.map}>

                <Map 
                />

            </View>

        </View>
    )
}


export default RideDetailsScreen

const styles = StyleSheet.create({

    map: {
        height: "33%",
        width: "93%",
        top: -16,
        position: "relative",
        marginLeft:13,

        
    }
})