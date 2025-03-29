import { View , Text } from "react-native"
import CustomText from "./CustomText";
import { MTextBox } from "./MTextBox";

export function LoginBox() {
    return(
        <View className="bg-white h-96 w-[90%] rounded-[16] justify-evenly items-center ">
            <CustomText className="color-black text-4xl">Login</CustomText>
            <MTextBox placeholder="Phone Number" />
            <MTextBox placeholder="Password" />            
        </View>
    );
}

export default LoginBox