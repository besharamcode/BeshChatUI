import { router } from "expo-router";
import React from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import {
  Appbar,
  Avatar,
  Card,
  FAB,
  IconButton,
  Text,
  useTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const theme = useTheme();

  // Sample chat data
  const chats = [
    { id: 1, name: "John Doe", message: "Hello!", time: "10:00 AM" },
    {
      id: 2,
      name: "Jane Smith",
      message: "Let’s catch up later.",
      time: "9:45 AM",
    },
    {
      id: 3,
      name: "Michael Scott",
      message: "New project update",
      time: "Yesterday",
    },
    {
      id: 4,
      name: "Dwight Schrute",
      message: "Bears, beets, Battlestar Galactica.",
      time: "8:30 AM",
    },
    { id: 5, name: "Pam Beesly", message: "Good morning!", time: "8:15 AM" },
    {
      id: 6,
      name: "Jim Halpert",
      message: "Did you see the memo?",
      time: "Yesterday",
    },
    {
      id: 7,
      name: "Angela Martin",
      message: "Please follow up on the accounts.",
      time: "Monday",
    },
    { id: 8, name: "Ryan Howard", message: "Checking in.", time: "Last week" },
    {
      id: 9,
      name: "Kelly Kapoor",
      message: "Can we reschedule?",
      time: "Yesterday",
    },
    {
      id: 10,
      name: "Stanley Hudson",
      message: "Only if it’s important.",
      time: "Tuesday",
    },
    {
      id: 11,
      name: "Andy Bernard",
      message: "Anyone up for lunch?",
      time: "10:05 AM",
    },
    {
      id: 12,
      name: "Toby Flenderson",
      message: "HR paperwork needed.",
      time: "9:30 AM",
    },
    {
      id: 13,
      name: "Oscar Martinez",
      message: "I have the report ready.",
      time: "8:45 AM",
    },
    {
      id: 14,
      name: "Phyllis Vance",
      message: "Got the new supplies!",
      time: "Yesterday",
    },
    {
      id: 15,
      name: "Meredith Palmer",
      message: "Anyone going out tonight?",
      time: "Last Friday",
    },
    {
      id: 16,
      name: "Creed Bratton",
      message: "I’m free at 5.",
      time: "Last week",
    },
    {
      id: 17,
      name: "Holly Flax",
      message: "Can we touch base?",
      time: "Monday",
    },
    {
      id: 18,
      name: "Charles Miner",
      message: "Check your inbox.",
      time: "Tuesday",
    },
    {
      id: 19,
      name: "Jan Levinson",
      message: "Meeting rescheduled.",
      time: "Last Thursday",
    },
    {
      id: 20,
      name: "David Wallace",
      message: "Good work on the project.",
      time: "Wednesday",
    },
    {
      id: 21,
      name: "Robert California",
      message: "Follow up with me.",
      time: "Yesterday",
    },
    {
      id: 22,
      name: "Gabe Lewis",
      message: "See the attachment.",
      time: "Today",
    },
    {
      id: 23,
      name: "Nellie Bertram",
      message: "Discuss it tomorrow.",
      time: "Today",
    },
    {
      id: 24,
      name: "Clark Green",
      message: "Did you get my email?",
      time: "Yesterday",
    },
    {
      id: 25,
      name: "Pete Miller",
      message: "I'll be there soon.",
      time: "Today",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
        <Appbar.Content title="BeshChat" color={theme.colors.onPrimary} />
        <Appbar.Action
          icon="bell-outline"
          color={theme.colors.onPrimary}
          onPress={() => router.push("/home/notification")}
        />
      </Appbar.Header>
      {/* Scrollable Chat List */}
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={chats}
          style={styles.flatList}
          contentContainerStyle={{ paddingBottom: 80 }} // Adjust padding as needed
          renderItem={({ item }) => (
            <Card
              style={{
                marginBottom: 10,
                backgroundColor: theme.colors.surface,
                borderRadius: 8,
              }}
              onPress={() => router.push(`/home/chatroom/${item.id}`)}
            >
              <Card.Title
                title={item.name}
                titleStyle={{ color: theme.colors.onSurface }}
                subtitle={item.message}
                subtitleStyle={{ color: theme.colors.secondaryText }}
                left={(props) => (
                  <Avatar.Text
                    {...props}
                    label={item.name.charAt(0)}
                    style={{ backgroundColor: theme.colors.accent }}
                  />
                )}
                right={() => (
                  <Text
                    style={{
                      color: theme.colors.secondaryText,
                      marginRight: 10,
                    }}
                  >
                    {item.time}
                  </Text>
                )}
              />
            </Card>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
      {/* Floating Action Button for New Chat */}
      <FAB
        icon="message-plus"
        style={[styles.fab, { backgroundColor: theme.colors.accent }]}
        color={theme.colors.onPrimary}
        onPress={() => router.push("/home/newchat")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    zIndex: 2,
    elevation: 4,
  },
});

export default Home;
