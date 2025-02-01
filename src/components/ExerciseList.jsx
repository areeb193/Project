import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function ExerciseList({ data }) {
  const router = useRouter();

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id} // Use item.id to make it unique
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => <ExerciseCard router={router} item={item} index={index} />}
      />
    </View>
  );
}

const ExerciseCard = ({ item, router, index }) => {
  console.log(item.gifUrl); // Debugging: Log the GIF URL

  return (
    <View>
      <TouchableOpacity
        className="flex py-3 space-y-2"
        // onPress={() => router.push(`/exercise-detail/${item.id}`)} // Add navigation to the exercise detail page
      >
        <View className="bg-neutral-200 shadow rounded-[25px]">
          <Image
            source={{ uri: item.gifUrl }} // Using the gifUrl from demo data
            contentFit="cover"
            style={{ width: wp(44), height: wp(52), borderRadius: 25 }} // Adding borderRadius here
            className="rounded-[25px]" // Keeping the Tailwind class
          />
        </View>
        <Text
          style={{ fontSize: hp(1.7) }}
          className="text-neutral-700 font-semibold ml-1 tracking-wide"
        >
          {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};