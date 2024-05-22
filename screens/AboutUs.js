import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Animated } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const AboutUs = () => {
  const navigation = useNavigation();

  // Animation values
  const fadeIn = new Animated.Value(0);

  // Animation function
  const animate = () => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  // Trigger animation on component mount
  React.useEffect(() => {
    animate();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://your-logo-url.png" }} // Replace with your logo URL
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>About Us</Text>
        <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate("Info")}>
          <Icon name="user" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Animated.View style={{ opacity: fadeIn }}>
          <Text style={styles.aboutText}>
            Welcome to Library-X, your ultimate destination for all things literature!
          </Text>
          <Text style={styles.aboutText}>
            At Library-X, we believe in the transformative power of books. Our mission is to provide a platform where book lovers can explore, discover, and indulge in their passion for reading.
          </Text>
          
          {/* Add more content as needed */}
        </Animated.View>
      </View>

      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>

        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 30,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  content: {
    padding: 20,
  },
  aboutText: {
    marginBottom: 15,
    fontSize: 16,
    lineHeight: 24,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  backButtonText: {
    marginLeft: 5,
    fontSize: 16,
    color: "#fff",
  },
});

export default AboutUs;
