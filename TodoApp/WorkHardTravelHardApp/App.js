import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TextInput, ScrollView, Alert } from 'react-native';
import NativeAsyncSQLiteDBStorage from 'react-native/Libraries/Storage/NativeAsyncSQLiteDBStorage';

import { theme } from './colors';
import AsyncStorage  from "@react-native-async-storage/async-storage"

import { Fontisto } from '@expo/vector-icons';

const STORAGE_KEY = "@toDos";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});

  useEffect(()=> {
    loadToDos();
  }, []);

  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  
  console.log(toDos); 

  const onChangeText = (payload) => setText(payload);
  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  const loadToDos = async() => {
    const s = await AsyncStorage.getItem(STORAGE_KEY)
    setToDos(JSON.parse(s));
  }

  const addTodo = async() => {
    if (text === "") {
      return;
    }
    const newTodos = {
      ...toDos, [Date.now()]: { text, working },
    };

    setToDos(newTodos);
    await saveToDos(newTodos);
    setText("");
  }

  const deleteToDo = (key) => {
    console.log("delete key: ", key);

    Alert.alert("Delete To Do", "Are you sure?", [
      {text: "Cancel"},
      { 
        text: "I'm Sure", 
        onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          saveToDos(newToDos);
        }
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{ ...styles.btnText, color: working ? "white" : theme.grey }}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{ ...styles.btnText, color: !working ? "white" : theme.grey }}>Travel</Text>
        </TouchableOpacity>
      </View>
      <TextInput 
        onSubmitEditing={addTodo}
        onChangeText={onChangeText}
        returnKeyType='done'
        value={text}
        placeholder={working ? "Add a To Do"  : "Where do you want to go?"}
        style={styles.input} 
      />
      <ScrollView>
        {Object.keys(toDos).map((key) => (
          toDos[key].working === working ? (
          <View key={key} style={styles.toDo}>
            <Text style={styles.toDoText}>{toDos[key].text}</Text>
            <TouchableOpacity onPress={() => deleteToDo(key)}>
              <Fontisto name="trash" size={18} color="white" />
            </TouchableOpacity>
          </View>
          ) : null
        ))}
      </ScrollView>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20
  },
  header : {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18 
  },
  toDo: {
    backgroundColor: theme.ToDoBg,
    marginBottom : 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"

  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500"
  }
});
