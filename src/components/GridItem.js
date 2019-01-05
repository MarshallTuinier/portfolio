import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image"
export default class GridItem extends Component {

  render() {
    const { title, description, fluid } = this.props
    return (
      <StyledGridItem>
        <Img fluid={fluid} />
        <CoverTopHalf>
          <h2>{title}</h2>
        </CoverTopHalf>
        <CoverBottomHalf>
          <h3>{description}</h3>
        </CoverBottomHalf>
      </StyledGridItem>
    );
  }
}

const StyledGridItem = styled.div`
  position: relative;
  padding: 0;
  height: 55vw;
  width: 55vw;
  margin: 2rem;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: rgba(245,245,245,0.3) 0px 0px 10px 2px;
  div h2,h3 {
    font-size: 18px;
  }

  & :hover {
    div {
      transform: translateY(0px);
    }
  }


  @media (min-width: 769px) {
    height: 400px;
    width: 400px;

    div h2,h3 {
      font-size: 1.73286rem;
    }
    
    & :hover {
      div {
        transform: translateY(0px);
      }
    }
  }
  }
`;

const CoverTopHalf = styled.div`
  width: 55vw;
  height: 27.5vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 0%, 0.75);
  transition: all 0.3s ease-out;
  transform: translateY(-27.5vw);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  @media (min-width: 769px) {
    transform: translateY(-200px);
    width: 400px;
    height: 200px;
  }
`;

const CoverBottomHalf = styled.div`
  width: 55vw;
  height: 27.5vw;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: hsla(0, 0%, 0%, 0.75);
  transition: all 0.3s ease-out;
  transform: translateY(27.5vw);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  @media (min-width: 769px) {
    width: 400px;
    height: 200px;
    transform: translateY(200px);
  }
`;
