import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChange, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {

  onEmailChange(text){
    console.log('onEmailChange',text);
    this.props.emailChange(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginButtonPress() {
    const { email, password } = this.props;
    console.log('onLoginButtonPress', this.props);
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style = {styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <CardSection>
          <Button onPress={this.onLoginButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
  console.log('mapStateToProps',auth);
  const { email, password , user, error } = auth;

  return { email, password, user, error };
};
export default connect(mapStateToProps,{
    emailChange,
    passwordChanged,
    loginUser
  })(LoginForm);
