import { router } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
import { Appbar, Card, Text, useTheme } from "react-native-paper";

const NotificationsScreen = () => {
  const theme = useTheme();
  const notifications = [
    {
      id: 1,
      message: "You have a new message from John Doe",
      time: "10:30 AM",
    },
    { id: 2, message: "Jane Smith sent a photo", time: "9:00 AM" },
    { id: 3, message: "Michael Scott started a new group", time: "Yesterday" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
        <Appbar.BackAction
          onPress={() => router.back()}
          color={theme.colors.onPrimary}
        />
        <Appbar.Content title="Notifications" color={theme.colors.onPrimary} />
      </Appbar.Header>

      <ScrollView style={{ padding: 10 }}>
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            style={{
              marginBottom: 10,
              backgroundColor: theme.colors.surface,
            }}
          >
            <Card.Content>
              <Text style={{ color: theme.colors.onSurface }}>
                {notification.message}
              </Text>
              <Text
                style={{
                  color: theme.colors.secondaryText,
                  marginTop: 5,
                }}
              >
                {notification.time}
              </Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;
