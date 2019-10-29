import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import "./style.scss";
import Closet from "../../Model/Closet";
import Item from "./Item";

export default class Wardrobe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: Closet[0].type,
    };
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) this.setActiveTab(tab);
  };
  setActiveTab = tab => {
    this.setState({
      activeTab: tab
    });
  };
  render() {
    const { activeTab } = this.state;
    const { toggle } = this;
    return (
      <div className="Closet">
        <Nav tabs className="border-0 mb-3">
          {Closet.map(item => {
            return (
              <NavItem key={item.type}>
                <NavLink
                  className={classnames({ active: activeTab === item.type })}
                  onClick={() => {
                    toggle(item.type);
                  }}
                >
                  {item.name}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>

        <TabContent activeTab={activeTab}>
          {Closet.map((item) => {
            return (
              <TabPane tabId={item.type} key={item.type}>
                <Row>
                  <Col sm="12" className='wrapItem'>
                    {item.ListItem.map(img => <Item img={img} key={img.imgSrc_jpg}/>)}
                  </Col>
                </Row>
              </TabPane>
            );
          })}
        </TabContent>
      </div>
    );
  }
}
