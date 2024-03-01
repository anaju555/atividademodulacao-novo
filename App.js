import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Login from './src/pages/Login';
import { styles } from './src/assets/styles/StylesTexts';
export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>

  );
}




