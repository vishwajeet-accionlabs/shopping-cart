import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Menu.css";

class Abouthover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      imgsrc: ""
    };
  }

  handleMouseHover = path => {
    this.setState({ imgsrc: path, isHovering: true });
  };

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
      imgsrc: state.imgsrc
    };
  }

  render() {
    return (
      <div className="img-container-div">
        <div className="img-thumb-div">
          <div
            onMouseEnter={() => this.handleMouseHover("./images/imax11_1.jpg")}
            onMouseLeave={() => this.handleMouseHover("./images/imax11_1.jpg")}
          >
            <img
              src={"./images/imax11_1.jpg"}
              alt="iphone11"
              className="img-thumb"
              id="img1"
            />
          </div>
          <div
            onMouseEnter={() => this.handleMouseHover("./images/imax11_2.jpg")}
            onMouseLeave={() => this.handleMouseHover("./images/imax11_2.jpg")}
          >
            <img
              src={"./images/imax11_2.jpg"}
              alt="iphone11"
              className="img-thumb"
              id="img2"
            />
          </div>
          <div
            onMouseEnter={() => this.handleMouseHover("./images/imax11_3.jpg")}
            onMouseLeave={() => this.handleMouseHover("./images/imax11_3.jpg")}
          >
            <img
              src={"./images/imax11_3.jpg"}
              alt="iphone11"
              className="img-thumb"
              id="img3"
            />
          </div>
        </div>
        <div className="img-div">
          {this.state.isHovering && (
            <div>
              <img
                src={this.state.imgsrc}
                className="img-thumb-hover"
                alt="iPhone11"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Abouthover;
