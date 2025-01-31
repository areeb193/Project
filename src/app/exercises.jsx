import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FetchExercisesByBodypart } from '../../api/exerciseDG';

export default function Exercises() {
  const router = useRouter();
  const { bodyPart } = useLocalSearchParams();  // Correctly extract bodyPart from URL params

  console.log("Got items:", bodyPart); // Now correctly logs the body part name

  useEffect(() => {
    if (bodyPart) {
      getExercises(bodyPart);  // Pass the correct parameter to fetch exercises
    }
  }, [bodyPart]);

  const getExercises = async (bodyPart) => {
    let data = await FetchExercisesByBodypart(bodyPart);
    console.log(data);
  };

  return (
    <View className="mt-20">
      <Text>Exercises for {bodyPart}</Text> {/* Display the selected body part */}
      <TouchableOpacity onPress={() => router.push('/home')} className="bg-primary-500 p-2 rounded-lg mt-4">
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}
