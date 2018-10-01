import React, { Component } from "react";
import PageTransition from "gatsby-plugin-page-transitions";

class Transition extends Component {
  render() {
    return (
      <PageTransition
        defaultStyle={{
          opacity: "0",
          transform: "scale(0.95)",
          transition: "all 625ms ease-out"
        }}
        transitionStyles={{
          entering: { opacity: "1", transform: "scale(1)" },
          entered: { opacity: "1", transform: "scale(1)" },
          exiting: { opacity: "0", transform: "scale(0.5)" }
        }}
        transitionTime={625}
      >
        {this.props.children}
      </PageTransition>
    );
  }
}

class BlurBg extends Component {
  render() {
    return (
      <PageTransition
        defaultStyle={{
          filter: "blur(2px)",
          background: " #000",
          margin: 0,
          position: "fixed",
          width: "100%",
          height: "100vh",
          top: "0",
          left: "0",
          transform: "scale(1.1)",
          transition: "filter 625ms ease-out"
        }}
        transitionStyles={{
          entering: { filter: "blur(0px)" },
          entered: { filter: "blur(0px)" },
          exiting: { filter: "blur(0px)" }
        }}
        transitionTime={625}
      >
        {this.props.children}
      </PageTransition>
    );
  }
}

export { Transition, BlurBg };
