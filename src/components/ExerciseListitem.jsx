import { StyleSheet, Text, View } from 'react-native';











export default function ExerciseListItem({item}){
    return(
      
      <View style={styles.exerciseContainer}>
      <Text style={styles.excersieName}>{item.name}</Text>
      <Text style={styles.excersieSubtitle}
      ><Text style={styles.subValue}>{item.muscle}</Text> |{'  '}
       <Text style={styles.subValue}>{item.equipment}</Text>
      </Text>
    </View>
    )
  }











  
  const styles = StyleSheet.create({
    
    excersieName:{
      fontSize: 20 , fontWeight:'500'
  
    },
    excersieSubtitle:{
      color:'dimgray'
    }
    ,exerciseContainer:{
      padding: 10,
      backgroundColor:'#fff',
      borderRadius: 10,
      gap:5,
      marginHorizontal:2,
      shadowColor:'#000',
      shadowOffset:{
        width:0,
        height:1
      },
      shadowOpacity:0.2,

      shadowRadius:1.41,
      elevation:2,
    },
    subValue:{
      textTransform:'capitalize',
    }
  
  });