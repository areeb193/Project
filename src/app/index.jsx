import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={tw`flex-1 justify-center`}>
      
      <Image
        style={tw`h-full w-full absolute`}
        source={require('../../assets/welcome.png')}
        resizeMode="cover"
      />

      <LinearGradient
        colors={['transparent', '#18181b']}
        style={[tw`flex justify-end pb-12`, { width: wp(100), height: hp(78) }]}
        start={{ x: 0.5, y: 0.8 }}
      >
        {/* Workout Text */}
        <Animated.View entering={FadeInDown.delay(100).springify()} style={[tw`flex items-center`, { marginBottom: hp(4) }]}>
          <Text style={[tw`text-white font-bold`, { fontSize: hp(5), letterSpacing: 1 }]}>
            Best <Text style={[tw`text-rose-500`, { fontSize: hp(5) }]}>Workouts</Text>
          </Text>
          <Text style={[tw`text-white font-bold`, { fontSize: hp(5), letterSpacing: 1 }]}>For you</Text>
        </Animated.View>

        {/* Fit & Healthy Text */}
        <Animated.View entering={FadeInDown.delay(100).springify()} style={[tw`flex items-center`, { marginBottom: hp(4) }]}>
          <Text style={[tw`text-white font-bold`, { fontSize: hp(5), letterSpacing: 1 }]}>
            Get <Text style={[tw`text-rose-500`, { fontSize: hp(5) }]}>Fit</Text>
          </Text>
          <Text style={[tw`text-white font-bold`, { fontSize: hp(5), letterSpacing: 1 }]}>
            And <Text style={[tw`text-rose-500`, { fontSize: hp(5) }]}>Healthy</Text>
          </Text>
        </Animated.View>

        {/* Get Started Button */}
        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => router.push('/home')}
            style={[
              tw`bg-rose-500 flex items-center justify-center mx-auto rounded-full border-2 border-neutral-200`,
              { height: hp(7), width: wp(80) }
            ]}
          >
            <Text style={[tw`text-white font-bold`, { fontSize: hp(3), letterSpacing: 1 }]}>
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
      <StatusBar style="light"/>
    </View>
  );
}
