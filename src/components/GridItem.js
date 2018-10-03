import React, { Component } from "react";
import styled from "styled-components";
export default class GridItem extends Component {
  handleClick = () => {};

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
  height: 55vw;
  width: 55vw;
  margin: 0 auto;
  margin-top: 30px;
  background-color: ${props => `${props.background}`};
  @media (min-width: 769px) {
    grid-area: ${props =>
      !props.fullGrid
        ? `${props.rowStart} / ${props.colStart} / ${props.rowEnd} / ${
            props.colEnd
          } `
        : `1 / 1 / 4 / 4`};
    height: 200px;
    width: 200px;
    margin-top: 0;
  }
`;
