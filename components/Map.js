import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';


const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);


    return (
        <MapView
            style={tw`flex-1`}
            mapType="mutedStandard"
            screenOptions={{ headerShown: false }}
            initialRegion={{
                latitude: 45.4654219,
                longitude: 9.1859243,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >

            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor='black'
                />
            )}


            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: 45.4654219,
                        longitude: 9.1859243,
                    }}
                    title='Origin'
                    description={origin.description}
                    identifier='origin'
                />
            )}
        </MapView>
    );
};

export default Map;

const styles = StyleSheet.create({});