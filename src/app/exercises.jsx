 import { View, Text, TouchableOpacity,  Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FetchExercisesByBodypart } from '../../api/exerciseDG';
import { demoExercises } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bodyParts } from '../constants'; // Import the bodyParts array
import Ionicons from 'react-native-vector-icons/Ionicons'
import ExerciseList from '../components/ExerciseList';
import {ScrollView} from 'react-native-virtualized-view'
import { useProfile } from '../context/ProfileContext';  // Import useProfile hook

export default function Exercises() {
  const router = useRouter();
    const { userData } = useProfile();  // Access user data from context
  
  const { bodyPart: bodyPartName } = useLocalSearchParams(); // Extract bodyPart from URL params
  const [exercises, setExercises] = useState();

  // Find the corresponding bodyPart object
  const bodyPart = bodyParts.find((part) => part.name === bodyPartName);

  console.log("Got items:", bodyPartName); // Log the body part name
  console.log("Body part object:", bodyPart); // Log the found body part object

  useEffect(() => {
    if (bodyPartName) {
      getExercises(bodyPartName); // Fetch exercises for the body part
    }
  }, [bodyPartName]);

  const getExercises = async (bodyPartName) => {
    let data = await FetchExercisesByBodypart(bodyPartName);
    setExercises(data)
    console.log(data);
  };

  return (
    <ScrollView>
      <StatusBar style="light" />
      {bodyPart?.image ? (
        <Image
          source={bodyPart.image} // Use the image from the bodyPart object
          style={{ width: wp(100), height: hp(45) }}
          className="rounded-b-[40px]"
          resizeMode="cover"
        />
      ) : (
        <Text className="text-center text-lg mt-10">No image found for {bodyPartName}</Text>
      )}


<TouchableOpacity 
  className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
  style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
  onPress={() => router.back()} // Navigate back
>
  <Ionicons name="arrow-back" size={hp(4)} color="white" />
</TouchableOpacity>
    <View className = "mx-4 space-y-3 mt-4">
      <Text className="font-semibold text-neutral-700"
      style={{fontSize: hp(3)}}>
        {bodyPart.name} Exercise for {` ${userData.name}`}
      </Text>
      <View className="mb-10">
       
      </View>
      <ExerciseList data={exercises}/>
    </View>
    </ScrollView>
  );
} 