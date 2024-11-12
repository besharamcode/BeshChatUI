import React, { useState } from "react";
import { View, ScrollView, TextInput } from "react-native";
import {
  Appbar,
  Avatar,
  Button,
  IconButton,
  Text,
  useTheme,
} from "react-native-paper";
import { router } from "expo-router";

const ChatRoomScreen = () => {
  const [message, setMessage] = useState("");
  const theme = useTheme();

  // Sample chat messages
  const messages = [
    { id: 1, sender: "John Doe", text: "Hey there!", time: "10:00 AM" },
    { id: 2, sender: "You", text: "Hello! How are you?", time: "10:02 AM" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
        <Appbar.BackAction
          onPress={() => router.back()}
          color={theme.colors.onPrimary}
        />
        <Appbar.Content title="Chat Room" color={theme.colors.onPrimary} />
      </Appbar.Header>

      <ScrollView style={{ flex: 1, padding: 10 }}>
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={{
              alignSelf: msg.sender === "You" ? "flex-end" : "flex-start",
              backgroundColor:
                msg.sender === "You"
                  ? theme.colors.primary
                  : theme.colors.surface,
              padding: 6,
              paddingHorizontal: 14,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text style={{ color: theme.colors.onPrimary }}>{msg.text}</Text>
            <Text
              style={{
                color: theme.colors.secondaryText,
                fontSize: 12,
                textAlign: "right",
              }}
            >
              {msg.time}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Message Input */}
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          backgroundColor: theme.colors.surface,
        }}
      >
        <TextInput
          style={{ flex: 1, color: theme.colors.onSurface }}
          placeholder="Type a message"
          placeholderTextColor={theme.colors.secondaryText}
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <IconButton
          icon="send"
          color={theme.colors.accent}
          onPress={() => console.log("Send message:", message)}
        />
      </View>
    </View>
  );
};

export default ChatRoomScreen;
