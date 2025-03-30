import { View , Text , TouchableOpacity } from "react-native"
import { MTextBox } from "./MTextBox"
import Mbutton from "./MButton"
export function HomeWidget(){
    return(
        <View className="bg-white h-[400] w-[90%] rounded-[10] justify-evenly items-center p-4">
            <View className="self-start ml-5">
                <Text className="font-poppinsMedium text-4xl">Find Your</Text>
                <Text className="font-poppinsMedium text-4xl">Metro Route</Text>
            </View>
            <MTextBox placeholder="Starting Station"/>
            <MTextBox placeholder="Ending Station"/>
            <Mbutton buttontext="Find"/>
        </View>
    )
}

export default HomeWidget