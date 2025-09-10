import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import { styles as sharedStyles } from '../styles';

const styles = 

StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2937',
  },
  pageContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  navigation: {
    backgroundColor: '#374151',
    borderBottomWidth: 1,
    borderBottomColor: '#4b5563',
    paddingVertical: 8,
  },
  navigationContent: {
    paddingHorizontal: 16,
  },
  navButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  navButtonActive: {
    backgroundColor: '#4b5563',
  },
  navButtonText: {
    color: '#d1d5db',
    fontSize: 14,
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
})

export {styles};
