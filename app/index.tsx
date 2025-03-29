import { View , Text } from "react-native";
import { LoginBox } from "@/components/LoginBox";


export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
        <Text className="color-black text-4xl mb-16 font-poppinsMedium">MetroConnect5</Text>
        <LoginBox />
    </View>
  );
}
