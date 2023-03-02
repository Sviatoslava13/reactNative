import { useCallback, useEffect, useState } from "react";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Provider, useDispatch, useSelector } from "react-redux";

// import * as Font from "expo-font";
// import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";

import { View } from "react-native";
import { store } from "./redux/store";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { authStateChangeUser } from "./redux/auth/authOperations";

SplashScreen.preventAutoHideAsync();



export default function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  const routing = useRoute(user);


  //  const { stateChange } = useSelector((state) => state.auth);
  //  const dispatch = useDispatch();

  //  useEffect(() => {
  //    dispatch(authStateChangeUser());
  //  }, []);

  //  const routing = useRoute(stateChange);

  const [fontsLoaded] = useFonts({
    "Roboto-Bold-700": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium-500": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular-400": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <NavigationContainer>{routing}</NavigationContainer>
      </Provider>
    </View>
  );
}
