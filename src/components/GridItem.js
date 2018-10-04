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
        onClick={this.handleClick}
        background={background}
      >
        <CoverTopHalf />
        <CoverBottomHalf />
      </StyledGridItem>
    );
  }
}

const StyledGridItem = styled.div`
  position: relative;
  padding: 0;
  height: 55vw;
  width: 55vw;
  margin: 0 auto;
  margin-top: 30px;
  background-color: ${props => `${props.background}`};
  & :hover {
    div {
      height: 27.5vw;
    }
  }


  @media (min-width: 769px) {
    grid-area: ${props =>
       `${props.rowStart} / ${props.colStart} / ${props.rowEnd} / ${props.colEnd}`};
       
    height: 200px;
    width: 200px;
    margin-top: 0;
    & :hover {
      div {
        height: 100px;
      }
    }
  }
  }
`;

const CoverTopHalf = styled.div`
  width: 55vw;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsla(0,0%,0%,0.45);
  transition: height .3s ease-out;
  @media (min-width: 769px) {
    width: 200px;
    height: 0px
  }
`

const CoverBottomHalf = styled.div`
  width: 55vw;
  height: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: hsla(0,0%,0%,0.45);
  transition: height .3s ease-out;
  @media (min-width: 769px) { 
    width: 200px;
    height: 0px;
  }

`
