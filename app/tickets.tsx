import { View } from "react-native"
import QRticket from "@/components/QRticket"
import { Navbar } from "@/components/Navbar"

export function tickets(){
    return(
        <View className="flex-1 items-center">
            <QRticket  />
            <Navbar />
        </View>
    )
}

export default tickets