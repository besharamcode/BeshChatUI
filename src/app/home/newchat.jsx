import { router } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
import {
  Appbar,
  Avatar,
  Card,
  Text,
  Searchbar,
  useTheme,
} from "react-native-paper";

const NewChatScreen = () => {
  const theme = useTheme();
  const contacts = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Scott" },
  ];

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          color={theme.colors.onPrimary}
        />
        <Appbar.Content title="New Chat" color={theme.colors.onPrimary} />
      </Appbar.Header>

      <Searchbar
        placeholder="Search contacts"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          margin: 10,
          backgroundColor: theme.colors.surface,
          color: theme.colors.onSurface,
        }}
        iconColor={theme.colors.secondaryText}
      />

      <ScrollView style={{ padding: 10 }}>
        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((contact) => (
            <Card
              key={contact.id}
              style={{
                marginBottom: 10,
                backgroundColor: theme.colors.surface,
              }}
              onPress={() => router.push(`/home/chatroom/${contact.id}`)}
            >
              <Card.Title
                title={contact.name}
                titleStyle={{ color: theme.colors.onSurface }}
                left={(props) => (
                  <Avatar.Text
                    {...props}
                    label={contact.name.charAt(0)}
                    style={{ backgroundColor: theme.colors.accent }}
                  />
                )}
              />
            </Card>
          ))}
      </ScrollView>
    </View>
  );
};

export default NewChatScreen;
