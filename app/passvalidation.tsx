import { View , Text, ScrollView } from "react-native"
import MetroPass from "@/components/PassComponent"
import ApplyPass from "@/components/ApplyForPass"

export function passvalidation(){
    return( 
        
        <ScrollView>
            <Text className="font-poppinsMedium self-center text-3xl mt-4">Metro Pass</Text>
            <MetroPass />
            <ApplyPass />
        </ScrollView>
    )
}

export default passvalidation