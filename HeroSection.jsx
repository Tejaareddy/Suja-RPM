import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
} from "react-native";

const HeroSection = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/717f0879c4fa6e810b284a51368e0ddb559c01bf39c362893748acc696ac9142?placeholderIfAbsent=true&apiKey=5e2e3c16d5834651976fbf0ea1fc017e",
      }}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Track your healthcare data</Text>
        <Text style={styles.subtitle}>
          Good health and good sense are two of life's{"\n"}greatest blessings
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: Platform.OS === "web" ? 60 : 30,
    overflow: "hidden",
    minHeight: Platform.OS === "web" ? 1020 : 400,
  },
  backgroundImage: {
    borderRadius: Platform.OS === "web" ? 60 : 30,
  },
  content: {
    padding: Platform.OS === "web" ? 80 : 40,
    paddingTop: Platform.OS === "web" ? 176 : 88,
  },
  title: {
    color: "#FFFFFF",
    fontSize: Platform.OS === "web" ? 56 : 36,
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontWeight: "900",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: Platform.OS === "web" ? 32 : 24,
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontWeight: "500",
    marginTop: 18,
  },
});

export default HeroSection;
