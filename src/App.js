import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {},
                    applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
