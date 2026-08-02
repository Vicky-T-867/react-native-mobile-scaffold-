import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ onLogout, onGoBack }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Account details for this session.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Account</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Status</Text>
          <Text style={styles.value}>Verified</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Connection</Text>
          <Text style={styles.value}>Encrypted</Text>
        </View>

        <View style={styles.rowLast}>
          <Text style={styles.label}>Version</Text>
          <Text style={styles.value}>v1.0.0</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.backBtn} onPress={onGoBack}>
        <Text style={styles.backText}>Back to dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
        <Text style={styles.logoutText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0f19',
    paddingTop: 80,
    paddingHorizontal: 24,
  },
  header: { marginBottom: 32 },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#f8fafc',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subtitle: { fontSize: 14, color: '#64748b', lineHeight: 20 },
  card: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 16,
    marginBottom: 32,
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#818cf8',
    textTransform: 'uppercase',
    marginBottom: 16,
    letterSpacing: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  rowLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
  },
  label: { color: '#94a3b8', fontSize: 15 },
  value: { color: '#f8fafc', fontSize: 15, fontWeight: '500' },
  backBtn: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  backText: { color: '#f8fafc', fontSize: 16, fontWeight: '600' },
  logoutBtn: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: { color: '#ef4444', fontSize: 16, fontWeight: '600' },
});
