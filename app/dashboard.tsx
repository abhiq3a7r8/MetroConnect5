import { View, ScrollView, StyleSheet } from "react-native";
import HomeWidget from "@/components/HomeWidget";
import { Navbar } from "@/components/Navbar";
import HomeHeader from "@/components/HomeHeader";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HomeHeader />
        <HomeWidget />
      </ScrollView>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6", 
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center", // Centers children horizontally
    paddingBottom: 80, // Prevents overlap with Navbar
  },
});
