import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useTheme,
  Text,
  TextInput as PaperInput,
  Button,
} from "react-native-paper";
import { useFormik } from "formik";
import { signupSchema } from "../../schema";
import { router } from "expo-router";

export default function Login() {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/114497442?v=4",
        }} // Replace with your app logo URL
        style={styles.logo}
      />
      <Text
        variant="headlineSmall"
        style={{
          color: theme.colors.onBackground,
          marginBottom: 20,
        }}
      >
        Sign Up
      </Text>
      <View style={styles.form}>
        {/* Name Field */}
        <PaperInput
          label="Name"
          value={formik.values.name}
          onChangeText={formik.handleChange("name")}
          onBlur={formik.handleBlur("name")}
          style={styles.input}
          mode="outlined"
        />
        {formik.touched.name && formik.errors.name && (
          <Text style={(styles.errorText, { color: theme.colors.error })}>
            {formik.errors.name}
          </Text>
        )}

        {/* Email Field */}
        <PaperInput
          label="Email"
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
          style={styles.input}
          keyboardType="email-address"
          mode="outlined"
        />
        {formik.touched.email && formik.errors.email && (
          <Text style={(styles.errorText, { color: theme.colors.error })}>
            {formik.errors.email}
          </Text>
        )}

        {/* Password Field */}
        <PaperInput
          label="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          style={styles.input}
          secureTextEntry
          mode="outlined"
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={(styles.errorText, { color: theme.colors.error })}>
            {formik.errors.password}
          </Text>
        )}

        {/* Submit Button */}
        <Button
          mode="contained"
          onPress={formik.handleSubmit}
          style={{ marginTop: 14 }}
          // labelStyle={{ color: theme. }}
        >
          Sign Up
        </Button>
      </View>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => {
          router.push("/auth/login");
        }}
      >
        <Text variant="titleMedium">Already have an account?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },
  form: {
    width: "100%",
    maxWidth: 400,
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  errorText: {
    fontSize: 12,
    marginBottom: 5,
  },
  button: {
    color: "#C9D1D9",
  },
});
