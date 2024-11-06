import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VerificationCodeScreen = () => {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recuperar Senha!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="* Código de Verificação"
        keyboardType="numeric"
        value={code}
        onChangeText={setCode}
      />

      <Text style={styles.infoText}>Verifique sua caixa de entrada do email</Text>

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Nova Senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f54', // Fundo azul escuro
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  infoText: {
    fontSize: 14,
    color: '#FF6347', // Vermelho para o texto informativo
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#00008B', // Azul escuro para o botão
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default VerificationCodeScreen;
