import React, {Component} from 'react';
import Scan from './scan';
import SendSMS from 'react-native-sms-x';
import {ToastAndroid} from 'react-native';

function SendSMSContainer() {
  // Function to send message
  function sendSMS() {
    console.log('sendSMS');
    // alert('clicked');
    SendSMS.send(1, '6672047175', 'stop123456', () => {
      ToastAndroid.show('Engine stoped', ToastAndroid.SHORT);
    });
  }

  return <Scan sendSMS={sendSMS} />;
}

export default SendSMSContainer;
