import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './assets/onboard.svg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Helllo World!</Text>
      <Logo  width={300}></Logo>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
