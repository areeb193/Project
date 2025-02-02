import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntIcons from 'react-native-vector-icons/AntDesign';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

export default function ExerciseDetails() {
  const item = useLocalSearchParams();
  console.log('got it ', item);
  const router = useRouter();

  // Animation values
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 700, easing: Easing.out(Easing.exp) });
    translateY.value = withTiming(0, { duration: 700, easing: Easing.out(Easing.exp) });
  }, []);

  const animatedImageStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value / 2 }],
  }));

  return (
    <View className="flex flex-1">
      {/* Animated Image */}
      <Animated.View style={[animatedImageStyle]} className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </Animated.View>

      {/* Close Button */}
      <TouchableOpacity onPress={() => router.back()} className="mx-2 absolute rounded-full mt-2 right-0">
        <AntIcons name="closecircle" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>

      {/* Details */}
      <ScrollView className="mx-4 space-y-2 mt-3">
        <Animated.Text
          style={[{ fontSize: hp(3.5) }, animatedTextStyle]}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          {item.name}
        </Animated.Text>

        <Animated.Text style={[{ fontSize: hp(2) }, animatedTextStyle]} className="text-neutral-700 tracking-wide">
          Equipment <Text className="font-bold text-neutral-800">{item?.equipment}</Text>
        </Animated.Text>

        <Animated.Text style={[{ fontSize: hp(2) }, animatedTextStyle]} className="text-neutral-700 tracking-wide">
          Secondary Muscles <Text className="font-bold text-neutral-800">{item?.secondaryMuscles}</Text>
        </Animated.Text>

        <Animated.Text style={[{ fontSize: hp(2) }, animatedTextStyle]} className="text-neutral-700 tracking-wide">
          Target <Text className="font-bold text-neutral-800">{item?.target}</Text>
        </Animated.Text>

        <Animated.Text
          style={[{ fontSize: hp(3) }, animatedTextStyle]}
          className="font-semibold text-neutral-700 tracking-wide"
        >
          Instruction
        </Animated.Text>

        {item?.instructions ? (
          item.instructions.split(',').map((instruction, index) => (
            <Animated.Text
              key={index}
              style={[{ fontSize: hp(1.7) }, animatedTextStyle]}
              className="text-neutral-800"
            >
              {instruction.trim()}
            </Animated.Text>
          ))
        ) : (
          <Animated.Text style={[{ fontSize: hp(1.7) }, animatedTextStyle]} className="text-neutral-800">
            No instructions available.
          </Animated.Text>
        )}
      </ScrollView>
    </View>
  );
}
