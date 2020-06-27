import React, {Component} from 'react';
import Scan from './scan';
import SendSMS from 'react-native-sms';

function SendSMSContainer() {
  // Function to send message
  function sendSMS() {
    console.log('sendSMS');
    // alert('clicked');
    SendSMS.send(
      {
        body: 'stop123456!',
        recipients: ['6672047175'],
        successTypes: ['sent', 'queued'],
        allowAndroidSendWithoutReadPermission: true,
      },
      (completed, cancelled, error) => {
        if (completed) {
          console.log('SMS Sent Completed');
        } else if (cancelled) {
          console.log('SMS Sent Cancelled');
        } else if (error) {
          console.log('Some error occured');
        }
      },
    );
  }

  return <Scan sendSMS={sendSMS} />;
}

export default SendSMSContainer;
