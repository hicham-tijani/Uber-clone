import { Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import MapView from 'react-native-maps'
import NavigateCard from '../components/NavigateCard'
import { createStackNavigator } from '@react-navigation/stack'
import RideOptionsCard from '../components/RideOptionscard'


const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
       
      <View style={tw`h-1/2`}></View>
      <Stack.Navigator>
        <Stack.Screen
          name="NavigateCard"
          component={NavigateCard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RideOptionsCard"
          component={RideOptionsCard}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </View>
  )
}

export default MapScreen
