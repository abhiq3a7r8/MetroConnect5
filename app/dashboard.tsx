import { View , Text , Image } from "react-native";
import { LoginBox } from "@/components/LoginBox";
import { Navbar } from "@/components/Navbar";


export default function Dashboard() {
  return (
    <View className="flex-1 bg-gray-100">
        <Navbar />
    </View>
  );
}
