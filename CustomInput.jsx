import React from "react";
import { View, TextInput, Text, StyleSheet, Platform } from "react-native";

const CustomInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  style,
  disabled,
  error,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          style,
          disabled && styles.disabled,
          error && styles.errorInput,
        ]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#999"
        editable={!disabled}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: "#373737",
    fontSize: Platform.OS === "web" ? 28 : 20,
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontWeight: "500",
    marginBottom: 16,
  },
  input: {
    borderRadius: 8,
    borderColor: "rgba(222, 222, 222, 0.9)",
    borderWidth: 1,
    height: Platform.OS === "web" ? 76 : 56,
    paddingHorizontal: 16,
    fontSize: Platform.OS === "web" ? 18 : 16,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  disabled: {
    backgroundColor: "#F5F5F5",
    opacity: 0.7,
  },
  errorInput: {
    borderColor: "#FF0000",
  },
  errorText: {
    color: "#FF0000",
    fontSize: 14,
    marginTop: 4,
  },
});

export default CustomInput;
