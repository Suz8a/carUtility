import React, {Component} from 'react';
import Scan from './scan';
import SendSMS from 'react-native-sms-x';
import {ToastAndroid} from 'react-native';

function SendSMSContainer() {
  // Function to send message
  function startEngine() {
    SendSMS.send(1, '6672047175', 'resume123456', () => {
      ToastAndroid.show('Engine started', ToastAndroid.SHORT);
    });
  }
  function stopEngine() {
    SendSMS.send(1, '6672047175', 'stop123456', () => {
      ToastAndroid.show('Engine stoped', ToastAndroid.SHORT);
    });
  }
  function alarmOn() {
    SendSMS.send(1, '6672047175', 'arm123456', () => {
      ToastAndroid.show('Alarm ON', ToastAndroid.SHORT);
    });
  }
  function alarmOff() {
    SendSMS.send(1, '6672047175', 'disarm123456', () => {
      ToastAndroid.show('Alarm OFF', ToastAndroid.SHORT);
    });
  }

  return (
    <Scan
      startEngine={startEngine}
      stopEngine={stopEngine}
      alarmOn={alarmOn}
      alarmOff={alarmOff}
    />
  );
}

export default SendSMSContainer;
