import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import HomePage from "../screens/HomeScreen";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../screens/Profile";
import { MaterialIcons } from '@expo/vector-icons';
import History from "../screens/History";
import AboutUs from "../screens/AboutUs";
import ContactUs from "../screens/ContactUs";
import AdminPrivacy from "../screens/AdminPrivacy";
import ImportantTerms from "../screens/ImportantTerms";
import Fiction from "../screens/Fiction";
import NonFiction from "../screens/NonFiction";
import Science from "../screens/Science";
import HistoryBooks from "../screens/HistoryBooks";
import Romance from "../screens/Romance";
import Popular from "../screens/Popular";
import New from "../screens/New";
import Events from "../screens/Events";
import sendAdminMessage from "../screens/sendAdminMessage";
import RentDetails from "../screens/RentDetails";
import Rentbooks from "../screens/Rentbooks";
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab=createBottomTabNavigator();
  function BottomTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown:false,
                tabBarLabel:"Home",
                tabBarLabelStyle:{
                    color:"#00008B"
                },
                tabBarIcon:({focused})=>
                    focused?(
                        <Entypo name="home" size={24} color="#008E97" />
                    ):(
                        <AntDesign name="home" size={24} color="black" />
                    ),

            }}
            
            
            />
  <Tab.Screen
            name="Info"
            component={Profile}
            options={{
                headerShown:false,
                tabBarLabel:"Profile",
                tabBarLabelStyle:{
                    color:"#00008B"
                },
                tabBarIcon:({focused})=>
                    focused?(
                        <Ionicons name="person" size={24} color="#008E97" />
                    ):(
                        <Ionicons name="person-outline" size={24} color="black" />
                    ),

            }}
            
            
            />
              <Tab.Screen
            name="orders"
            component={History}
            options={{
                headerShown:false,
                tabBarLabel:"history",
                tabBarLabelStyle:{
                    color:"#00008B"
                },
                tabBarIcon:({focused})=>
                    focused?(
                        <MaterialIcons name="history" size={24} color="#008E97" />
                    ):(
                        <MaterialIcons name="history" size={24} color="black" />
                    ),

            }}
            
            
            />







        </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="About"
          component={AboutUs}
          options={{ headerShown: false }}
        />
 <Stack.Screen
          name="Contact"
          component={ContactUs}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Privacy"
          component={AdminPrivacy}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Terms"
          component={ImportantTerms}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="fiction"
          component={Fiction}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="nonfic"
          component={NonFiction}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sci"
          component={Science}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="his"
          component={HistoryBooks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="love"
          component={Romance}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pop"
          component={Popular}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="neew"
          component={New}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="event"
          component={Events}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="send"
          component={sendAdminMessage}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Rentdetails"
          component={RentDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rentdisplay"
          component={Rentbooks}
          options={{ headerShown: false }}
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
