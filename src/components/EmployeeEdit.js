import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions';
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
    console.log(name, phone, shift);
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
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  console.log("employee create" , state.employeeForm);
  return { name, phone, shift };
};

export default connect(mapStateToProps,{ employeeUpdate })(EmployeeEdit);
