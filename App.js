import { StyleSheet, View } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import { useFonts } from "expo-font";
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen'
export default function App() {
SplashScreen.preventAutoHideAsync();
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


  return (
    <View style={styles.container}  onLayout={onLayoutRootView}>
      <RegistrationScreen />
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
