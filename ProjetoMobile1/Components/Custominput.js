import { TextInput } from "react-native";

const CustomInput = (props) => {
    return (
        <TextInput
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.funcao}
            secureTextEntry={props.isPassword ? true : false}
        >
        </TextInput>
    )
}

export default CustomInput; 