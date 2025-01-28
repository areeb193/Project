import {View , Text ,StyleSheet,ScrollView} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import exercises from '../../assets/data/exercises';
import {Stack} from 'expo-router';
import {useState} from 'react';
export default function ExerciseDetailScreen() {
  const params = useLocalSearchParams();
  const[instructionsExpanded,setInstructionsExpanded]=useState(false);
  
  const exercise = exercises.find((item) => item.name === params.name);
  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }
  
  
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{title: exercise.name}}/>
      <View style={styles.panel}>
        <Text style={styles.excersieName}>{exercise.name}</Text>
          <Text style={styles.excersieSubtitle}>
            <Text style={styles.subValue}>{exercise.muscle}</Text> |{'  '}
              <Text style={styles.subValue}>{exercise.equipment}</Text>
           </Text>
           </View>
           <View style={styles.panel}>
           <Text  style={styles.instructions} numberOfLines={instructionsExpanded ? 0:3}>{exercise.instructions}</Text>
           <Text onPress={()=>setInstructionsExpanded(!instructionsExpanded)
           } style={styles.seeMore}>{instructionsExpanded ? 'See less': 'See more'}</Text>
           </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  subValue:{
    textTransform:'capitalize',
  },
  excersieName:{
    fontSize: 20 , fontWeight:'500'

  },
  excersieSubtitle:{
    color:'dimgray'
  },
  container: {
    padding: 10,
    gap:10
  },
  instructions:{
    
    fontSize:16,
    lineHeight:24
  } , 
  panel:{
    backgroundColor:'white',
    borderRadius: 5,
    padding: 10,
    
  },
  seeMore:{
    color:'blue',
    alignSelf:'center',
    fontWeight:'600',
    padding : 5,
  }
  
});