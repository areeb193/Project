import React, { useRef } from 'react';
import { View, ScrollView, Image, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');

const sliderImages = [
  require('../../assets/slide1.png'),
  require('../../assets/slide2.png'),
  require('../../assets/slide3.png'),
  require('../../assets/slide4.png'),
  require('../../assets/slide5.png'),
];

export default function ImageSlider() {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ alignItems: 'center' }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        style={{ flexGrow: 0 }}
      >
        {sliderImages.map((image, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-50, 0, 50], // Creates parallax effect
            extrapolate: 'clamp',
          });

          return (
            <View key={index} style={{ width, alignItems: 'center' }}>
              <Animated.Image
                source={image}
                style={{
                  width: width - 70,
                  height: 200,
                  borderRadius: 20, // Rounded edges
                  resizeMode: 'cover',
                  transform: [{ translateX }],
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
