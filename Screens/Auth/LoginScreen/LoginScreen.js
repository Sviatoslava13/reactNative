import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";

import { useDispatch } from "react-redux";

import { authSingInUser } from "../../../redux/auth/authOperations";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [activeKayboard, setActiveKayboard] = useState(false);

  const dispatch = useDispatch();

  const submitValue = () => {
    setActiveKayboard(false);
    Keyboard.dismiss();
    dispatch(authSingInUser(state));
    setState(initialState);
  };

  const onActive = () => {
    setActiveKayboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={onActive}>
      <ImageBackground
        style={styles.image}
       source={require("../../../assets/image/photo-bg.png")}
      >
        <TouchableWithoutFeedback onPress={onActive}>
          <View style={styles.container}>
            <View
              style={{
                ...styles.form,
                marginBottom: activeKayboard ? 230 : 32,
              }}
            >
              <KeyboardAvoidingView
                behavior={Platform.OS !== "ios" ? "padding" : "height"}
                keyboardVerticalOffset={-250}
              >
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>Войти</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Адрес электронной почты"
                    onFocus={() => setActiveKayboard(true)}
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
                    onFocus={() => setActiveKayboard(true)}
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
                onPress={submitValue}
              >
                <Text style={styles.btnTitle}>Войти</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Registration")}
              >
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
    // opacity: 0.8,
  },
  form: {
    marginHorizontal: 16,
    justifyContent: "flex-end",
    // marginBottom: 78,
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
