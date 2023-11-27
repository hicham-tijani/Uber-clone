import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, FlatList, Image, StatusBar, Modal} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';
import tw from 'tailwind-react-native-classnames';
import HomeScreen from '../screens/HomeScreen';
import { FancyAlert } from 'react-native-expo-fancy-alerts';


const data = [
    {
        id: "Uber-X-123",
        title: "Uber X",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
];



const SURGE_CHARGE_PRICE = 1.5;

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    setTimeout(() => {setVisible(false);}, 4000);
    const [visible, setVisible] = React.useState(false);
    const toggleAlert = React.useCallback(() => {
        setVisible(!visible);
    }, [visible]);

    return (
        <SafeAreaView style={tw`bg-white rounded-tl-3xl rounded-tr-3xl border border-black flex-grow`}>
            <View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("NavigateCard"); }}
                    style={tw`absolute top-4 left-5 z-50 p-3 rounded-full bg-black`}>
                    <Icon name="chevron-left" color="white" type="font-awesome" size={14} />
                </TouchableOpacity>
                <Text style={tw`text-center text-xl py-5`}>
                    Select a Ride — {travelTimeInformation?.distance?.text}
                </Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image }, item }) => (
                    <TouchableOpacity

                        onPress={() => setSelected(item)}
                        style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"
                            }`}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                right: 20,
                                bottom: 18,
                                resizeMode: 'contain',
                            }}
                            source={{ uri: image }}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration?.text}  Travel Time</Text>
                        </View>
                        <Text style={tw`text-xl right-6 bottom-3`}>
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
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity disabled={!selected}
                    style={tw`bg-black py-3 m-3 rounded-full ${!selected && "bg-gray-300"}`}

                    onPress={toggleAlert}
                    
                >
                    <Text style={tw`text-center text-white text-xl `}>
                        Choose {selected?.title}
                    </Text>

                </TouchableOpacity>

                <FancyAlert
                    visible={visible}
                    icon={<View style={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'green',
                        borderRadius: 50,
                        width: '100%',
                    }}><Text>🤓</Text></View>}
                    style={{ backgroundColor: 'white' }}
                >
                    <Text style={{ marginTop: -16, marginBottom: 32 }}>Hello there</Text>
                </FancyAlert>

            </View>
        </SafeAreaView>

    );
};

export default RideOptionsCard;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

