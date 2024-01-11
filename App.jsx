import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Stacks from './Components/Stacks';
import store from './store/Store';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container} >
          <Stacks />
      </NavigationContainer>
    </Provider>
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
