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
import { loginSchema } from "../../schema";
import { router } from "expo-router";

export default function login() {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
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
        Login
      </Text>
      <View style={styles.form}>
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
        <TouchableOpacity
          style={{ marginTop: 1 }}
          onPress={() => {
            router.push("/auth/reset");
          }}
        >
          <Text variant="labelMedium">Forgot password?</Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <Button
          mode="contained"
          onPress={formik.handleSubmit}
          style={styles.submitButton}
        >
          Login
        </Button>
      </View>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => {
          router.push("/auth/signup");
        }}
      >
        <Text variant="titleMedium">Don't have an account?</Text>
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
  submitButton: {
    marginTop: 20,
  },
});
