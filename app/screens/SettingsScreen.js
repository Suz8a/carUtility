import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>settings screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsScreen;
