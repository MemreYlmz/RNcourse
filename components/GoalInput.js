import { Button, StyleSheet, Image, TextInput, View ,Modal} from 'react-native';
import { useState } from 'react';

function GoalInput({onAddGoal,visible,onCancel}) {
    const [enteredGoalText,setEnteredGoalText]=useState("")

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText)
        //console.log(enteredText)
        
      }
      function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText("")
      }
  return (
    <Modal visible={visible} animationType="slide" >
      <View style={styles.inputContainer}>
          <Image style={styles.image} source={require("../assets/images/goal.png")}/>
          <TextInput 
           style={styles.textInput}
           placeholder='Your course goal' 
           onChangeText={goalInputHandler}
           value={enteredGoalText} />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button 
              title='Add Goal'
              onPress={addGoalHandler}
              color="#b180f0"  />
            </View>
            <View style={styles.button}>
              <Button 
              title='Cancel'
              onPress={onCancel}
              color="#f31282"
               />
             </View>
          </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer:{
      backgroundColor:"#311b6b",
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:16
      },
      buttonContainer:{
        marginTop:16,
        flexDirection:"row",
        gap:2
      },
      image:{
        width:100,
        height:100,
        margin:20
      },
      textInput:{
        borderWidth:1,
        borderColor:"#e4d0ff",
        backgroundColor:"#e4d0ff",
        borderRadius:8,
        color:"#120438",
        width:"100%",
        padding:6
      },
      button:{
        width:"30%",
        marginHorizontal:8
      }
})