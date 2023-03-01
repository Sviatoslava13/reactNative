import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const PostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
        <Text>Коментарий</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PostsScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
