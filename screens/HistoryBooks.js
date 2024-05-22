import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Animated, Easing } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const HistoryBooks = ({ route }) => {
  const { fictionBooks } = route.params;
  const { nonfictionBooks } = route.params;
  const { scienceBooks } = route.params;
  const { historyBooks } = route.params;
  const { romanceBooks } = route.params;
  const navigation = useNavigation();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const marginTopAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(marginTopAnimation, {
      toValue: 20,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.welcomeContainer, { marginTop: marginTopAnimation }]}>
        <Text style={styles.welcomeText}>Welcome to History Section</Text>
      </Animated.View>
      <View style={styles.section}>
        <ScrollView horizontal>
          <TouchableOpacity style={[styles.category]}
          
          onPress={() => navigation.navigate("fiction",{ fictionBooks,nonfictionBooks,scienceBooks,historyBooks,romanceBooks })}

          >
            <Text style={[styles.categoryText]}>Fiction</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate("nonfic", { fictionBooks, nonfictionBooks, scienceBooks, historyBooks, romanceBooks })}
          >
            <Text style={styles.categoryText}>Non-Fiction</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate("sci", { fictionBooks, nonfictionBooks, scienceBooks, historyBooks, romanceBooks })}
          >
            <Text style={styles.categoryText}>Science</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.category, styles.selectedCategory]}
            onPress={() => navigation.navigate("his", { fictionBooks, nonfictionBooks, scienceBooks, historyBooks, romanceBooks })}
          >
            <Text style={[styles.categoryText, styles.selectedCategoryText]}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate("love", { fictionBooks, nonfictionBooks, scienceBooks, historyBooks, romanceBooks })}
          >
            <Text style={styles.categoryText}>Romance</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {historyBooks.map((book, index) => (
        <View key={index} style={styles.bookContainer}>
          <Image source={{ uri: book.link }} style={styles.bookImage} />
          <View style={styles.bookDetails}>
            <Text style={styles.bookTitle}>{book.name}</Text>
            <Text style={styles.bookAuthor}>by {book.author}</Text>
            <Text style={styles.bookPrice}>Price: ₹{book.price}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.bookRating}>Rating:</Text>
              {[1, 2, 3, 4, 5].map((i) => (
                <Icon
                  key={i}
                  name={i <= book.rating ? "star" : "star-o"}
                  size={20}
                  color={i <= book.rating ? "gold" : "gray"}
                />
              ))}
            </View>
            <Text style={styles.bookDescription}>
              {showFullDescription ? book.description : `${book.description.substring(0, 150)}...`}
            </Text>
            <TouchableOpacity onPress={() => setShowFullDescription(!showFullDescription)}>
              <Text style={styles.showMoreButton}>{showFullDescription ? "Show Less" : "Show More"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rentButton} onPress={() => navigation.navigate('Rentdetails', { book })}>
              <Text style={styles.rentButtonText}>Rent now</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  rentButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  rentButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  welcomeContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  section: {
    marginBottom: 20,
  },
  category: {
    width: 100,
    height: 100,
    backgroundColor: "#f5f5f5",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedCategory: {
    backgroundColor: "#333",
  },
  categoryText: {
    fontSize: 16,
  },
  selectedCategoryText: {
    color: "#fff",
  },
  bookContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 20,
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
  ratingContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  bookRating: {
    marginRight: 5,
  },
  bookDescription: {
    fontSize: 14,
    marginTop: 5,
    lineHeight: 20,
  },
  showMoreButton: {
    color: "blue",
    marginTop: 5,
  },
});

export default HistoryBooks;
