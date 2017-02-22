import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Spinner } from './Spinner';
import { CardSection } from './CardSection';
import { Button } from './Button';

const ProgressDialog = ({ visible }) => {
const { containerStyle, textStyle, cardSectionStyle } = styles;
  return (
    <Modal
    visible={visible}
    transparent
    onRequestClose={() => {}}>
    <View style={containerStyle}>
      <CardSection style={ cardSectionStyle }>
        <Spinner />
      </CardSection>
    </View>
    </Modal>
  );

};

const styles = {
    cardSectionStyle: {
      justifyContent: 'center',
      width: 100,
      height: 100,
      borderRadius: 10
    },
    containerStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      position: 'relative',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    }
};
export { ProgressDialog };
