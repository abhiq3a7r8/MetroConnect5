import { View , Text, ScrollView , StyleSheet } from "react-native"
import BarChartComponent from "@/components/BarChartComponent";
import Metrostatus from "@/components/Metrostatus";

export function admin(){
    return(
        <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} >
            <Text className="font-poppinsMedium text-3xl mt-8">Admin Dashboard</Text>
            <View className="mt-8 bg-white h-48 w-[90%] rounded-[10]  items-center p-4 flex-row justify-between">
                
                <View>
                <Text className="self-start font-poppins text-xl">All Systems</Text>
                <Text className="self-start font-poppins text-3xl text-green-600">Operational</Text>
                </View>
                <View className="h-8 w-8 rounded-full bg-green-600"></View>
                <View className="h-8 w-8 rounded-full bg-green-600"></View>
                <View className="h-8 w-8 rounded-full bg-slate-300"></View>
            </View>
        
            <BarChartComponent
                    data={[
                        { value: 250, label: 'M' },
                        { value: 500, label: 'T', frontColor: '#177AD5' },
                        { value: 745, label: 'W', frontColor: '#177AD5' },
                        { value: 320, label: 'T' },
                        { value: 600, label: 'F', frontColor: '#177AD5' },
                        { value: 256, label: 'S' },
                        { value: 300, label: 'S' },
                    ]}
                />
            
            <ScrollView className="mt-8 bg-white h-72 w-[90%] rounded-[10]  items-center p-4">
                <Metrostatus 
                lineNumber="4"
                bgColor="bg-blue-200"
                nextTrainTime="3"
                />
                <Metrostatus 
                lineNumber="7"
                bgColor="bg-purple-200"
                nextTrainTime="5"
                />
                                <Metrostatus 
                lineNumber="4"
                bgColor="bg-green-200"
                nextTrainTime="6"
                />
                <Metrostatus 
                lineNumber="5"
                bgColor="bg-orange-200"
                nextTrainTime="5"
                />
                                <Metrostatus 
                lineNumber="6"
                bgColor="bg-pink-200"
                nextTrainTime="3"
                />
                <Metrostatus 
                lineNumber="14"
                bgColor="bg-purple-200"
                nextTrainTime="5"
                />
            </ScrollView>
            
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6", 
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center", // Centers children horizontally
    paddingBottom: 80, // Prevents overlap with Navbar
  },
});

export default admin
