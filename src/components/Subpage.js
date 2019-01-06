import React, { Component } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

import Card from "../utils/Card";
export default class Subpage extends Component {
  render() {
    return (
      <Card>
        <Close onClick={() => navigate("/")}>
          <svg width="20" height="20" version="1.1">
            <line
              x1="1"
              y1="20"
              x2="20"
              y2="1"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="1"
              y1="1"
              x2="20"
              y2="20"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </Close>
        {this.props.children}
      </Card>
    );
  }
}

const Close = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;
  background-color: inherit;
  border: none;

  & :hover {
    cursor: pointer;
    background-color: hsla(0, 0%, 100%, 0.075);
  }

  & :active {
    outline: none;
  }
`;
