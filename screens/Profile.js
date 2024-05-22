import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Image,
  Alert,
  Text,
  TextInput,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const defaultImageUri =
    "https://tse1.mm.bing.net/th?id=OIP.qFcA88YU9jE3ULnYGWwI9QHaHw&pid=Api&P=0&h=180";

  useEffect(() => {
    const fetchStoredUserInfo = async () => {
      try {
        const storedUserInfo = await AsyncStorage.getItem("user");
        if (storedUserInfo) {
          const parsedUserInfo = JSON.parse(storedUserInfo);
          setUserInfo(parsedUserInfo);
          if (parsedUserInfo.profileImage) {
            setSelectedImage(parsedUserInfo.profileImage);
          }
        }
      } catch (error) {
        console.log("Error fetching stored user info:", error);
      }
    };

    fetchStoredUserInfo();
  }, []);

  const handleProfileIconPress = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission denied",
          "Sorry, we need camera roll permissions to make this work!"
        );
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        const imageUri = result.assets[0].uri;
        setSelectedImage(imageUri);
        // defaultImageUri = imageUri;
        const storedUserInfo = await AsyncStorage.getItem("user");
        let updatedUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : {};
        updatedUserInfo.profileImage = imageUri;

        await AsyncStorage.setItem("user", JSON.stringify(updatedUserInfo));
        setUserInfo(updatedUserInfo);
      }
    } catch (error) {
      console.log("Error reading an image", error);
      Alert.alert("Error", "Failed to select image. Please try again.");
    }
  };
const navigation=useNavigation();
  const handleEdit = () => {
    setIsEditMode(true);
  };
  const [showModal, setShowModal] = useState(false);
  const handleLogout = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleLogoutConfirm = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(false);
      navigation.navigate("Login");
    }, 3000); // Loader will disappear after 3 seconds
  };
  

  const handleSave = async () => {
    try {
      setIsLoading(true);
      // Simulating loading for 3 seconds
      setTimeout(async () => {
        await AsyncStorage.setItem("user", JSON.stringify(userInfo));
        setIsEditMode(false);
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      console.log("Error saving user info:", error);
      Alert.alert("Error", "Failed to save user info. Please try again.");
    }
  };

  const handleInputChange = (key, value) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Pressable onPress={handleProfileIconPress}>
          <Image
            source={{ uri: selectedImage || defaultImageUri }}
            style={styles.profileImage}
          />
        </Pressable>
        <Text style={styles.title}>User Information</Text>
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfoRow}>
            <Text style={styles.userInfoLabel}>Name:</Text>
            {isEditMode ? (
              <TextInput
                style={styles.userInfoText}
                value={userInfo.name}
                onChangeText={(text) => handleInputChange("name", text)}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.name}</Text>
            )}
          </View>
          <View style={styles.userInfoRow}>
            <Text style={styles.userInfoLabel}>Email:</Text>
            {isEditMode ? (
              <TextInput
                style={styles.userInfoTextInput}
                value={userInfo.email}
                onChangeText={(text) => handleInputChange("email", text)}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.email}</Text>
            )}
          </View>
          <View style={styles.userInfoRow}>
            <Text style={styles.userInfoLabel}>Password:</Text>
            {isEditMode ? (
              <TextInput
                style={styles.userInfoTextInput}
                value={userInfo.password}
                onChangeText={(text) => handleInputChange("password", text)}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.password}</Text>
            )}
          </View>
          <View style={styles.userInfoRow}>
            <Text style={styles.userInfoLabel}>Phone:</Text>
            {isEditMode ? (
              <TextInput
                style={styles.userInfoTextInput}
                value={userInfo.phone}
                onChangeText={(text) => handleInputChange("phone", text)}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.phone}</Text>
            )}
          </View>
          <View style={styles.userInfoRow}>
            <Text style={styles.userInfoLabel}>City and State:</Text>
            {isEditMode ? (
              <TextInput
                style={styles.userInfoTextInput}
                value={userInfo.address}
                onChangeText={(text) => handleInputChange("address", text)}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.address}</Text>
            )}
          </View>
        </View>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loadingIndicator}
          />
        ) : (
          <>
            {isEditMode ? (
              <Pressable onPress={handleSave} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
              </Pressable>
            ) : (
              <Pressable onPress={handleEdit} style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit</Text>
              </Pressable>
            )}
         <Pressable onPress={handleLogout} style={styles.logoutButton}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </Pressable>
          </>
        )}
      </View>

      {/* Logout confirmation modal */}
      {showModal && (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtons}>
              <Pressable onPress={handleLogoutConfirm} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </Pressable>
              <Pressable onPress={handleModalClose} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#dcdcdc",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  userInfoContainer: {
    marginTop: 20,
    width: "100%",
  },
  userInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  editButton: {
    width: 200,
    backgroundColor: "#00008B",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    marginTop: 40,
  },
  saveButton: {
    width: 200,
    backgroundColor: "#00008B",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    marginTop: 40,
  },
  saveButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  editButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  userInfoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  userInfoText: {
    fontSize: 16,
    color: "#666",
  },
  logoutButton: {
    width: 200,
    backgroundColor: "#FF6347",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    marginTop: 20,
  },
  logoutButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
  },
  modalButton: {
    backgroundColor: "#FF6347",
    borderRadius: 6,
    padding: 10,
    marginHorizontal: 10,
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  
});

export default Profile;