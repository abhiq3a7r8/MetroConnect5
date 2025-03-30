import { View , Text , Image } from "react-native";
import HomeWidget from "@/components/HomeWidget";
import { Navbar } from "@/components/Navbar";
import { Home } from "lucide-react-native";



export default function Dashboard() {
  return (
    <View className="flex-1 bg-gray-100 items-center justify-center">
        <HomeWidget />
        <Navbar />
    </View>
  );
}
