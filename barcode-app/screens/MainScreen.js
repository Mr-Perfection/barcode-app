import React, { Component } from 'react';
import { Button } from 'react-native-elements';

class MainScreen extends Component {

  render() {
    return (
      <Button
        large
        icon={{ name: 'camera-enhance' }}
        title='BUTTON WITH ICON'
        onPress={() => { this.props.navigation.navigate('barcode'); }}
      />
    );
  }
}

export default MainScreen;
