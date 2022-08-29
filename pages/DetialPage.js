import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const DetialPage = () => {
  return (
    <View style={styles.container}>
      <Text>Show Detial</Text>
    </View>
  );
};

export default DetialPage;
