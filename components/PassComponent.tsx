import React from 'react';
import { View, Text, Image } from 'react-native';
import Mbutton from './MButton';

const MetroPass = () => {
  return (
    <View className="bg-white rounded-xl p-5 m-2">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-poppinsBold text-cyan-900 p-2">Abhirat More</Text>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} className="w-12 h-12 rounded-full" />
      </View>

      <View className="mb-4">
        <View className='flex-row justify-between px-2'>
          <Text className="text-lg font-poppins mb-1">Pass Number: </Text>
          <Text>#9876</Text>
        </View>
        <View className='flex-row justify-between px-2'>
          <Text className="text-lg font-poppins mb-1">Expires: </Text>
          <Text>2025-06-30</Text>
        </View>
        <View className='flex-row justify-between px-2 mt-2'>
          <Text className="text-2xl font-poppinsBold mb-1">Balance: </Text>
          <Text className='text-2xl font-poppinsBold '>₹250</Text>
        </View>
      </View>

      <View className="items-center pt-2 border-t border-cyan-200">
        <Mbutton buttontext='use now'/>
      </View>
    </View>
  );
};

export default MetroPass;