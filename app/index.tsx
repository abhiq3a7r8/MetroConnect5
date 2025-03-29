import { View , Text , Image } from "react-native";
import { LoginBox } from "@/components/LoginBox";


export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
        <Image source={require("@/assets/login.png")} className="mb-4"/>
        <Text className="color-black text-4xl mb-16 font-poppinsMedium">Metro Connect 5</Text>
        <LoginBox />
    </View>
  );
}
