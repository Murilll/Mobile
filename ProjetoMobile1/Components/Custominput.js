import { TextInput } from "react-native";

const CustomInput = (props) => {
    return (
        <TextInput
            placeholder='E-mail'
            value={props.value}
            onChangeText={(text) => setEmailInputValue(text)}
        ></TextInput>
    )
}

export default CustomInput; 