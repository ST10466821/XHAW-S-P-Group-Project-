import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import styles from "../styles/Styles";

// Dummy courseData and setCurrentPage for demonstration; replace with your actual data and handler
const courseData = {
  "6weeks": {
    title: "6 Week Course",
    description: "Short-term intensive course.",
    features: ["Feature 1", "Feature 2"],
    price: "$299"
  },
  "6months": {
    title: "6 Month Course",
    description: "Long-term comprehensive course.",
    features: ["Feature A", "Feature B"],
    price: "$999"
  }
};

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'6weeks' | '6months'>('6weeks');
  const setCurrentPage = (page: string) => {
    // Implement navigation logic here
    console.log("Navigate to:", page);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.pageContainer}>
      <Text style={styles.pageTitle}>Empowering The Nation</Text>
      
      <View style={styles.card}>
        <Text style={styles.centerText}>
          Empowering individuals through quality education and skills development.
          {'\n'}
          Building careers, transforming lives, strengthening communities.
        </Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === '6weeks' && styles.tabButtonActive]}
          onPress={() => setActiveTab('6weeks')}
        >
          <Text style={[styles.tabButtonText, activeTab === '6weeks' && styles.tabButtonTextActive]}>6 Week Course</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === '6months' && styles.tabButtonActive]}
          onPress={() => setActiveTab('6months')}
        >
          <Text style={[styles.tabButtonText, activeTab === '6months' && styles.tabButtonTextActive]}>6 Month Course</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{courseData[activeTab].title}</Text>
        
        <Text style={styles.cardText}>{courseData[activeTab].description}</Text>

        <Text style={styles.featuresTitle}>What's included:</Text>
        {courseData[activeTab].features.map((feature, index) => (
          <Text key={index} style={styles.featureText}>• {feature}</Text>
        ))}

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{courseData[activeTab].price}</Text>
          <TouchableOpacity 
            style={styles.viewCoursesButton}
            onPress={() => setCurrentPage(activeTab === '6weeks' ? 'six-weeks' : 'six-months')}
          >
            <Text style={styles.buttonText}>View Courses</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};