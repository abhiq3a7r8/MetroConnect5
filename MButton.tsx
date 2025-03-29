import { TouchableOpacity, Text, View } from "react-native";

interface MTextProp {
  buttontext: string;
}

export function Mbutton({ buttontext }: MTextProp) {
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
    > 
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
        {buttontext}
      </Text>
    </TouchableOpacity>
  );
}

export default Mbutton;
