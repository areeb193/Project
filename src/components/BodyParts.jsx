import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function BodyParts() {
  const router = useRouter();
  
  return (
    <View className="mx-4">
      <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
        Exercises
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => <BodyPartCard router={router} item={item} index={index} />}
      />
    </View>
  );
}

const BodyPartCard = ({ item, router }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => router.push({ pathname: '/exercises', params: { bodyPart: item.name } })} // Fixed parameter passing
        style={{ width: wp(44), height: hp(24), borderRadius: 20, overflow: 'hidden' }}
        className="flex justify-end p-4 mb-4"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: wp(44), height: hp(22), borderRadius: 20 }}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={{
            width: wp(44),
            height: hp(5),
            position: 'absolute',
            bottom: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
        <Text
          style={{ fontSize: hp(2) }}
          className="text-white font-semibold text-center tracking-wide absolute bottom-3 self-center"
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
