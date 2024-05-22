import React from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Animated, Easing } from "react-native";

const Popular = ({ route }) => {
  const { Topauthors } = route.params;

  // Render item for FlatList
  const renderItem = ({ item }) => (
    <View style={styles.bookContainer}>
      <Image source={{ uri: item.link }} style={styles.bookImage} />
      <View style={styles.bookDetails}>
        <Text style={styles.bookTitle}>{item.name}</Text>
        <Text style={styles.bookAuthor}>by {item.author}</Text>
        <Text style={styles.bookPrice}>Price: ₹{item.price}</Text>
        {/* Add additional details as needed */}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.headerText}>Popular Books Section</Text>

      {/* FlatList to render books */}
      <FlatList
        data={Topauthors}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginTop:20,
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
    fontSize:24,
  },
  bookContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  bookImage: {
    width: 100,
    height: 150,
    marginRight: 10,
    borderRadius: 5,
  },
  bookDetails: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bookAuthor: {
    fontSize: 16,
    color: "gray",
  },
  bookPrice: {
    fontSize: 16,
    color: "green",
    marginTop: 5,
  },
});

export default Popular;
