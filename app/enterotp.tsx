import { View } from "react-native";
import Mbutton from "@/components/MButton";
import Otpinput from "@/components/Otpinput";
import { useState } from "react";

export function Enterotp() {
    const [otpValue, setOtpValue] = useState("");

    const handleVerify = (otp) => {
        console.log("Verified OTP:", otp);
        // You can add your verification logic here
    };

    const handleOtpChange = (otp) => {
        setOtpValue(otp);
    };

    return (
        <View className="flex-1 items-center justify-center">
            <View className="bg-white h-64 w-[90%] rounded-[10] justify-evenly items-center p-4">
                <Otpinput onChangeOtp={handleOtpChange} />
                <Mbutton buttontext="Verify" onPress={() => handleVerify(otpValue)} />
            </View>
        </View>
    );
}

export default Enterotp;