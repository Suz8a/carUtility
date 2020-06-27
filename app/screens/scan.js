import React from 'react';
import {Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';

function Scan({stopEngine, startEngine, alarmOn, alarmOff}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.start} onPress={startEngine}>
        <Text style={styles.startText}>Start Engine</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.stop} onPress={stopEngine}>
        <Text style={styles.stopText}>Stop Engine</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.alarmOn} onPress={alarmOn}>
        <Text style={styles.stopText}>Turn On Alarm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.alarmOff} onPress={alarmOff}>
        <Text style={styles.stopText}>Turn Off Alarm</Text>
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
  start: {
    width: '80%',
    height: '8%',
    backgroundColor: '#82b74b',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  stop: {
    width: '80%',
    height: '8%',
    backgroundColor: '#c83349',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  alarmOn: {
    width: '80%',
    height: '8%',
    backgroundColor: '#034f84',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  alarmOff: {
    width: '80%',
    height: '8%',
    backgroundColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  stopText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
  startText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default Scan;
