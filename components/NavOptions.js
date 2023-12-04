import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import { Icon } from 'react-native-elements';
import 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';



const NavOptions = () => {
  const navigation = useNavigation();

  return (
  
          <View>
            <Image
              style={{ width: 260, height: 150, left:110, resizeMode: "contain" }}
              source={{ uri: "https://i.pinimg.com/474x/33/d2/57/33d2571393537ca4235e98c424c7e029.jpg" }} />
           
           <TouchableOpacity
              onPress={() => { navigation.navigate("MapScreen"); }}
           >
             <View style={tw`absolute bottom-7 left-6`}>
              <Text style={tw`mt-2 text-2xl   font-semibold`}>Get a Ride</Text>
            <Icon style={tw`p-1 bg-black  rounded-full  w-14 mt-4`}
              name="arrowright" color="white" type='antdesign' />
            </View>
           </TouchableOpacity>
           
            

          </View>
  );
};

export default NavOptions;
