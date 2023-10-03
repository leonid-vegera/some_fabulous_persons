import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { PersonCard } from './components/PersonCard';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <PersonCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2c8c8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
