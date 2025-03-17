import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { handleLogin } from "../utils/authUtils";
import { loginStyles } from "../styles/loginStyles";

const LoginForm = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);

  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const success = await handleLogin(formData);
      if (success) {
        onLoginSuccess();
      }
    } catch (error) {
      Alert.alert("Login Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your account</Text>

      <CustomInput
        label="Username"
        value={formData.username}
        onChangeText={(text) => updateFormData("username", text)}
        disabled={loading}
      />

      <CustomInput
        label="Password"
        value={formData.password}
        onChangeText={(text) => updateFormData("password", text)}
        secureTextEntry
        disabled={loading}
      />

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.rememberMeContainer}
          onPress={() => updateFormData("rememberMe", !formData.rememberMe)}
        >
          <View
            style={[
              styles.checkbox,
              formData.rememberMe && styles.checkboxChecked,
            ]}
          />
          <Text style={styles.rememberMeText}>Remember me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <CustomButton
        title={loading ? "Signing in..." : "SignIn"}
        onPress={handleSubmit}
        style={styles.signInButton}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#000000",
    fontSize: 60,
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontWeight: "900",
    marginBottom: 124,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 39,
    marginBottom: 124,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 32,
    height: 32,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#000000",
    marginRight: 16,
  },
  checkboxChecked: {
    backgroundColor: "#000000",
  },
  rememberMeText: {
    color: "#000000",
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontWeight: "400",
  },
  forgotPassword: {
    color: "#3900BE",
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontWeight: "500",
  },
  signInButton: {
    backgroundColor: "#000000",
  },
});

export default LoginForm;
