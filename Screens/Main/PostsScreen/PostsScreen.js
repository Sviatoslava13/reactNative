import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { PostCard } from "./PostsCard";

import { app } from "../../../firebase/config";

import {
  collection,
  query,
  getCountFromServer,
  getFirestore,
  getDoc,
  orderBy,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { updatePosts } from "../../../redux/posts/postsReducer";

const PostsScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const getAllPost = async () => {
    const db = getFirestore(app);
    const querySnapshot = await getDoc(
      query(collection(db, "posts"), orderBy("timestamp", "desc"))
    );

    const result = await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const snap = await getCountFromServer(
          collection(db, "posts", doc.id, "comments")
        );
        return { ...doc.data(), id: doc.id, count: snap.data().count };
      })
    );
    dispatch(updatePosts(result));
  };

  useEffect(() => {
       getAllPost()
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
});

export default PostsScreen;