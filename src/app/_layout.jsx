import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { ProfileProvider } from '../context/ProfileContext';  // Import ProfileProvider
import "../../global.css";

export default function _layout() {
  return (
    <ProfileProvider>  {/* Wrap the Stack component with ProfileProvider */}
      <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="home" options={{title:'home'}}
        />
        <Stack.Screen 
          name="exercises" 
          options={{ presentation: 'fullScreenModal' }} 
        />
        
        <Stack.Screen 
          name="exerciseDetails" 
          options={{ presentation: 'modal' }} 
        />
      </Stack>
    </ProfileProvider>
  );
}
