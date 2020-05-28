import React, { Component } from 'react';
import {View } from 'react-native'
import { Provider } from 'react-redux';
import { store } from './store';
import Nav from './components/Nav';
import { setLocalNotification } from './utils/notifications';

export default class App extends Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, paddingTop: 22 }}>
          <Nav />
        </View>
      </Provider>
    )
  }
  
}
