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
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
      }}
      onPress={onPress}
    > 
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
        {buttontext}
      </Text>
    </TouchableOpacity>
  );
}

export default Mbutton;
