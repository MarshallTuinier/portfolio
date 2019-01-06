import React, { Component } from "react";
import posed from "react-pose";

class Transition extends Component {
  state = { isVisible: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 125);
  }

  render() {
    const { isVisible } = this.state;
    return (
      <Reveal
        pose={isVisible ? "visible" : "hidden"}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {this.props.children}
      </Reveal>
    );
  }
}

const Reveal = posed.div({
  hidden: { opacity: 0, transform: "scale(0.95)" },
  visible: { opacity: 1, transform: "scale(1)" },
  transition: {
    opacity: { ease: "easeOut", duration: 3000 },
    transform: { ease: "easeOut", duration: 3000 },
  },
});

export { Transition };
