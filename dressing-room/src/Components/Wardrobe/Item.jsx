import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { addItem, delItem } from "../../Actions/ChosenItem";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: false
    };
  }
  toggle = () => {
    if (this.state.chosen === true) {
      this.props.delItem(this.props.img);
    } else {
      this.props.addItem(this.props.img);
    }
  };
  static getDerivedStateFromProps = (props, state) => {
    let { chosenItemList, img } = props;
    let chosenItem = chosenItemList.find(
      item => item.type === img.type && item.imgSrc_jpg === img.imgSrc_jpg
    );
    if(!chosenItem){
      return {
        chosen: false
      }
    }else {
      return {
        chosen: true
      }
    }
  };
  render() {
    const { img } = this.props;
    return (
      <div className="item">
        <img src={img.imgSrc_jpg} alt={img.imgSrc_jpg}></img>
        <Button color="success" onClick={this.toggle}>
          Thử đồ
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    chosenItemList: state.ChosenItem
  };
};
const mapDispatchtoProps = dispatch => {
  return {
    addItem: item => {
      dispatch(addItem(item));
    },
    delItem: item => {
      dispatch(delItem(item));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Item);
