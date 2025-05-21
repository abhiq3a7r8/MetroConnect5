import { TouchableOpacity, View } from "react-native";
import Mbutton from "@/components/MButton";
import Otpinput from "@/components/Otpinput";
import { useState } from "react";
import { router } from "expo-router";

export function Enterotp() {
    const [otpValue, setOtpValue] = useState("");

    const handleVerify = async (otp) => {
        console.log(otp)
        try {
            const response = await fetch("http://192.168.168.100:3001/verify-otp", {
                
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ otp }),
            });
    
            const data = await response.json();
    
            if (data.success) {
                console.log("OTP Verified Successfully:", data.message);
                router.replace("/dashboard")
            } else {
                console.log("OTP Verification Failed:", data.message);
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
        }
    };

    const handleOtpChange = (otp) => {
        setOtpValue(otp);
    };

    const handleSkip = () => {
        router.push("/dashboard")
    };

    return (
        <View className="flex-1 items-center justify-center">
            <TouchableOpacity accessibilityLabel="skipper" onPress={handleSkip}>
            <View className="h-10 w-10 bg-slate-50"></View>
            </TouchableOpacity>
            <View className="bg-white h-64 w-[90%] rounded-[10] justify-evenly items-center p-4">
                <Otpinput  onChangeOtp={handleOtpChange} />
                <Mbutton accessibilityLabel="otp_button" buttontext="Verify" onPress={() => handleVerify(otpValue)} />
            </View>
        </View>
    );
}

export default Enterotp;