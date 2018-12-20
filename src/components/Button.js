import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.handleButtonClick(this.props.direction, this.props.id);
  }

  render() {
    let { id, direction, handleButtonClick } = this.props;
    return (
      <div className="btn">
        {direction === "up" ? (
          <button id={id} onClick={this.clickHandler}>
            <i className="fas fa-arrow-up" />
          </button>
        ) : (
          <button id={id} onClick={this.clickHandler}>
            <i className="fas fa-arrow-down" />
          </button>
        )}
      </div>
    );
  }
}
