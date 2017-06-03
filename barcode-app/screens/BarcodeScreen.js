import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Components, Permissions } from 'expo';

class BarcodeScreen extends Component {
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleBarCodeRead = (data) => {
    Alert.alert(
      'barcode data',
      JSON.stringify(data),
      [
        { text: 'Ok.' }
      ]
    );
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <Components.BarCodeScanner
          onBarCodeRead={this.handleBarCodeRead}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }
}

export default BarcodeScreen;
