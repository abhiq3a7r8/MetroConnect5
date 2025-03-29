import { View, Text, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import { MTextBox } from "./MTextBox";
import { Mbutton } from "@/MButton";

export function LoginBox() {
    return (
        <View className="bg-white h-96 w-[90%] rounded-[10] justify-evenly items-center p-4">
            <CustomText className="text-black text-4xl self-start ml-4">Login</CustomText>
            <MTextBox placeholder="Phone Number" />
            <MTextBox placeholder="Password" />
            <Mbutton buttontext="Continue" />
            <TouchableOpacity>
                <Text>Login with OTP</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginBox;
