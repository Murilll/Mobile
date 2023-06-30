import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#46387C',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#00D8FF',
      width: 156,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
    },
    buttonText: { color: '#302850', fontSize: 16 },
    item: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#00D8FF',
      margin: 15,
      borderRadius: 15,
      width: '50%',
    },
    containerListagem: {
      backgroundColor: '#46387C',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    }
});


  
export default styles;
  