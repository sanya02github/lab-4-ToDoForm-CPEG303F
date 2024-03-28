import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ToDoForm from './ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <View style={StyleSheet.container}>
      <ToDoForm addTask={addTask} />
    </View>
  );
}

const style = StylesSheet.create({
  container: {
    flex:1, 
    backgroundColor: '#fff',
    alignItem: 'center',
    justifyContent: 'center',
  },
});

const addTask = (taskText) => {
  setTasks([...tasks, taskText]);
};





















import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
