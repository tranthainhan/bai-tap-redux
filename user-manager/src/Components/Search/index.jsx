import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import { connect } from "react-redux";
import { search } from "../../Actions/userList";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    };
  };
  onChange = (e) => {
    this.setState({
      key: e.target.value
    }, () => this.props.search(this.state.key))
  };
  render() {
    return (
      <InputGroup className="mt-3 mb-3">
        <Input placeholder="username" value={this.state.key} onChange={(e) => this.onChange(e)}/>
        <InputGroupAddon addonType="append">
          <Button color="primary">Tìm kiếm</Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    search: key => {
      dispatch(search(key));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Search);
