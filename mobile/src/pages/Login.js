import React from 'react';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

export default function Login() {
  return (
  <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <Image source={logo} />

    <View style={styles.form}>
      <Text style={styles.label}> YOUR E-MAIL *</Text>
      <TextInput
      style={styles.input}
      placeholder='Your email'
      placeholderTextColor= '#999'
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      />

      <Text style={styles.label}> TECHS *</Text>
      <TextInput
      style={styles.input}
      placeholder='Techs of interest'
      placeholderTextColor= '#999'
      autoCapitalize="words"
      autoCorrect={false}
      />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Find spots</Text>
      </TouchableOpacity>
    </View>
  </ KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  form:{
    alignSelf:'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
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

  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
})  