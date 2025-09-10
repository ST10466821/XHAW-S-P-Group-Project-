import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles/Styles'; // Update the path as needed

export default function SignInPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
    return (
    <ScrollView style={styles.container} contentContainerStyle={styles.pageContainer}>
      <Text style={styles.pageTitle}>Sign In</Text>
      
      <View style={styles.card}>
        <TextInput 
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput 
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry
        />
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentPage('create-account')}>
          <Text style={styles.linkText}>Don't have an account? Create one</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    );
}