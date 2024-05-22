import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { RentedBooksContext } from "../RentedBooksContext";

const History = () => {
  const { history } = useContext(RentedBooksContext);

  const calculateAmount = (rentalTimestamp, returnTimestamp, rentalDuration, finePerDay) => {
    const rentalDate = new Date(rentalTimestamp);
    const returnDate = new Date(returnTimestamp);
    const differenceInDays = Math.ceil((returnDate - rentalDate) / (1000 * 60 * 60 * 24));
    const daysLate = Math.max(differenceInDays - rentalDuration, 0);
    const fine = daysLate * finePerDay;
    const amount = fine > 0 ? fine : 0;
    return amount;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rental History</Text>
      {history.length === 0 ? (
        <Text style={styles.emptyMessage}>No rental history</Text>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Image source={{ uri: item.link }} style={styles.bookImage} />
              <View style={styles.bookDetails}>
                <Text style={styles.bookTitle}>{item.name}</Text>
                <Text style={styles.bookAuthor}>by {item.author}</Text>
                <Text style={styles.rentalTimestamp}>Rented at: {item.timestamp}</Text>
                <Text style={styles.returnTimestamp}>Returned at: {item.returnTimestamp}</Text>
                <Text style={styles.rentalDuration}>Rental Duration: {item.rentalDuration} days</Text>
                <Text style={styles.amount}>
                  Amount: {calculateAmount(item.timestamp, item.returnTimestamp, item.rentalDuration, item.finePerDay)}
                </Text>
              </View>
            </View>
          )}
          contentContainerStyle={styles.flatListContent}
        />
      )}
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
  historyItem: {
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
  rentalTimestamp: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  returnTimestamp: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  rentalDuration: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  amount: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
});

export default History;
