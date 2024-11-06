import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SignUpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Crie sua conta!</Text>
      
      <TextInput style={styles.input} placeholder="*Nome completo" />
      <TextInput style={styles.input} placeholder="*Data de Nascimento" />
      <TextInput style={styles.input} placeholder="*E-mail" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="*Telefone" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="*CPF" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="*Cidade Natal" />
      <TextInput style={styles.input} placeholder="*Cidade de Residência" />
      
      <TextInput
        style={styles.input}
        placeholder="*Crie uma senha"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="*Confirme sua senha"
        secureTextEntry
      />

      <Text style={styles.passwordRequirements}>
        *Sua nova senha deve conter:
      </Text>
      <Text style={styles.passwordRequirement}>• De 8 a 15 caracteres;</Text>
      <Text style={styles.passwordRequirement}>• Pelo menos 1 letra maiúscula;</Text>
      <Text style={styles.passwordRequirement}>• Pelo menos 1 letra minúscula;</Text>
      <Text style={styles.passwordRequirement}>• Pelo menos 1 número;</Text>
      <Text style={styles.passwordRequirement}>• Pelo menos 1 símbolo/caractere especial;</Text>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    marginBottom: 15,
    width: '100%',
  },
  passwordRequirements: {
    fontSize: 12,
    color: '#FFFFFF',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  passwordRequirement: {
    fontSize: 12,
    color: '#FF6347', // Cor vermelha para os requisitos da senha
    alignSelf: 'flex-start',
  },
  registerButton: {
    backgroundColor: '#00008B', // Azul escuro para o botão
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
