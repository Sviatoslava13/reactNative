import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ProfileScreen = () => {
      return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
}
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
      backgroundColor:"white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});