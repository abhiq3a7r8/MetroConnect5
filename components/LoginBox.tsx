import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import CustomText from "./CustomText";
import { MTextBox } from "./MTextBox";
import { Mbutton } from "@/MButton";

export function LoginBox() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        console.log(phone); 
        const response = await fetch("https://38c2-150-242-205-54.ngrok-free.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ phone, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            Alert.alert("Login Failed", errorData.message || "Login failed due to an unknown error.");
            return;
        }

        const data = await response.json();
        Alert.alert("Login Successful", data.message || "Login successful!");
        
    };

    return (
        <View className="bg-white h-96 w-[90%] rounded-[10] justify-evenly items-center p-4">
            <CustomText className="text-black text-4xl self-start ml-4">Login</CustomText>
            <MTextBox placeholder="Phone Number" value={phone} onChangeText={setPhone} />
            <MTextBox placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Mbutton buttontext="Continue" onPress={handleLogin} /> 
            <TouchableOpacity onPress={() => Alert.alert("OTP Login", "OTP login functionality not implemented.")}>
                <Text>Login with OTP</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginBox;