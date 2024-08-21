import { Button, StyleSheet, Text, TextInput, View ,FlatList,StatusBar} from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const[modalIsVisible,setModalIsVisible]=useState(false)
  const [courseGoals,setCourseGoals]=useState([])

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }
  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText){
    //console.log(enteredGoalText)
    //setCourseGoals((currentCourseGoals)=>[...currentCourseGoals,enteredGoalText])
    setCourseGoals([...courseGoals,{text:enteredGoalText, id:Math.random().toString()}]) 
    endAddGoalHandler()
  }
  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals=>{
    return currentCourseGoals.filter((goal)=>goal.id!==id)
    })
  }
//onChangeText react native de özel her tuşa tıklandığında algılıyor react de yoktu

  return (
    <>
      <StatusBar style="auto"/>
      <View style={styles.appContainer} >
        <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />
        <GoalInput visible={modalIsVisible} onCancel={endAddGoalHandler} onAddGoal={addGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={itemData =>{
            return<GoalItem id={itemData.item.id}  onDeleteItem={deleteGoalHandler} text={itemData.item.text} />
          }} 
          keyExtractor={(item,index)=>{
            return item.id
          }}/>

        </View>

      </View>
      
    
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
    backgroundColor:"#1e085a"
  },
 
  goalsContainer:{
    flex:5
  },

});
//mesela <View> <Text></Text> </View>  view da color red ise text de bundan etkilenmez varsayılan siyah olur yani miras kalmaz css de
//scrollview eklerken dışına bir view eklemezsek saçma bir hale bürünüyor yani css bir garip oluyor olması gerektiğiden farklı oluyor yani

{/*<View style={styles.goalsContainer}>
        <ScrollView >
          {courseGoals.map((goal)=> (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>))}

            {/*{courseGoals.map((goal)=> (
              <Text style={styles.goalItem} key={goal}>{goal}</Text>
            )} 
             Bu şekilde de yazabilirdik ama böyle yazınca ios da borderRadius çalışmıyormuş
             <ScrollView>
             <View> 
              */}
//yukarıda scrollview kullanıdk ama scrollview bize çok uzun elemanı olan dinamik listeleri render ederken hepsini birden eder ve performans düşürür bunun yerine flatlist kullanırız dinamik listemiz varsa
//flatlist kullanıcı sayfayı indirdiikce gelen eleman yüklenir yani hepsini bir anda render etmeye çalışmaz