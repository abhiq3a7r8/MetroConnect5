import { useState } from "react";
import { router, useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import CustomText from "./CustomText";
import { MTextBox } from "./MTextBox";
import Mbutton from "./MButton";

export function LoginBox() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async () => {
        console.log("Phone:", phone);
        
        try {
            const response = await fetch("https://5733-125-99-93-18.ngrok-free.app/login", {
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
    
            router.replace("/enterotp");
    
            
            await fetch("https://4265-125-99-93-18.ngrok-free.app/send-otp");
    
            console.log("OTP request sent.");
        } catch (error) {
            console.error("Error during login:", error);
            Alert.alert("Error", "Something went wrong. Please try again.");
        }
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