import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';

export default function App() {
  const handleOpenServerApp = () => {
    fetch('http://tu-servidor:8080/open-app', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a SAQR</Text>
      <TouchableOpacity style={styles.button} onPress={handleOpenServerApp}>
        <Text style={styles.buttonText}>Genere su QR para su Mercancia</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


