import React, { Component } from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import UserItem from './UserItem';

class UserList extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.users.map((user, index) => <UserItem user={user} key={user.id} index={index+1}/>)
          }
        </tbody>
      </Table>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(
  mapStateToProps,
  null
)(UserList);
