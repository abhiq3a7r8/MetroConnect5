import { TextInput } from "react-native";

interface MTextProp {
    placeholder: string;
    value?: string;  
    onChangeText?: (text: string) => void;  
    secureTextEntry?: boolean;  
}

export function MTextBox({ placeholder, value, onChangeText, secureTextEntry }: MTextProp) {
    return (
        <TextInput
            className="w-[90%] h-14 bg-slate-100 stroke-slate-600 text-lg rounded-lg p-3"
            placeholder={placeholder}
            placeholderTextColor="#94a3b8"
            value={value}  
            onChangeText={onChangeText}  
            secureTextEntry={secureTextEntry}  
        />
    );
}
