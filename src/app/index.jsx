import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
export default function Index() {
    const router = useRouter();
  return (
    <View style={tw`flex-1 justify-center`}>
      <StatusBar style="light" />
      <Image
        style={tw`h-full w-full absolute`}
        source={require('../../assets/welcome.png')}
        resizeMode="cover"
      />

      <LinearGradient
        colors={['transparent', '#18181b']}
        style={[tw`flex justify-end pb-12 gap-8`, { width: wp(100), height: hp(78) }]}
        start={{ x: 0.5, y: 0.8 }}
      >
        <Animated.View entering={FadeInDown.delay(100).springify()} style={tw`flex items-center`}>
          <Text style={[tw`text-white font-bold tracking-wide`, { fontSize: hp(5) }]}>
            Best <Text style={[tw`text-rose-500`, { fontSize: hp(5) }]}>Workouts</Text>
          </Text>
          <Text style={[tw`text-white font-bold tracking-wide`, { fontSize: hp(5) }]}>For you</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(100).springify()} style={tw`flex items-center`}>
          <Text style={[tw`text-white font-bold tracking-wide`, { fontSize: hp(5) }]}>
            Get <Text style={[tw`text-rose-500`, { fontSize: hp(5) }]}>Fit</Text>
          </Text>
          <Text style={[tw`text-white font-bold tracking-wide`, { fontSize: hp(5) }]}>
            And <Text style={[tw`text-rose-500`, { fontSize: hp(5) }]}>Healthy</Text>
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
          onPress={() => router.push('home')}
            style={[
              tw`bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200`,
              { height: hp(7), width: wp(80) }
            ]}
          >
            <Text style={[tw`text-white font-bold tracking-wide`, { fontSize: hp(3) }]}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}