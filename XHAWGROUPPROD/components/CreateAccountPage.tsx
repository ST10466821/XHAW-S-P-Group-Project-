import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles'; // Update the path as needed
export default function CreateAccountPage (){

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.pageContainer}>
            <Text style={styles.pageTitle}>Create Account</Text>
        
        <View style={styles.card}>
            <TextInput 
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#999"
            />
            <TextInput 
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            />
            <TextInput 
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            />
            <TextInput 
            style={styles.input}
            placeholder="Create a password"
            placeholderTextColor="#999"
            secureTextEntry
            />
            <TextInput 
            style={styles.input}
            placeholder="Confirm your password"
            placeholderTextColor="#999"
            secureTextEntry
            />
            <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentPage('sign-in')}>
            <Text style={styles.linkText}>Already have an account? Sign in</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}