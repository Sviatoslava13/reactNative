import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Main/Home";
import CreatePostsScreen from "./Screens/Main/CreatePostsScreen";
import CommentsScreen from "./Screens/Main/CommentsScreen";
import MapScreen from "./Screens/Main/MapScreen";
import Camera from './Screens/Main/Camera'
const Stack = createNativeStackNavigator();
export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerTitleAlign: "center" }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <Stack.Screen name="Comments" component={CommentsScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
         <Stack.Screen name="Camera" component={Camera} options={{
          headerShown: false,
          gestureDirection: "vertical",
        }} />
    </Stack.Navigator>
  );
};
