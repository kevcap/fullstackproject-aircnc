import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, AsyncStorage, View, Text, TouchableOpacity } from 'react-native'

export default function Book({ navigation }) {
  const [date, setDate ] = useState('');
  const id = navigation.getParam('id');

  function handleSubmit() {

  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}> DATE OF INTEREST *</Text>
      <TextInput
      style={styles.input}
      placeholder='Date you want to book'
      placeholderTextColor= '#999'
      autoCapitalize="words"
      autoCorrect={false}
      value={date}
      onChangeText={setDate}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Book</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSubmit} style={[styles.cancelButton, styles.button]}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create( {
  container: {
    margin: 30,
    
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 50,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: 44,
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },

  button:{
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  cancelButton:{
    backgroundColor: '#ccc',
    marginTop: 10
  },

  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
})