import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const ContactUs = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://media.licdn.com/dms/image/D5603AQFSkxlslwksqA/profile-displayphoto-shrink_800_800/0/1714730925844?e=1721865600&v=beta&t=fHHG_tQoXmTbTnzJGSWRbBkQhvA8W-EaNc59hZW5nK4" }} // Replace with your logo URL
        style={styles.logo}
      />
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.infoTitle}>Email:</Text>
        <Text style={styles.info}>harshit.raj2023@gmail.com</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.infoTitle}>Phone:</Text>
        <Text style={styles.info}>9129978996</Text>
      </View>
      <TouchableOpacity style={styles.contactButton}
      onPress={() => navigation.navigate("send")}
      
      >
        <Text style={styles.contactButtonText}>Send Message</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>

<Text style={styles.backButtonText}>Back</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contactInfo: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  infoTitle: {
    fontWeight: "bold",
    marginRight: 5,
  },
  info: {
    fontSize: 16,
  },
  contactButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  contactButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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

export default ContactUs;
