import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

// Get device width and height
const { width, height } = Dimensions.get('window');

const CustomTextInputField = ({ label, type, ...props }) => {
  const [date, setDate] = useState(new Date());
  const [dob, setDob] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Handle date change
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    
    setShowDatePicker(Platform.OS === 'ios'); // Keep open on iOS, close on Android
    setDate(currentDate);
    
    if (selectedDate) {
      setDob(currentDate.toLocaleDateString());
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>

      {type === 'dob' ? (
        <>
          <TouchableOpacity 
            onPress={() => setShowDatePicker(true)} 
            style={styles.input}
          >
            <Text style={[styles.dobText, dob ? styles.selectedDate : null]}>
              {dob || 'Select Date'}
            </Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleDateChange}
              maximumDate={new Date()}
            />
          )}
        </>
      ) : (
        <TextInput 
          style={styles.input}
          placeholderTextColor="#999"
          {...props}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: height * 0.02,
  },
  inputLabel: {
    marginBottom: 5,
    paddingHorizontal: 5,
    fontSize: width * 0.04,
  },
  input: {
    backgroundColor: 'white',
    padding: height * 0.015,
    borderRadius: 17,
    fontSize: width * 0.04,
    justifyContent: 'center',
  },
  dobText: {
    color: '#999',
  },
  selectedDate: {
    color: '#000', // Change text color when date is selected
  },
});

export default CustomTextInputField;