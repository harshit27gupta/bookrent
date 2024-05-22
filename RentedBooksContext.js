import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RentedBooksContext = createContext();

export const RentedBooksProvider = ({ children }) => {
  const [rentedBooks, setRentedBooks] = useState([]);
  const [history, setHistory] = useState([]);

  // Load rented books and history from AsyncStorage
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedRentedBooks = await AsyncStorage.getItem('rentedBooks');
        const storedHistory = await AsyncStorage.getItem('rentalHistory');

        if (storedRentedBooks) {
          setRentedBooks(JSON.parse(storedRentedBooks));
        }

        if (storedHistory) {
          setHistory(JSON.parse(storedHistory));
        }
      } catch (error) {
        console.error('Failed to load data from storage', error);
      }
    };

    loadData();
  }, []);

  // Save rented books to AsyncStorage
  const saveRentedBooks = async (updatedRentedBooks) => {
    try {
      await AsyncStorage.setItem('rentedBooks', JSON.stringify(updatedRentedBooks));
    } catch (error) {
      console.error('Failed to save rented books to storage', error);
    }
  };

  // Save history to AsyncStorage
  const saveHistory = async (updatedHistory) => {
    try {
      await AsyncStorage.setItem('rentalHistory', JSON.stringify(updatedHistory));
    } catch (error) {
      console.error('Failed to save history to storage', error);
    }
  };

  const addRentedBook = (book) => {
    const timestampedBook = { ...book, timestamp: new Date().toLocaleString() };
    const updatedRentedBooks = [...rentedBooks, timestampedBook];
    setRentedBooks(updatedRentedBooks);
    saveRentedBooks(updatedRentedBooks);
  };

  const removeRentedBook = (index) => {
    const updatedBooks = [...rentedBooks];
    const deletedBook = updatedBooks.splice(index, 1)[0];
    deletedBook.returnTimestamp = new Date().toLocaleString(); // Add return timestamp
    setRentedBooks(updatedBooks);
    setHistory([...history, deletedBook]);
    saveRentedBooks(updatedBooks);
    saveHistory([...history, deletedBook]);
  };

  const addHistory = (entry) => {
    const updatedHistory = [...history, entry];
    setHistory(updatedHistory);
    saveHistory(updatedHistory);
  };

  return (
    <RentedBooksContext.Provider value={{ rentedBooks, addRentedBook, removeRentedBook, history, addHistory }}>
      {children}
    </RentedBooksContext.Provider>
  );
};
