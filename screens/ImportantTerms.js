import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
const TermsAndConditions = () => {
    const navigation=useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.sectionTitle}>1. Introduction</Text>
      <Text style={styles.content}>
        These terms and conditions outline the rules and regulations for the use of our mobile application.
      </Text>
      <Text style={styles.sectionTitle}>2. Interpretation and Definitions</Text>
      <Text style={styles.content}>
        The words of which the initial letter is capitalized have meanings defined under the following conditions.
      </Text>
      <Text style={styles.sectionTitle}>3. Intellectual Property</Text>
      <Text style={styles.content}>
        The Service and its original content, features, and functionality are and will remain the exclusive property of [Your Company Name] and its licensors.
      </Text>
      <Text style={styles.sectionTitle}>4. Governing Law</Text>
      <Text style={styles.content}>
        These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.
      </Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>

<Text style={styles.backButtonText}>Back</Text>
</TouchableOpacity>
      {/* Add more sections and content as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
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

export default TermsAndConditions;
