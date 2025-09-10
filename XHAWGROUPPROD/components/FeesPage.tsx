import { ScrollView, View, Text, TextInput } from "react-native";
import { styles } from "../styles/Styles";

function calculateTotal() {
    // TODO: Implement actual calculation logic
    return 0;
}

const FeesPage: React.FC = () => {
    const totals = calculateTotal();
    
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.pageContainer}>
        <Text style={styles.pageTitle}>Fees</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contact Details:</Text>
          
          <TextInput 
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#999"
          />
          <TextInput 
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
            <TextInput 
              style={styles.input}
              placeholder="Enter your phone"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
          </View>
                </ScrollView>
            );
        };

export default FeesPage;