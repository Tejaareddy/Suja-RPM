import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from "react-native";

const CustomButton = ({
  onPress,
  title,
  style,
  textStyle,
  disabled,
  loading,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingHorizontal: Platform.OS === "web" ? 70 : 40,
    paddingVertical: Platform.OS === "web" ? 19 : 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  buttonText: {
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontSize: Platform.OS === "web" ? 24 : 18,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  disabled: {
    opacity: 0.7,
  },
});

export default CustomButton;
