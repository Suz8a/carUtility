import React, {Component, Fragment} from 'react';
import styles from './scanStyle';
import {View, StatusBar, Image, Text, TouchableOpacity} from 'react-native';

function Scan({sendSMS}) {
  const desccription =
    "Use this RN component to send an SMS with a callback (completed/cancelled/error). iOS and Android are both supported.Currently, only user-initiated sending of an SMS is supported. This means you can't use react-native-sms to send an SMS in the background-- this package displays the native SMS view (populated with any recipients/body you want), and gives a callback describing the status of the SMS (completed/cancelled/error)";
  const imageUri =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sms.png';
  return (
    <View style={styles.scrollViewStyle}>
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <Image
          source={{uri: imageUri}}
          style={{width: 70, height: 70, alignSelf: 'center'}}
        />

        <Text style={styles.textTitle}>
          Welcome To React-Native Send, Get and read SMS Tutorial !
        </Text>
        <View style={styles.cardView}>
          <Text numberOfLines={8} style={styles.descText}>
            {desccription}
          </Text>
          <TouchableOpacity onPress={sendSMS} style={styles.buttonTouchable}>
            <Text style={styles.buttonTextStyle}> Send SMS !</Text>
          </TouchableOpacity>
        </View>
      </Fragment>
    </View>
  );
}

export default Scan;
