import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCj2UmVFHwnSFH7Jf_bcXp_ui8lxXeIEO8',
      authDomain: 'manager-c4e83.firebaseapp.com',
      databaseURL: 'https://manager-c4e83.firebaseio.com',
      storageBucket: 'manager-c4e83.appspot.com',
      messagingSenderId: '46756837334'
    };

    firebase.initializeApp(config);

  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
