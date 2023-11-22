import { Text, Touchable, View, Keyboard } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import MapView from 'react-native-maps'
import NavigateCard from '../components/NavigateCard'
import { createStackNavigator } from '@react-navigation/stack'
import RideOptionsCard from '../components/RideOptionsCard'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { useNavigation
 } from '@react-navigation/native'


const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
      <View>
          <TouchableOpacity
              onPress={() => navigation.navigate("HomeScreen")}
              style={tw`absolute bg-gray-100 p-3 rounded-full top-16 left-8 shadow-lg z-50`}
          >
              <Icon name="menu" />
          </TouchableOpacity>
          <View style={tw`h-1/2`}>
              <Map />
          </View>
          <View style={tw`h-1/2`}>
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
      </View>
  )
}


export default MapScreen
