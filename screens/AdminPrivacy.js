import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
const AdminPrivacy = () => {
    const navigation=useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.content}>
        Legal Compliance: Depending on the jurisdiction and the nature of your application, you may be required by law to provide users with a privacy policy that outlines your data handling practices.
      </Text>
      <Text style={styles.content}>
        Transparency: Users value transparency regarding their data privacy. Providing easy access to a privacy policy demonstrates your commitment to being transparent about how user data is handled within your application.
      </Text>
      <Text style={styles.content}>
        Trust Building: A clear and accessible privacy policy helps build trust with your users. When users understand how their data is being used and protected, they are more likely to feel comfortable using your application.
      </Text>
      <Text style={styles.content}>
        User Rights Awareness: The privacy policy typically outlines users' rights regarding their personal information, such as the right to access, correct, or delete their data. Making this information readily available empowers users to exercise their rights.
      </Text>
      <Text style={styles.content}>
        User Expectations: In today's digital landscape, users have come to expect transparency and clarity regarding privacy practices. Including a "Privacy" button aligns with these expectations and enhances the overall user experience.
      </Text>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    color: "#333", // Custom color for title
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: "#666", // Custom color for content
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

export default AdminPrivacy;
