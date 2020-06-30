import React from 'react';
import {Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';

function Scan({sendCommand}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => sendCommand('engine')}>
        <Text style={styles.text}>Switch Engine</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => sendCommand('alarm')}>
        <Text style={styles.text}>Switch Alarm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 200,
    backgroundColor: '#82b74b',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 200,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default Scan;
