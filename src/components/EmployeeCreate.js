import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    onCreateButtonPressed(){
        const { name, phone, shift } = this.props;
        this.props.employeeCreate( {name, phone, shift: shift || 'Monday' });
    }

    render(){
      return (
          <Card>
            <EmployeeForm { ...this.props}/>
            <CardSection>
              <Button
                onPress={this.onCreateButtonPressed.bind(this)}>
                Create
              </Button>
            </CardSection>
          </Card>
      );
    }
}


/**
solate which parts of the overall state this component needs as its props
**/
const mapStateToProps = (state) => {
  // state - entire Redux store
  // state.employeeForm is defined in combineReducers
  const { name, phone, shift } = state.employeeForm;

  //The object's properties will become "props" on the component.
  return { name, phone, shift };
}

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate
})(EmployeeCreate);
