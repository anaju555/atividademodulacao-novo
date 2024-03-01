import { TextInput, View } from "react-native";
import { styles } from "../assets/styles/StylesTexts";
export default function LoginInput() {
    return (
        <View>
            <TextInput placeholder="digite seu email" style={styles.input}/>
            <TextInput placeholder="digite sua senha" style={styles.input} secureTextEntry={true}/> 
        </View>
    )
}