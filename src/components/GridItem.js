import React, { Component } from "react";
import styled from "styled-components";
export default class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullGrid: false
    };
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        fullGrid: !prevState.fullGrid
      };
    });
  };

  render() {
    const { rowStart, colStart, rowEnd, colEnd, background } = this.props;
    return (
      <StyledGridItem
        rowStart={rowStart}
        colStart={colStart}
        rowEnd={rowEnd}
        colEnd={colEnd}
        fullGrid={this.state.fullGrid}
        onClick={this.handleClick}
        background={background}
      />
    );
  }
}

const StyledGridItem = styled.div`
  grid-area: ${props =>
    !props.fullGrid
      ? `${props.rowStart} / ${props.colStart} / ${props.rowEnd} / ${
          props.colEnd
        } `
      : `1 / 1 / 4 / 4`};
  height: 250px;
  width: 250px;
  transition: all 1s ease-in-out;
  background-color: ${props => `${props.background}`};
  flex: auto;
`;
