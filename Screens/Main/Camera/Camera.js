import { Camera, CameraType } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as Location from "expo-location";

const CameraScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [errorMsg, setErrorMsg] = useState(null);

  const takePhoto = async () => {
    let cashPhoto = await camera.takePictureAsync();
    const photo = cashPhoto.uri;
    let CashLocation = await Location.getCurrentPositionAsync({});
    const location = CashLocation.coords;
    navigation.navigate("CreatePosts", { photo, location });
  };
  useEffect(() => {
    requestPermission();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        <TouchableOpacity style={styles.containerCamera} onPress={takePhoto}>
          <FontAwesome name="camera" size={24} color="black" />
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  containerCamera: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
});
