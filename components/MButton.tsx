import { Poppins_100Thin, Poppins_100Thin_Italic } from "@expo-google-fonts/poppins";
import { TouchableOpacity, Text, View } from "react-native";

interface MTextProp {
  buttontext: string;
  onPress?: () => void; // Add onPress prop
}

export function Mbutton({ buttontext , onPress}: MTextProp) {
  return (
    <TouchableOpacity 
      style={{
        backgroundColor: '#3B82F6',
        width: '90%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
      }}
      onPress={onPress}
    > 
      <Text className="font-poppinsMedium" style={{ color: 'white', fontSize: 18 }}>
        {buttontext}
      </Text>
    </TouchableOpacity>
  );
}

export default Mbutton;
