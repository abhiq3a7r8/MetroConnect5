import { View, TouchableOpacity, Text } from "react-native";
import { Home, MapPin, Bell, CreditCard } from "lucide-react-native";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: MapPin, label: "Navigate" },
  { icon: Bell, label: "Alerts" },
  { icon: CreditCard, label: "Wallet" },
];

export function Navbar() {
  return (
    <View className="flex-row items-center justify-evenly absolute bottom-0 h-20 rounded-t-3xl w-full bg-zinc-800 z-50">
      {navItems.map(({ icon: Icon, label }) => (
        <TouchableOpacity key={label}>
          <View className="flex items-center">
            <Icon size={32} color="white" />
            <Text className="font-poppinsMedium text-zinc-300 text-xs mt-1">{label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
