import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import CreatePostsScreen from "./Screens/Main/CreatePostsScreen/CreatePostsScreen";
import LoginScreen from "./Screens/Auth/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen/RegistrationScreen";
import Home from "./Screens/Main/Home/Home";
import CommentsScreen from "./Screens/Main/CommentsScreen/CommentsScreen";
import CameraScreen from "./Screens/Main/Camera/Camera";
import MapScreen from "./Screens/Main/MapScreen/MapScreen";
const AuthStack = createStackNavigator();
export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <AuthStack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={Home}
      />
      <AuthStack.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <AuthStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          headerShown: false,
          gestureDirection: "vertical",
        }}
      />
      <AuthStack.Screen name="Comments" component={CommentsScreen} />
      <AuthStack.Screen name="Map" component={MapScreen} />
    </AuthStack.Navigator>
  );
};
