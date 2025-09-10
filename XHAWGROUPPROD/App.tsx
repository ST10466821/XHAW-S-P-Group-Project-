import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import SignInPage from './components/SignInPage';

type PageType = 'home' | 'six-weeks' | 'six-months' | 'contact' | 'fees' | 'sign-in' | 'create-account';

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
}

interface SelectedCourse {
  course: Course;
  quantity: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [activeTab, setActiveTab] = useState<'6weeks' | '6months'>('6weeks');
  const [selectedCourses, setSelectedCourses] = useState<SelectedCourse[]>([]);
  const [discount, setDiscount] = useState<number>(0);

  const sixWeekCourses: Course[] = [
    {
      id: '1',
      title: 'Child Minding',
      description: 'Learn essential childcare skills and safety protocols for professional child minding.',
      price: 750,
      duration: '6 weeks'
    },
    {
      id: '2',
      title: 'Cooking',
      description: 'Master fundamental cooking techniques and kitchen safety for home and commercial use.',
      price: 750,
      duration: '6 weeks'
    },
    {
      id: '3',
      title: 'Garden Maintenance',
      description: 'Develop skills in garden care, plant maintenance, and landscape upkeep.',
      price: 750,
      duration: '6 weeks'
    }
  ];

  const sixMonthCourses: Course[] = [
    {
      id: '4',
      title: 'First Aid',
      description: 'Comprehensive first aid training with certification for emergency response and medical assistance.',
      price: 1500,
      duration: '6 months'
    },
    {
      id: '5',
      title: 'Sewing',
      description: 'Advanced sewing techniques from basic repairs to professional garment construction.',
      price: 1500,
      duration: '6 months'
    },
    {
      id: '6',
      title: 'Landscaping',
      description: 'Professional landscaping design, implementation, and maintenance for commercial and residential projects.',
      price: 1500,
      duration: '6 months'
    },
    {
      id: '7',
      title: 'Life Skills',
      description: 'Essential life skills including financial management, communication, and personal development.',
      price: 1500,
      duration: '6 months'
    }
  ];

  const allCourses = [...sixWeekCourses, ...sixMonthCourses];

  const courseData = {
    '6weeks': {
      title: '6 Week Intensive Course',
      description: 'Fast-track your skills with our comprehensive 6-week program designed for rapid learning and immediate results.',
      features: [
        'Daily interactive sessions',
        'Hands-on projects',
        'Personal mentorship',
        'Certificate of completion'
      ],
      price: 'R750'
    },
    '6months': {
      title: '6 Month Comprehensive Course',
      description: 'Deep dive into advanced concepts with our extensive 6-month program for thorough mastery and expertise.',
      features: [
        'Weekly structured lessons',
        'Advanced project portfolio',
        'Industry networking opportunities',
        'Job placement assistance',
        'Professional certification'
      ],
      price: 'R1500'
    }
  };

  const addCourseToSelection = (course: Course) => {
    setSelectedCourses(prev => {
      const existing = prev.find(item => item.course.id === course.id);
      if (existing) {
        return prev.map(item => 
          item.course.id === course.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { course, quantity: 1 }];
      }
    });
  };

  const updateCourseQuantity = (courseId: string, quantity: number) => {
    if (quantity <= 0) {
      setSelectedCourses(prev => prev.filter(item => item.course.id !== courseId));
    } else {
      setSelectedCourses(prev => 
        prev.map(item => 
          item.course.id === courseId 
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const calculateTotal = () => {
    const subtotal = selectedCourses.reduce((sum, item) => sum + (item.course.price * item.quantity), 0);
    const discountAmount = (subtotal * discount) / 100;
    const vatAmount = (subtotal - discountAmount) * 0.15;
    return {
      subtotal,
      discountAmount,
      vatAmount,
      total: subtotal - discountAmount + vatAmount
    };
  };

  const NavigationBar: React.FC = () => (
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

  const HomePage: React.FC = () => (
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

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Available Courses</Text>
          {allCourses.map((course) => (
            <View key={course.id} style={styles.courseItem}>
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseDetails}>{course.duration} • R{course.price}</Text>
              </View>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addCourseToSelection(course)}
              >
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {selectedCourses.length > 0 && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Selected Courses</Text>
            
            {selectedCourses.map((item) => (
              <View key={item.course.id} style={styles.selectedCourseItem}>
                <View style={styles.selectedCourseInfo}>
                  <Text style={styles.selectedCourseTitle}>{item.course.title}</Text>
                  <Text style={styles.selectedCoursePrice}>R{item.course.price}</Text>
                </View>
                <View style={styles.quantityControls}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => updateCourseQuantity(item.course.id, item.quantity - 1)}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => updateCourseQuantity(item.course.id, item.quantity + 1)}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}

            <View style={styles.totalsContainer}>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Quantity:</Text>
                <Text style={styles.totalValue}>{selectedCourses.reduce((sum, item) => sum + item.quantity, 0)}</Text>
              </View>
              
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Discount (%):</Text>
                <TextInput
                  style={styles.discountInput}
                  value={discount.toString()}
                  onChangeText={(text) => setDiscount(Math.max(0, Math.min(15, Number(text) || 0)))}
                  keyboardType="numeric"
                  placeholder="0"
                />
              </View>
              
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Subtotal:</Text>
                <Text style={styles.totalValue}>R{totals.subtotal.toFixed(2)}</Text>
              </View>
              
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Discount:</Text>
                <Text style={styles.totalValue}>-R{totals.discountAmount.toFixed(2)}</Text>
              </View>
              
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>VAT (15%):</Text>
                <Text style={styles.totalValue}>R{totals.vatAmount.toFixed(2)}</Text>
              </View>
              
              <View style={[styles.totalRow, styles.finalTotalRow]}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalValue}>R{totals.total.toFixed(2)}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.paymentButton}>
              <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    );
  };

  

  const CreateAccountPage: React.FC = () => (
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

  const SixWeekCoursesPage: React.FC = () => (
    <ScrollView style={styles.container} contentContainerStyle={styles.pageContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setCurrentPage('home')}
      >
        <Text style={styles.buttonText}>← Back to Home</Text>
      </TouchableOpacity>
      
      <Text style={styles.pageTitle}>Six Week Courses</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Six Week Course Summary:</Text>
        <Text style={styles.cardText}>
          Empowering the Nation offers the following six-week short courses designed to provide essential skills for immediate employment opportunities and personal development.
        </Text>
        
        {sixWeekCourses.map((course) => (
          <View key={course.id} style={styles.courseItem}>
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>
              <Text style={styles.courseDetails}>{course.duration} • R{course.price}</Text>
            </View>
            <TouchableOpacity 
              style={styles.enrollButton}
              onPress={() => addCourseToSelection(course)}
            >
              <Text style={styles.buttonText}>Enroll</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => setCurrentPage('six-months')}
      >
        <Text style={styles.secondaryButtonText}>View 6 Month Courses</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  const SixMonthCoursesPage: React.FC = () => (
    <ScrollView style={styles.container} contentContainerStyle={styles.pageContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setCurrentPage('home')}
      >
        <Text style={styles.buttonText}>← Back to Home</Text>
      </TouchableOpacity>
      
      <Text style={styles.pageTitle}>Six Month Courses</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Six Month Course Summary:</Text>
        <Text style={styles.cardText}>
          Empowering the Nation offers the following six-month comprehensive courses designed for advanced skills and professional development.
        </Text>
        
        {sixMonthCourses.map((course) => (
          <View key={course.id} style={styles.courseItem}>
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>
              <Text style={styles.courseDetails}>{course.duration} • R{course.price}</Text>
            </View>
            <TouchableOpacity 
              style={styles.enrollButton}
              onPress={() => addCourseToSelection(course)}
            >
              <Text style={styles.buttonText}>Enroll</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => setCurrentPage('six-weeks')}
      >
        <Text style={styles.secondaryButtonText}>View 6 Week Courses</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'six-weeks': return <SixWeekCoursesPage />;
      case 'six-months': return <SixMonthCoursesPage />;
      case 'contact': return <ContactPage />;
      case 'fees': return <FeesPage />;
      case 'sign-in': return <SignInPage setCurrentPage={(page: string) => setCurrentPage(page as PageType)} />;
      case 'create-account': return <CreateAccountPage />;
      default: return <HomePage />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentArea}>
        {renderCurrentPage()}
      </View>
      <NavigationBar />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2937',
  },
  contentArea: {
    flex: 1,
  },
  pageContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  navigation: {
    backgroundColor: '#374151',
    borderTopWidth: 1,
    borderTopColor: '#4b5563',
    paddingVertical: 10,
  },
  navigationContent: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  navButton: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginHorizontal: 2,
    borderRadius: 8,
  },
  navButtonActive: {
    backgroundColor: '#4b5563',
  },
  navButtonText: {
    color: '#d1d5db',
    fontSize: 13,
    fontWeight: '500',
  },
  navButtonTextActive: {
    color: '#ffffff',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '300',
    color: '#9ca3af',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#4b5563',
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 12,
  },
  centerText: {
    fontSize: 14,
    color: '#1f2937',
    textAlign: 'center',
    lineHeight: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  tabButton: {
    flex: 1,
    backgroundColor: '#4b5563',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#6b7280',
  },
  tabButtonText: {
    color: '#1f2937',
    fontSize: 14,
    fontWeight: '500',
  },
  tabButtonTextActive: {
    color: '#ffffff',
  },
  featuresTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 8,
    marginTop: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#6b7280',
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  viewCoursesButton: {
    backgroundColor: '#374151',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  contactItem: {
    marginBottom: 16,
  },
  contactLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 14,
    color: '#374151',
  },
  mapPlaceholder: {
    backgroundColor: '#6b7280',
    padding: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    minHeight: 200,
  },
  mapText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    textAlign: 'center',
  },
  mapSubText: {
    fontSize: 12,
    color: '#374151',
    textAlign: 'center',
    marginTop: 8,
  },
  input: {
    backgroundColor: '#6b7280',
    borderWidth: 1,
    borderColor: '#9ca3af',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
    color: '#1f2937',
  },
  courseItem: {
    backgroundColor: '#6b7280',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseInfo: {
    flex: 1,
    marginRight: 12,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  courseDescription: {
    fontSize: 12,
    color: '#374151',
    marginBottom: 4,
  },
  courseDetails: {
    fontSize: 12,
    color: '#374151',
  },
  addButton: {
    backgroundColor: '#374151',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  enrollButton: {
    backgroundColor: '#374151',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  selectedCourseItem: {
    backgroundColor: '#6b7280',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedCourseInfo: {
    flex: 1,
  },
  selectedCourseTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  selectedCoursePrice: {
    fontSize: 14,
    color: '#374151',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 32,
    height: 32,
    backgroundColor: '#374151',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 16,
    color: '#1f2937',
    minWidth: 24,
    textAlign: 'center',
  },
  totalsContainer: {
    backgroundColor: '#6b7280',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 14,
    color: '#1f2937',
    fontWeight: '500',
  },
  totalValue: {
    fontSize: 14,
    color: '#1f2937',
  },
  discountInput: {
    backgroundColor: '#9ca3af',
    borderRadius: 4,
    padding: 8,
    fontSize: 14,
    color: '#1f2937',
    minWidth: 60,
    textAlign: 'center',
  },
  finalTotalRow: {
    borderTopWidth: 1,
    borderTopColor: '#9ca3af',
  },
  linkText: {
    color: '#2563eb',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 12,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  secondaryButton: {
    backgroundColor: '#374151',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 8,
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  paymentButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  paymentButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  backButton: {
    backgroundColor: '#374151',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 8,
  }
}); 