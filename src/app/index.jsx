import React from "react";
import { useTheme } from "react-native-paper";
import { ScrollView } from "react-native";
import { Button } from "react-native-paper";
import Landing from "../components/Landing";
import Signup from "./auth/signup";
import Login from "./auth/login";
import Reset from "./auth/reset";
import Home from "./home/home";

export default function Index() {
  const theme = useTheme();
  return <Landing />;
}
