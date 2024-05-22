import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Modal, Button } from "react-native";
import { RentedBooksContext } from "../RentedBooksContext";

const Rentbooks = () => {
  const { rentedBooks, removeRentedBook, addHistory } = useContext(RentedBooksContext);
  const [booksData, setBooksData] = useState([]);
  const [deleteConfirmationModalVisible, setDeleteConfirmationModalVisible] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  useEffect(() => {
    const updatedBooksData = rentedBooks.map((book) => {
      const daysRemaining = book.rentalDuration;
      return { ...book, daysRemaining };
    });
    setBooksData(updatedBooksData);
  }, [rentedBooks]);

  const handleDelete = () => {
    const deletedBook = booksData[deleteIndex];
    addHistory(deletedBook);
    removeRentedBook(deleteIndex);
    setDeleteConfirmationModalVisible(false);
  };

  const toggleModal = (index) => {
    setDeleteIndex(index);
    setDeleteConfirmationModalVisible(!deleteConfirmationModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rented Books</Text>
      {booksData.length === 0 ? (
        <Text style={styles.emptyMessage}>No currently rented books</Text>
      ) : (
        <FlatList
          data={booksData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.bookItem}>
              <Image source={{ uri: item.link }} style={styles.bookImage} />
              <View style={styles.bookDetails}>
                <Text style={styles.bookTitle}>{item.name}</Text>
                <Text style={styles.bookAuthor}>by {item.author}</Text>
                <Text style={styles.bookTimestamp}>Rented at: {item.timestamp}</Text>
                <Text style={styles.bookDuration}>Days Remaining: {item.daysRemaining}</Text>
                <TouchableOpacity onPress={() => toggleModal(index)} style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>Return</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={styles.flatListContent}
        />
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteConfirmationModalVisible}
        onRequestClose={() => setDeleteConfirmationModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Are you sure you want to return this rented book?</Text>
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => toggleModal(null)} />
              <View style={{ marginLeft: 10 }}>
                <Button title="Return" onPress={handleDelete} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  emptyMessage: {
    fontSize: 18,
    textAlign: "center",
  },
  flatListContent: {
    paddingBottom: 20,
  },
  bookItem: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
  bookImage: {
    width: 100,
    height: 150,
    marginRight: 20,
    borderRadius: 5,
  },
  bookDetails: {
    flex: 1,
    justifyContent: "center",
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bookAuthor: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  bookTimestamp: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  bookDuration: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  deleteButtonText: {
    color: "white",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default Rentbooks;
