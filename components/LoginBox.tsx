import { View , Text } from "react-native"
import CustomText from "./CustomText";
import { MTextBox } from "./MTextBox";
import { Mbutton } from "@/MButton";

export function LoginBox() {
    return(
        <View className="bg-white h-96 w-[90%] rounded-[10] justify-evenly items-center ">
            <CustomText className="color-black text-4xl">Login</CustomText>
            <MTextBox placeholder="Phone Number" />
            <MTextBox placeholder="Password" />
            <Mbutton buttontext="Continue"/>            
        </View>
    );
}

export default LoginBox