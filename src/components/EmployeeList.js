import React, { Component } from 'react';
import _ from 'lodash';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
    this.createDataSourece(this.props);
  }

  componentWillReceiveProps(nextProps){
    //nextProps are the next set of props
    // this.props is still old set of props
    this.createDataSourece(nextProps);
  }

  createDataSourece({ employees }){
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee){
    return <ListItem data={employee} />;
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employeeList, (val, uid) => {
    return {...val, uid };
  })

  return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
