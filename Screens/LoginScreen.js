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
  email: "",
  password: "",
};
const LoginScreen = () => {
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
        <TouchableWithoutFeedback onPress={onActive}>
          <View style={styles.container}>
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 200 : 0,
              }}
            >
              <KeyboardAvoidingView
                behavior={Platform.OS !== "ios" ? "padding" : null}
              >
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>Войти</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Адрес электронной почты"
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.email}
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
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.password}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                </View>
              </KeyboardAvoidingView>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={handleSabmit}
              >
                <Text style={styles.btnTitle}>Войти</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.link}>
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    marginHorizontal: 16,
    justifyContent: "flex-end",
  },
  header: {
    alignItems: "center",
    marginTop: 32,
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
