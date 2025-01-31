import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import "../../global.css";
export default function _layout() {
  return (
    <Stack
    screenOptions={{ headerShown: false}}/>
  )
}