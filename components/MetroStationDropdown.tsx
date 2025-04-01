import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";

const MetroStationDropdown = ({ zIndex, placeholder }) => {
  const [stations, setStations] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedStation, setSelectedStation] = useState(null);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/stations");
        const stationList = response.data.map((station) => ({
          label: station.station_name,
          value: station.station_name,
        }));
        setStations(stationList);
      } catch (error) {
        console.error("Error fetching stations:", error);
      }
    };

    fetchStations();
  }, []);

  return (
    <View style={[styles.container, { zIndex: zIndex }]}>
      <DropDownPicker
        open={open}
        value={selectedStation}
        items={stations}
        setOpen={setOpen}
        setValue={setSelectedStation}
        setItems={setStations}
        placeholder={placeholder}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropDownContainer}
        textStyle={styles.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  dropdown: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  dropDownContainer: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: "#374151",
  },
});

export default MetroStationDropdown;