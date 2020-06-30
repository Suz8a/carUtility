import React from 'react';
import {TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

function Scan({sendCommand, lockIcon, powerColor, lockIconColor}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => sendCommand('engine')}>
        <Icon name="power" size={70} color={powerColor} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => sendCommand('alarm')}>
        <Icon name={lockIcon} size={70} color={lockIconColor} />
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
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 200,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default Scan;
