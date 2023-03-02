import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  onSnapshot,
  collection,
  query,
  getCountFromServer,
} from "firebase/firestore";
import { auth, db } from "../../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import Feather from "react-native-vector-icons/Feather";

function PostsScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsub = onSnapshot(q, async (data) => {
      const fetchedPosts = await Promise.all(
        data.docs.map(async (doc) => {
          const commentsQ = query(collection(db, "posts", doc.id, "comments"));
          const snapshot = await getCountFromServer(commentsQ);
          const commentsCount = snapshot.data().count;

          return {
            ...doc.data(),
            id: doc.id,
            commentsCount,
          };
        })
      );
      setPosts(fetchedPosts);
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          name: user.displayName,
          photo: user.photoURL,
          email: user.email,
        };
        setUserData(userInfo);
      } else {
        setUserData(null);
      }
    });
  }, []);

  return (
    <View style={s.container}>
      <View style={s.userInfo}>
        <Image source={{ uri: userData.photo }} style={s.photo} />
        <View>
          <Text style={s.name}>{userData.name}</Text>
          <Text style={s.email}>{userData.email}</Text>
        </View>
      </View>
      {!!posts.length && (
        <FlatList
          data={posts}
          keyExtractor={(item, idx) => idx}
          renderItem={({ item }) => (
            <View style={s.post}>
              <Image source={{ uri: item.photoURL }} style={s.postImg} />
              <Text style={s.title}>{item.postName}</Text>
              <View style={s.descrContainer}>
                <Pressable
                  style={s.commentsBtn}
                  onPress={() =>
                    navigation.navigate("Comments", {
                      postId: item.id,
                      imgURL: item.photoURL,
                      photoURL: userData.photo,
                    })
                  }
                >
                  <Feather name="message-circle" color={"#BDBDBD"} size={24} />
                  <Text style={s.commentsCount}>{item.commentsCount}</Text>
                </Pressable>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Feather name="map-pin" color={"#BDBDBD"} size={24} />
                    <Text
                      style={s.location}
                      onPress={() => navigation.navigate("Map", item.location)}
                    >
                      {item.locationDesc}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  name: {
    // fontFamily: "Roboto500",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  email: {
    //  fontFamily: "Roboto400",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121CC",
  },
  post: {
    marginBottom: 32,
    borderRadius: 8,
  },
  postImg: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    // fontFamily: "Roboto500",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 8,
  },
  location: {
    //fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
    marginLeft: 3,
  },
  descrContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentsCount: {
    marginLeft: 6,
    color: "#BDBDBD",
    // fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
  },
  commentsBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
});

/*import React, { useEffect, useState } from "react";
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
*/
export default PostsScreen;
