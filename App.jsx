import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Stacks from './Components/Stacks';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  return (
      <NavigationContainer style={styles.container} >
          <Stacks />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
  },
});
