import React from "react";
import { useTheme, Text } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";

export default function Index() {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.content}>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/114497442?v=4", // Replace with your app logo URL
          }}
          style={styles.logo}
        />
        <Text
          variant="headlineLarge"
          style={{
            color: theme.colors.text,
          }}
        >
          BeshChat
        </Text>
        <Text
          variant="bodyMedium"
          style={{
            color: theme.colors.onBackground,
            textAlign: "center",

            marginTop: 8,
            marginBottom: 20,
          }}
        >
          Stay connected anytime, anywhere with seamless chat experience!
        </Text>
      </View>
      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <Button
          icon="account-plus"
          mode="outlined"
          onPress={() => router.push("/auth/signup")}
          style={styles.button}
        >
          Create Account
        </Button>
        <Button
          icon="account"
          mode="contained"
          onPress={() => router.push("/auth/login")}
          style={styles.button}
        >
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  content: {
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#fff", // Adds a clean border around the logo
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    textAlign: "center",
    width: "80%",
    lineHeight: 26, // Better line height for readability
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    gap: 15, // More spacing between features
    marginBottom: 40, // Increased margin bottom
  },
  featureItem: {
    alignItems: "center",
    width: "30%",
    marginBottom: 6, // Consistent spacing between feature items
  },
  featureText: {
    fontSize: 16,
    marginTop: 6,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10, // Increased gap between buttons
    flexWrap: "wrap",
    width: "100%",
  },
  button: {
    width: 200,
    marginVertical: 6,
    borderRadius: 30,
  },
});
