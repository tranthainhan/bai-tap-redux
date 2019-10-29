import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { toggleModal } from "../../Actions/toggleModal";
import { addUser, updateUser } from "../../Actions/userList";
import { resetUserSelected } from "../../Actions/getUser";

class ModalMy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      sdt: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  reset = () => {
    this.setState({
      id: "",
      name: "",
      email: "",
      sdt: ""
    });
  };
  static getDerivedStateFromProps = (props, state) => {
    const user = props.userSelected;
    if (user && user.id !== state.id) {
      const { id, name, sdt, email } = user;
      return {
        id,
        name,
        email,
        sdt
      };
    }
    return null;
  };
  render() {
    const { isOpen, addUser, toggle, userSelected, updateUser } = this.props;
    const { name, email, sdt } = this.state;
    return (
      <div>
        <Button
          color="danger"
          onClick={() => {
            toggle();
            this.reset();
            this.props.resetUserSelected();
          }}
        >
          Thêm
        </Button>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Họ và tên:</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Mời nhập vào họ và tên"
                value={name}
                onChange={e => this.onChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Mời nhập vào email"
                value={email}
                onChange={e => this.onChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="sdt">Số điện thoại</Label>
              <Input
                type="number"
                name="sdt"
                id="sdt"
                placeholder="Mời nhập vào số điện thoại"
                value={sdt}
                onChange={e => this.onChange(e)}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            {userSelected ? (
              <Button
                color="primary"
                onClick={() => {
                  updateUser(this.state);
                  toggle();
                }}
              >
                Sua
              </Button>
            ) : (
              <Button
                color="primary"
                onClick={() => {
                  addUser(this.state);
                  toggle();
                }}
              >
                Thêm
              </Button>
            )}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.toggleModal,
    userSelected: state.userSelected
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggle: () => {
      dispatch(toggleModal());
    },
    addUser: user => {
      dispatch(addUser(user));
    },
    resetUserSelected: () => {
      dispatch(resetUserSelected());
    },
    updateUser: user => {
      dispatch(updateUser(user));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalMy);
