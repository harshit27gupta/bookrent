import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Alert,
} from 'react-native';
import { RentedBooksContext } from '../RentedBooksContext';

const RentDetails = ({ route, navigation }) => {
  const { book } = route.params;
  const [rentalDuration, setRentalDuration] = useState('');
  const [loading, setLoading] = useState(false);
  const { addRentedBook } = useContext(RentedBooksContext);

  const finePerDay = 'Fine: ₹50 per day';
  const maxRentableDays = 90;

  const handleRentBook = async () => {
    if (!rentalDuration) {
      alert('Please fill in all fields');
      return;
    }
    if (parseInt(rentalDuration) <= 0) {
      alert('Rental duration must be greater than 0');
      return;
    }
    if (parseInt(rentalDuration) > maxRentableDays) {
      alert('Maximum rental duration exceeded');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      addRentedBook({ ...book, rentalDuration });
      Alert.alert('Success', 'Book rented successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('Home') },
      ]);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rent Details</Text>
      <Image source={{ uri: book.link }} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{book.name}</Text>
      <Text style={styles.bookAuthor}>by {book.author}</Text>
      <TextInput
        style={styles.input}
        placeholder="Rental Duration (in days)"
        keyboardType="numeric"
        value={rentalDuration}
        onChangeText={setRentalDuration}
      />
      <Text style={styles.maxRentableDays}>Max Rentable Days: {maxRentableDays}</Text>
      <Text style={styles.fineNote}>{finePerDay}</Text>
      <TouchableOpacity style={styles.rentButton} onPress={handleRentBook}>
        <Text style={styles.rentButtonText}>Rent Book</Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator size="large" color="#007bff" style={styles.loader} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookImage: {
    width: 150,
    height: 200,
    marginBottom: 20,
    borderRadius: 5,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookAuthor: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  maxRentableDays: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  fineNote: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  rentButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  rentButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 20,
  },
});

export default RentDetails;
