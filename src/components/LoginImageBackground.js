import { ImageBackground } from "react-native";
import LoginButton from "./LoginButton";
import LoginImage from "./LoginImage";
import LoginInput from "./LoginInput";
import LoginText from "./LoginText";
import { styles } from "../assets/styles/StylesTexts";

export default function LoginImageBackground() {
    return (
        <ImageBackground source={require('../assets/imagens/fundo.png')} style={styles.image}>
   <LoginText/>
   <LoginInput/>
   <LoginButton/>
   <LoginImage/>
        </ImageBackground>
    )
}