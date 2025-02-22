import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';
import { useProfile } from '../context/ProfileContext';  // Import useProfile hook

export default function Home() {
  const router = useRouter();
  const { userData } = useProfile();  // Access user data from context

  const handlePress = () => {
    router.push('/ProfileScreen'); // Navigate to ProfileScreen
  };

  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
      <StatusBar style="dark" />
      {/* Punchline and avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            className="text-neutral-700 tracking-wider font-bold"
            style={{ fontSize: hp(4.5) }}
          >
            {`Hello, ${userData.name}`}  {/* Displaying the user's name */}
          </Text>
          <Text
            className="text-rose-700 tracking-wider font-bold"
            style={{ fontSize: hp(4.5) }}
          >
            Workout
          </Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={require('../../assets/avatar.png')}
              style={{ height: hp(6), width: hp(6) }}
              className="rounded-full"
            />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() =>router.push('/BmiCalculatorScreen')}
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-100"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <Ionicons name="calculator" size={hp(2.5)} color="red" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ImageSlider />
      </View>
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}
