
import {  StyleSheet, Text, View ,Pressable} from 'react-native';

function GoalItem({text,onDeleteItem,id}) {

  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{color:"#210644"}} onPress={onDeleteItem.bind(this,id)}>   
              <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:"#5e0acc",
      },
      goalText:{
        padding:8,
        color:"white",
      }
})