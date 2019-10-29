import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";

class DressingRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationChosen: [
        { location: "topclothes", chosen: false },
        { location: "botclothes", chosen: false },
        { location: "shoes", chosen: false },
        { location: "handbags", chosen: false },
        { location: "necklaces", chosen: false },
        { location: "models", chosen: false },
        { location: "hairstyle", chosen: false },
        { location: "background", chosen: false }
      ]
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.chosenItem.length === 0) {
      return {
        locationChosen: [
          { location: "topclothes", chosen: false },
          { location: "botclothes", chosen: false },
          { location: "shoes", chosen: false },
          { location: "handbags", chosen: false },
          { location: "necklaces", chosen: false },
          { location: "models", chosen: false },
          { location: "hairstyle", chosen: false },
          { location: "background", chosen: false }
        ]
      };
    } else {
      let newlocationChosen = state.locationChosen.map(item => {
        let index = props.chosenItem.findIndex(item1 => item1.type === item.location)
        if ( index !== -1 ) {
          item.chosen = props.chosenItem[index].imgSrc_png;
        }else{
          item.chosen = false;
        }
        return item;
      });
      return {
        locationChosen: newlocationChosen
      };
    }
  }
  render() {
    const { locationChosen } = this.state;
    return (
      <div className="Dressing-Room">
        <div className="bg-room">
          <div className="head"></div>
          <div className="bikini-top"></div>
          <div className="bikini-bottom"></div>
          <div className="body"></div>
          <div className="foot-left"></div>
          <div className="foot-right"></div>
          {locationChosen.map(item => {
            return (
              item.chosen  && (
                <div
                  className={item.location}
                  style={{ backgroundImage: `url(${item.chosen})` }}
                ></div>
              )
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    chosenItem: state.ChosenItem
  };
};
export default connect(
  mapStateToProps,
  null
)(DressingRoom);
