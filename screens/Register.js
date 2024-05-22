import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TextInput, Pressable, ScrollView, ActivityIndicator, Modal, StyleSheet, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isPressed, setIsPressed] = useState(false); // New state variable for button press
    const navigation = useNavigation();

    useFocusEffect(
        React.useCallback(() => {
            // Reset the form fields when the screen is focused
            return () => {
                setAddress("");
                setEmail("");
                setName("");
                setPassword("");
                setPhone("");
            };
        }, [])
    );

    const handleRegister = async () => {
        if (name !== "" && email !== "" && password !== "" && phone !== "" && address !== "") {
            setIsLoading(true); // Start loading if validation succeeds
            setIsPressed(true); // Set button pressed state

            // Simulate registration process
            setTimeout(async () => {
                try {
                    const userData = {
                        name,
                        email,
                        password,
                        phone,
                        address,
                    };
                    await AsyncStorage.setItem('user', JSON.stringify(userData));

                    setIsLoading(false); // Stop loading after saving data
                    navigation.navigate("Login"); // Navigate to Login screen
                } catch (error) {
                    Alert.alert("Error", "An error occurred while saving data.");
                    setIsLoading(false);
                } finally {
                    setIsPressed(false); // Reset button pressed state
                }
            }, 3000);
        } else {
            Alert.alert("Empty field error", "Please fill all the fields");
        }
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.safeAreaView}>
                <MaterialIcons name="app-registration" size={200} color="black" />
            </SafeAreaView>
            <Text style={styles.headerText}>Signup</Text>
            <Text style={styles.labelText}>Enter your full name</Text>
            <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.textInput}
                placeholder="Enter your name"
            />
            <Text style={styles.labelText}>Phone number</Text>
            <TextInput
                value={phone}
                onChangeText={(text) => setPhone(text)}
                style={styles.textInput}
                placeholder="Enter your phone number"
            />
            <Text style={styles.labelText}>Location</Text>
            <TextInput
                value={address}
                onChangeText={(text) => setAddress(text)}
                style={styles.textInput}
                placeholder="Enter your primary city and state"
            />
            <Text style={styles.labelText}>Email ID</Text>
            <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.textInput}
                placeholder="Enter your email ID"
            />
            <Text style={styles.labelText}>Password</Text>
            <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.textInput}
                placeholder="Enter your password"
                secureTextEntry={true}
            />

            <Pressable
                onPress={handleRegister}
                style={[styles.registerButton, isPressed && styles.registerButtonPressed]} // Apply pressed style if isPressed is true
            >
                <Text style={styles.registerButtonText}>Register</Text>
            </Pressable>

            <Modal
                transparent={true}
                animationType="none"
                visible={isLoading}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: '#87CEEB',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 300,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
    labelText: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
    },
    textInput: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 20,
        paddingLeft: 20,
    },
    registerButton: {
        width: 200,
        backgroundColor: "#00008B",
        borderRadius: 6,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 15,
        marginTop: 40,
    },
    registerButtonPressed: {
        opacity: 0.9, // Apply transparency when pressed
    },
    registerButtonText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Register;
