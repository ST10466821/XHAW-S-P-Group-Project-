import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  navigationContent: {
    alignItems: 'center',
  },
  navButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 4,
    backgroundColor: '#eee',
  },
  navButtonActive: {
    backgroundColor: '#007bff',
  },
  navButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  navButtonTextActive: {
    color: '#fff',
  },
});

import React, { useState } from 'react';

const NavigationBar: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  return (
    <View style={styles.navigation}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navigationContent}>
        <TouchableOpacity
          style={[styles.navButton, currentPage === 'home' && styles.navButtonActive]}
          onPress={() => setCurrentPage('home')}
        >
          <Text style={[styles.navButtonText, currentPage === 'home' && styles.navButtonTextActive]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.navButton, (currentPage === 'six-weeks' || currentPage === 'six-months') && styles.navButtonActive]}
          onPress={() => setCurrentPage('six-weeks')}
        >
          <Text style={[styles.navButtonText, (currentPage === 'six-weeks' || currentPage === 'six-months') && styles.navButtonTextActive]}>Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, currentPage === 'contact' && styles.navButtonActive]}
          onPress={() => setCurrentPage('contact')}
        >
          <Text style={[styles.navButtonText, currentPage === 'contact' && styles.navButtonTextActive]}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, currentPage === 'fees' && styles.navButtonActive]}
          onPress={() => setCurrentPage('fees')}
        >
          <Text style={[styles.navButtonText, currentPage === 'fees' && styles.navButtonTextActive]}>Fees</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, currentPage === 'sign-in' && styles.navButtonActive]}
          onPress={() => setCurrentPage('sign-in')}
        >
          <Text style={[styles.navButtonText, currentPage === 'sign-in' && styles.navButtonTextActive]}>Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.navButton, currentPage === 'create-account' && styles.navButtonActive]}
          onPress={() => setCurrentPage('create-account')}
        >
          <Text style={[styles.navButtonText, currentPage === 'create-account' && styles.navButtonTextActive]}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
