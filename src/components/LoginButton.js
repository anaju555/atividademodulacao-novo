import { Button } from "react-native";

pressButton = () => {
    alert("Oi")
}

export default function LoginButton() {
    return (

        <Button title="Login" onPress={pressButton} />

    )



}
