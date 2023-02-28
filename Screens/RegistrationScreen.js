import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Platform,
  Keyboard,
} from "react-native";
const initialState = {
  name: "",
  email: "",
  password: "",
};
const RegistrationScreen = ({navigation}) => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleSabmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const onActive = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={onActive}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/image/photo-bg.png")}
      >
        <TouchableWithoutFeedback>
          <View style={styles.containers}>
            <TouchableOpacity
              style={styles.userPhoto}
              activeOpacity={0.8}
            ></TouchableOpacity>
            <View
              style={{ ...styles.form, marginBottom: isShowKeyboard ? 200 : 78}}
            >
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : 'height'}
              >
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>Регистрация</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Логин"
                    value={state.name}
                    onFocus={() => setIsShowKeyboard(true)}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, name: value }))
                    }
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Адрес электронной почты"
                    value={state.email}
                    onFocus={() => setIsShowKeyboard(true)}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    secureTextEntry={true}
                    value={state.password}
                    onFocus={() => setIsShowKeyboard(true)}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                </View>
              </KeyboardAvoidingView>
              <TouchableOpacity style={styles.button} onPress={handleSabmit}>
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
export default RegistrationScreen;
const styles = StyleSheet.create({
  containers: {
    position: "relative",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    marginHorizontal: 16,
    justifyContent: "flex-end",
  },
  header: {
    alignItems: "center",
    marginTop: 92,
  },
  userPhoto: {
    position: "absolute",
    top: -60,
    right: "50%",
    transform: [{ translateX: 60 }],
    maxWidth: 120,
    minWidth: 120,
    height: 120,
    borderRadius: 30,
    backgroundColor: "#F6F6F6",
  },
  headerTitle: {
    fontSize: 33,
    color: "black",
    marginBottom: 32,
    fontFamily: "Roboto-Medium-500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  button: {
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "white",
    fontFamily: "Roboto-Regular-400",
  },
  link: {
    color: "#1B4371",
    textAlign: "center",
   fontFamily: "Roboto-Regular-400",
  },
});
