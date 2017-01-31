import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

  const { inputStyle, labelStyle, constainerStyle } = styles;

    return (
      <View style={constainerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
        // onChangeText={text => this.setState({ text:text })}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          style={inputStyle}
        />
      </View>
    );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    color: '#000',
    paddingLeft: 20,
    flex: 1
  },
  constainerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
