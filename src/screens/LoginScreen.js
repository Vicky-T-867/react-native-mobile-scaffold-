import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { sanitizeInputText } from '../utils/validators';

export default function LoginScreen({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = () => {
    const cleanEmail = sanitizeInputText(email);

    if (!cleanEmail || !password) {
      Alert.alert('Missing info', 'Fill in email and password first.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Weak password', 'Use at least 6 characters.');
      return;
    }

    // auth not hooked up yet; continue for now
    onLoginSuccess();
  };

  return (
    <View style={styles.container}>
      <View style={styles.brandCircle} />

      <View style={styles.header}>
        <Text style={styles.title}>{isSignUp ? 'Create account' : 'Welcome back'}</Text>
        <Text style={styles.subtitle}>
          {isSignUp
            ? 'Sign up to start logging entries.'
            : 'Sign in to pick up where you left off.'}
        </Text>
      </View>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#64748b"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#64748b"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{isSignUp ? 'Create account' : 'Sign in'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.toggle} onPress={() => setIsSignUp(!isSignUp)}>
        <Text style={styles.toggleText}>
          {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0f19',
    justifyContent: 'center',
    padding: 24,
  },
  brandCircle: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#4f46e5',
    opacity: 0.15,
  },
  header: { marginBottom: 32 },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#f8fafc',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitle: { fontSize: 15, color: '#94a3b8', lineHeight: 22 },
  card: {
    backgroundColor: '#1e293b',
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 5,
  },
  input: {
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6366f1',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  toggle: { marginTop: 32, alignItems: 'center' },
  toggleText: { color: '#818cf8', fontSize: 14, fontWeight: '500' },
});
