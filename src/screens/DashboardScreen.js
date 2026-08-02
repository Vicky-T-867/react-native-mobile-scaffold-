import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { sanitizeInputText, validateNumericRange } from '../utils/validators';

export default function DashboardScreen({ onNavigateToProfile }) {
  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');
  const [entries, setEntries] = useState([]);

  const addEntry = () => {
    const cleanLabel = sanitizeInputText(label);
    const ok = validateNumericRange(value, 0, 10000);

    if (!cleanLabel) {
      Alert.alert('Missing label', 'Add a short description first.');
      return;
    }
    if (!ok) {
      Alert.alert('Bad value', 'Enter a number between 0 and 10,000.');
      return;
    }

    const entry = {
      id: Math.random().toString(36).slice(2, 9),
      title: cleanLabel,
      amount: parseFloat(value),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setEntries((prev) => [entry, ...prev]);
    setLabel('');
    setValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.title}>Workspace</Text>
          <Text style={styles.subtitle}>Your logged entries</Text>
        </View>
        <TouchableOpacity style={styles.settingsBtn} onPress={onNavigateToProfile}>
          <Text style={styles.settingsText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#64748b"
          value={label}
          onChangeText={setLabel}
        />
        <TextInput
          style={styles.input}
          placeholder="Value (0 - 10,000)"
          placeholderTextColor="#64748b"
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
        />
        <TouchableOpacity style={styles.submit} onPress={addEntry}>
          <Text style={styles.submitText}>Add entry</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionLabel}>Recent</Text>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const isHigh = item.amount > 500;
          return (
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                <Text style={styles.rowTime}>{item.time}</Text>
              </View>
              <View style={[styles.badge, isHigh ? styles.badgeHigh : styles.badgeOk]}>
                <Text style={[styles.amount, isHigh ? styles.amountHigh : styles.amountOk]}>
                  {item.amount.toLocaleString()}
                </Text>
              </View>
            </View>
          );
        }}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Nothing logged yet.</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0f19',
    paddingTop: 64,
    paddingHorizontal: 24,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#f8fafc',
    letterSpacing: -0.5,
  },
  subtitle: { fontSize: 14, color: '#64748b', marginTop: 2 },
  settingsBtn: {
    backgroundColor: '#1e293b',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  settingsText: { color: '#cbd5e1', fontSize: 14, fontWeight: '600' },
  form: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 16,
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 15,
  },
  submit: {
    backgroundColor: '#6366f1',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
    marginBottom: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  row: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowLeft: { flex: 1, paddingRight: 16 },
  rowTitle: { color: '#f8fafc', fontSize: 16, fontWeight: '600', marginBottom: 4 },
  rowTime: { color: '#64748b', fontSize: 13 },
  badge: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8 },
  badgeOk: { backgroundColor: 'rgba(16, 185, 129, 0.1)' },
  badgeHigh: { backgroundColor: 'rgba(239, 68, 68, 0.1)' },
  amount: { fontSize: 15, fontWeight: '700' },
  amountOk: { color: '#10b981' },
  amountHigh: { color: '#ef4444' },
  empty: { alignItems: 'center', marginTop: 40 },
  emptyText: { color: '#475569', fontSize: 14, fontStyle: 'italic' },
});
