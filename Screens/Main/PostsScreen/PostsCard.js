import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const PostsCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.postContainer}>
      <Image source={{ uri: item.photo }} style={styles.postImage} />
      <Text style={styles.postName}>{item.namePost}</Text>

      <View
        style={{
          height: 24,
          flexDirection: "row",
          marginTop: 8,
        }}
      >
        <TouchableOpacity
          style={{ ...styles.infoBtn, flex: 0.2 }}
          onPress={() => navigation.navigate("Comments", { postId: item.id })}
        >
          <Text style={{ ...styles.infoText, textAlign: "left" }}>
            {" "}
            {item.count}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.infoBtn, flex: 0.8 }}
          onPress={() =>
            navigation.navigate("Карта", {
              location: item.location,
            })
          }
        >
          <Text
            style={{
              ...styles.infoText,
              textAlign: "right",
              textDecorationLine: "underline",
            }}
          >
            {item.location.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    marginBottom: 32,
  },
  postImage: {
    width: "100%",
    aspectRatio: 343 / 240,
    marginBottom: 8,
    borderRadius: 8,
  },
  postName: {
    marginBottom: 8,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
  },
  infoBtn: {
    height: 24,
    textAlign: "left",
  },
  icon: {
    marginRight: 6,
  },

  infoText: {
    verticalAlign: "middle",
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});
export default PostsCard;
/* {item.count === 0 ? (
              <SvgMessage width={24} height={24} style={styles.icon} />
            ) : (
              <SvgMessageCount width={24} height={24} style={styles.icon} />
            )} */
