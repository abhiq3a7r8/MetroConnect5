import React, { useState } from "react";
import { View, Text } from "react-native";
import MButton from "./MButton";
import MetroStationDropdown from "./MetroStationDropdown";

export function HomeWidget({ onRouteFound }) {
  const [startStation, setStartStation] = useState("");
  const [endStation, setEndStation] = useState("");

  const handleFindRoute = () => {
    if (startStation && endStation) {
      onRouteFound(startStation, endStation); // Pass data to Dashboard
    }
  };

  return (
    <View className="bg-white h-[400] w-[90%] rounded-[10] justify-evenly items-center p-4">
      <View className="self-start ml-5">
        <Text className="font-poppinsMedium text-4xl">Find Your</Text>
        <Text className="font-poppinsMedium text-4xl">Metro Route</Text>
      </View>

      {/* Dropdowns */}
      <MetroStationDropdown zIndex={400} placeholder="Starting Station" onSelect={setStartStation} />
      <MetroStationDropdown zIndex={200} placeholder="Ending Station" onSelect={setEndStation} />

      {/* Find Button */}
      <MButton buttontext="Find" onPress={handleFindRoute} />
    </View>
  );
}

export default HomeWidget;
