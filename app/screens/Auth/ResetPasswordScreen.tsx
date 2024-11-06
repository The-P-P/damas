import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recuperar Senha!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="*Crie uma nova senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="*Confirme sua senha"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Text style={styles.passwordRequirements}>
        *Sua nova senha deve conter:
      </Text>
      <Text style={styles.passwordRequirement}>• De 8 a 15 caracteres;</Text>
      <Text style={styles.passwordRequirement}>• Pelo menos 1 letra maiúscula;</Text>
      <Text style={styles.passwordRequirement}>• Pelo menos 1 letra minúscula;</Text>
      <Text style={styles.passwordRequirement}>• Pelo menos 1 número;</Text>
      <Text style={styles.passwordRequirement}>• Pelo menos 1 símbolo/caractere especial;</Text>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Ir para login</Text>
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
  passwordRequirements: {
    fontSize: 12,
    color: '#FF6347', // Vermelho para o texto informativo
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  passwordRequirement: {
    fontSize: 12,
    color: '#FF6347', // Vermelho para cada requisito de senha
    alignSelf: 'flex-start',
  },
  submitButton: {
    backgroundColor: '#00008B', // Azul escuro para o botão
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ResetPasswordScreen;
