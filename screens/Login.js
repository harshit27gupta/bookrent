// Login.js

import React, { useEffect, useState } from "react";
import { ScrollView, Text, SafeAreaView, TextInput, Pressable, ActivityIndicator, Alert, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleLogin = async () => {
        if (email !== "" && password !== "") {
            setIsPressed(true);
            setIsLoading(true);
    
            setTimeout(async () => {
                try {
                    const userData = await AsyncStorage.getItem('user');
                    if (userData) {
                        const user = JSON.parse(userData);
                        if (user.email === email && user.password === password) {
                            // Reset input fields
                            setEmail("");
                            setPassword("");
                            await AsyncStorage.setItem('isLoggedIn', 'true');
                            navigation.navigate("Main");
                        } else {
                            Alert.alert("Login failed", "Invalid email or password");
                            await AsyncStorage.setItem('isLoggedIn', 'false');
                        }
                    } else {
                        Alert.alert("Login failed", "No user found, please register first");
                        await AsyncStorage.setItem('isLoggedIn', 'false');
                    }
                } catch (error) {
                    Alert.alert("Error", "An error occurred while fetching data.");
                    await AsyncStorage.setItem('isLoggedIn', 'false');
                } finally {
                    setIsLoading(false);
                    setIsPressed(false);
                }
            }, 3000);
        } else {
            Alert.alert("Empty field error", "Please fill all the fields");
            await AsyncStorage.setItem('isLoggedIn', 'false');
        }
    };
    

    return (
        <ScrollView>
            <SafeAreaView style={styles.safeAreaView}>
                <FontAwesome name="user" size={200} color="black" />
            </SafeAreaView>
            <Text style={styles.headerText}>Login</Text>

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
                onPress={handleLogin}
                style={[styles.loginButton, isPressed && styles.loginButtonPressed]}
            >
                <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>

            <Pressable>
                <Text style={styles.registerText}>
                    Don't have an account?{" "}
                    <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>Click here</Text>
                </Text>
            </Pressable>

            {isLoading && (
                <ActivityIndicator size="large" color="#0000ff" style={styles.activityIndicator} />
            )}
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
        marginBottom: 20,
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
        marginTop: 10,
        paddingLeft: 20,
    },
    loginButton: {
        width: 200,
        backgroundColor: "#00008B",
        borderRadius: 6,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 15,
        marginTop: 40,
    },
    loginButtonPressed: {
        opacity: 0.7,
    },
    loginButtonText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    registerText: {
        fontSize: 15,
        marginTop: 20,
        textAlign: 'center',
    },
    registerLink: {
        textDecorationLine: 'underline',
        color: 'blue',
    },
    activityIndicator: {
        marginTop: 20,
    },
});

export default Login;
