import React from "react";
import { Text, View, StyleSheet } from "react-native";
const CommentsScreen = () => {
       return (
    <View style={styles.container}>
      <Text>CommentsScreen</Text>
    </View>
  );
}
export default CommentsScreen;



const styles = StyleSheet.create({
  container: {
      backgroundColor:"white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});