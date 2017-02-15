import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';


class EmployeeEdit extends Component {

  componentWillMount() {
    console.log('componentWillMount',this.props.employee);
    _.each(this.props.employee, (value, prop) => {
        console.log('componentWillMount',value,prop);
        this.props.employeeUpdate( { prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    const uid = this.props.employee.uid;
    this.props.employeeSave( { name, phone, shift, uid});
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }
  render() {
    return (
      <Card>
        <EmployeeForm { ...this.props}/>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  console.log("employee create" , state.employeeForm);
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave
})(EmployeeEdit);
