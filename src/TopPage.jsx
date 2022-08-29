import React from 'react';
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

const TopPage = ({ navigation }) => {
  const title = 'Hello React Native';
  const handleToDetial = () => {
    navigation.navigate('Detial');
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{title}</Text>
      <Button title="Detial" onPress={handleToDetial} />
    </View>
  );
};

export default TopPage;
