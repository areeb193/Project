import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { useProfile } from '../context/ProfileContext'; // Import the custom hook

export default function ProfileScreen() {
  // Use context to get profile data and the function to update it
  const { userData, saveProfile } = useProfile();

  // Local state for user profile data (initialize with context data)
  const [newName, setNewName] = useState(userData.name);
  const [newPhone, setNewPhone] = useState(userData.phone);
  const [newWeight, setNewWeight] = useState(userData.weight);
  const [newHeight, setNewHeight] = useState(userData.height);
  const [newGoal, setNewGoal] = useState(userData.goal);

  // Update local state if context data changes (if needed)
  useEffect(() => {
    setNewName(userData.name);
    setNewPhone(userData.phone);
    setNewWeight(userData.weight);
    setNewHeight(userData.height);
    setNewGoal(userData.goal);
  }, [userData]);

  // Handle saving profile data to context
  const handleSave = () => {
    const newProfileData = {
      name: newName,
      phone: newPhone,
      weight: newWeight,
      height: newHeight,
      goal: newGoal,
    };

    saveProfile(newProfileData); // Save new profile data to context
    Alert.alert('Success', 'Profile saved successfully!'); // Show success alert
  };

  return (
    <View className="flex-1 bg-[#fc035e]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Logo */}
        <View className="items-center p-4">
          <Image
            className="w-36 h-36"
            source={require('../../assets/icon2.png')} // Assuming your logo is in the assets folder
          />
        </View>

        {/* Profile Content */}
        <View className="bg-white mt-[-50px] rounded-t-2xl p-6 shadow-lg">
          {/* Profile Form */}
          <View className="mt-6 space-y-5">
            {/* Name Input */}
            <Text className="text-xl font-semibold text-gray-700">Name</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3 text-lg"
              placeholder="Enter Name"
              value={newName}
              onChangeText={setNewName}
            />

            {/* Phone Input */}
            <Text className="text-xl font-semibold text-gray-700">Phone Number</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3 text-lg"
              placeholder="Enter Phone"
              keyboardType="phone-pad"
              value={newPhone}
              onChangeText={setNewPhone}
            />

            {/* Weight Input */}
            <Text className="text-xl font-semibold text-gray-700">Weight (kg)</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3 text-lg"
              placeholder="Enter Weight"
              keyboardType="numeric"
              value={newWeight}
              onChangeText={setNewWeight}
            />

            {/* Height Input */}
            <Text className="text-xl font-semibold text-gray-700">Height (cm)</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3 text-lg"
              placeholder="Enter Height"
              keyboardType="numeric"
              value={newHeight}
              onChangeText={setNewHeight}
            />

            {/* Fitness Goal Input */}
            <Text className="text-xl font-semibold text-gray-700">Fitness Goal</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3 text-lg"
              placeholder="Enter Fitness Goal"
              value={newGoal}
              onChangeText={setNewGoal}
            />

            {/* Save Button */}
            <TouchableOpacity
              className="bg-blue-500 p-4 rounded-lg mt-6 shadow-md"
              onPress={handleSave}
            >
              <Text className="text-white text-center text-lg font-bold">Save Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
