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
const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.box}>
          <TouchableOpacity style={styles.boxContainer}>
            <FontAwesome name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.textUnderPhoto}>Загрузите фото</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Название..." />
        <TouchableOpacity style={styles.input} activeOpacity={0.9}>
          <Feather name="map-pin" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.btnText}>Опубликовать</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBox}>
        <TouchableOpacity style={styles.deleteBtn}>
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
    marginBottom: 32,
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
    marginTop: 16,
    justifyContent: "center",
      alignItems: "center",
    color: "white",
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
    btnText: {
        color: 'white'
  }
});
