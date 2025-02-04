import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'; // Import Slider from react-native
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider'; 

// GenderButtonSelect Component
const GenderButtonSelect = ({ selected, gender, onPress }) => {
  const selectedStyle = {
    color: 'white',
  };

  return (
    <TouchableOpacity activeOpacity={0.5} style={[styles.container]} onPress={onPress}>
      {gender === 'male' ? (
        <Ionicons name="male-outline" size={75} color={selected ? 'white' : '#8E8E98'} />
      ) : (
        <Ionicons name="female-outline" size={75} color={selected ? 'white' : '#8E8E98'} />
      )}
      <Text style={[styles.label, selected && selectedStyle]}>{gender.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

// CounterSelect Component
const CounterSelect = ({ label = 'Weight', onValueChange, suffix, defaultValue = 0 }) => {
  const [displayValue, setDisplayValue] = useState(defaultValue);

  const handleAdd = () => {
    let newValue = displayValue + 1;
    onValueChange && onValueChange(newValue);
    setDisplayValue(newValue);
  };

  const handleSubtract = () => {
    if (displayValue > 0) {
      let newValue = displayValue - 1;
      onValueChange && onValueChange(newValue);
      setDisplayValue(newValue);
    }
  };

  return (
    <View style={[styles.container]}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
      <Text style={styles.valueText}>
        {displayValue}
        <Text style={styles.label}> {suffix}</Text>
      </Text>

      <View style={styles.btnGroup}>
        <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={handleSubtract}>
          <AntDesign name="minus" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={handleAdd}>
          <AntDesign name="plus" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// SliderSelect Component
const SliderSelect = ({ label = 'Height', suffix = 'cm', onValueChange }) => {
  const [displayValue, setDisplayValue] = useState(0);

  const handleChange = (value) => {
    setDisplayValue(value);
    onValueChange && onValueChange(value);
  };

  return (
    <View style={[styles.container]}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
      <Text style={styles.valueText}>
        {displayValue}
        <Text style={styles.label}> {suffix}</Text>
      </Text>

      <Slider
        style={{ width: '100%', height: 40 }}  // Adjust the height of the slider
        thumbTintColor="#D83456"
        step={1}
        minimumValue={0}
        onValueChange={handleChange}
        maximumValue={300}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#888994"
      />
    </View>
  );
};

// BMI Calculation Screen
const BmiCalculatorScreen = () => {
  const [formState, setFormState] = useState({
    gender: undefined,
    height: undefined,
    weight: undefined,
    age: undefined,
  });

  const isButtonDisabled = () => {
    return !(formState.gender && formState.age && formState.height && formState.weight);
  };

  const handleChange = (key, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handlePress = (value) => {
    setFormState((prevState) => ({
      ...prevState,
      gender: prevState.gender === value ? undefined : value,
    }));
  };

  const calculateBmi = () => {
    const { weight, height } = formState;

    if (weight && height) {
      let heightMeters = height / 100;
      const bmiResult = (weight / (heightMeters * heightMeters)).toFixed(2);

      Alert.alert('Your BMI Result', `Your BMI is: ${bmiResult}`, [
        {
          text: 'OK',
          onPress: () => {},
        },
      ]);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inner}>
        <View style={{ gap: 10, flexDirection: 'row' }}>
          <GenderButtonSelect onPress={() => handlePress('male')} selected={formState.gender === 'male'} gender="male" />
          <GenderButtonSelect onPress={() => handlePress('female')} selected={formState.gender === 'female'} gender="female" />
        </View>

        <SliderSelect onValueChange={(value) => handleChange('height', value)} />
        <View style={{ gap: 10, flexDirection: 'row' }}>
          <CounterSelect label="Weight" suffix="kg" defaultValue={60} onValueChange={(value) => handleChange('weight', value)} />
          <CounterSelect label="Age" onValueChange={(value) => handleChange('age', value)} />
        </View>

        <View style={{ marginTop: '10%' }}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              backgroundColor: isButtonDisabled() ? '#D3D3D3' : '#D83456',
              borderRadius: 8,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 15,
            }}
            disabled={isButtonDisabled()}
            onPress={calculateBmi}
          >
            <Text style={{ color: 'white', fontSize: 20, textTransform: 'uppercase' }}>Calculate your BMI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#080A1C',
    flex: 1,
    padding: '3%',
  },
  inner: {
    backgroundColor: '#0A0C21',
    flex: 1,
    padding: 10,
  },
  container: {
    backgroundColor: '#111426',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    color: '#8E8E98',
    fontSize: 20,
    fontWeight: '600',
  },
  valueText: {
    color: 'white',
    fontSize: 60,
    fontWeight: '600',
    marginBottom: '5%',
  },
  btnGroup: {
    flexDirection: 'row',
    gap: 20,
  },
  btn: {
    backgroundColor: '#1D2032',
    borderRadius: 50,
    alignItems: 'center',
    padding: 10,
  },
});

export default BmiCalculatorScreen;
