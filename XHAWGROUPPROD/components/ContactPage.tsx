import { ScrollView, View, Text } from "react-native";
import { styles } from "../styles/Styles";

const ContactPage: React.FC = () => (
    <ScrollView style={styles.container} contentContainerStyle={styles.pageContainer}>
      <Text style={styles.pageTitle}>Contact Details</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contact Information:</Text>
        
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Email Address:</Text>
          <Text style={styles.contactValue}>info@empoweringthenation.co.za</Text>
        </View>
        
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Phone Number:</Text>
          <Text style={styles.contactValue}>+27 11 123 4567</Text>
        </View>
        
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Physical Address:</Text>
          <Text style={styles.contactValue}>Bonifay Court, 296, Pendoring Road</Text>
          <Text style={styles.contactValue}>13, Duthie Street</Text>
          <Text style={styles.contactValue}>10, Angus Crescent</Text>
        </View>
        
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>Google Maps Overview</Text>
          <Text style={styles.mapSubText}>[Map would be integrated here]</Text>
        </View>
      </View>
    </ScrollView>
  );

export default ContactPage;