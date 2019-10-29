import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { delUser } from "../../../Actions/userList";
import { getUser } from "../../../Actions/getUser";
import { toggleModal } from "../../../Actions/toggleModal";

const UserList = props => {
  const { index, user, delUser, getUser, toggle } = props;
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.sdt}</td>
      <td>
        <Button color="danger" onClick={() => delUser(user.id)}>
          Xóa
        </Button>
        &nbsp;
        <Button
          color="primary"
          onClick={() => {
            getUser(user);
            toggle();
          }}
        >
          Sửa
        </Button>
      </td>
    </tr>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    delUser: id => {
      dispatch(delUser(id));
    },
    getUser: user => {
      dispatch(getUser(user));
    },
    toggle: () => {
      dispatch(toggleModal());
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(UserList);
