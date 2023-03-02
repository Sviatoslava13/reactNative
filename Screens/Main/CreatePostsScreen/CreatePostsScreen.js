import React, { useEffect } from "react";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const initialState = {
  photo: "",
  titlePicture: "",
  location: "",
};

const CreatePostsScreen = ({ navigation, route }) => {
  const [photo, setPhoto] = useState("");
  const [form, setForm] = useState(initialState);
  const [location, setLocation] = useState(null);
  const [disabledBtn, setDisabledBtn] = useState(true);

  const submitForm = () => {
    navigation.navigate('Posts', {form})
    console.log(form);
    setForm(initialState);
    setPhoto(null);
  };

  useEffect(() => {
    if (form.titlePicture && form.photo) {
      setDisabledBtn(false);
    }
  }, [form]);

  useEffect(() => {
    if (!route.params) {
      return;
    }
    if (route.params.location) {
      setLocation(route.params.location);
      setForm((prevState) => ({
        ...prevState,
        location: route.params.location,
      }));
    }
    setPhoto(route.params.photo);
    setForm((prevState) => ({ ...prevState, photo: route.params.photo }));
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        {!photo ? (
          <View style={styles.box}>
            <TouchableOpacity
              style={styles.boxContainer}
              onPress={() => {
                navigation.navigate("Camera");
              }}
            >
              <FontAwesome name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Image style={styles.img} source={{ uri: photo }} />
          </View>
        )}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Camera");
          }}
        >
          <Text style={styles.textUnderPhoto}>
            {photo ? "Редактировать фото" : "Загрузите фото"}
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Название..."
          onChangeText={(value) =>
            setForm((prevState) => ({
              ...prevState,
              titlePicture: value,
            }))
          }
          value={form.titlePicture}
        />
        <TouchableOpacity
          style={styles.input}
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate("Map", { location });
          }}
        >
          <Feather name="map-pin" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            ...styles.button,
            backgroundColor: disabledBtn ? "#F6F6F6" : "#FF6C00",
          }}
          onPress={submitForm}
        >
          <Text
            style={{
              ...styles.btnTitle,
              color: disabledBtn ? "#BDBDBD" : "#FFFFFF",
            }}
          >
            Опубликовать
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBox}>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => {
            setForm(initialState);
            setPhoto(null);
          }}
        >
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  form: {
    marginHorizontal: 16,
  },
  containerCamera: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  box: {
    marginTop: 32,
    marginBottom: 8,
    height: 240,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
  },
  boxContainer: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 240,
    marginTop: 32,
    borderRadius: 8,
    marginBottom: 8,
  },
  textUnderPhoto: {
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto-Regular-400",
    marginBottom:8,
  },
  input: {
    height: 50,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    justifyContent: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    marginTop:16,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "white",
    fontFamily: "Roboto-Regular-400",
  },
  bottomBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 22,
  },
  deleteBtn: {
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
});
