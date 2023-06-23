import { TextInput } from "react-native";
import { StyleSheet } from "react-native";

const CustomInput = (props) => {
    return (
        <TextInput
            style={styles.inputWrapper}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.funcao}
            placeholderTextColor={'#00D8FF'}
            secureTextEntry={props.isPassword ? true : false}
        >
        </TextInput>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        width: 306,
        height: 45,
        backgroundColor: '#302850',
        borderRadius: 5,
        color: '#00D8FF',
        paddingLeft: 15,
        paddingRight: 15,
    }
})

export default CustomInput; 