import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import { MTextBox } from "./MTextBox";
import { Mbutton } from "@/MButton";

export function LoginBox() {
    const [phone,setPhone] = useState("")
    const [Password,setPassword] = useState("")
     
    const handleLogin = () => {
        console.log(phone)
        console.log(Password)
    }

    return (
        <View className="bg-white h-96 w-[90%] rounded-[10] justify-evenly items-center p-4">
            <CustomText className="text-black text-4xl self-start ml-4">Login</CustomText>
            <MTextBox placeholder="Phone Number" value={phone} onChangeText={setPhone} />
            <MTextBox placeholder="Password" value={Password} onChangeText={setPassword} secureTextEntry/>
            <Mbutton buttontext="Continue" />
            <TouchableOpacity onPress={handleLogin}>
                <Text>Login with OTP</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginBox;
