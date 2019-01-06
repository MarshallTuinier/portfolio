import React, { Component } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";

class indexPage extends Component {
  render() {
    return (
      <Layout>
        <div style={{ margin: "35% auto" }}>
          <StyledMain>
            <h1>MARSHALL TUINIER</h1>
            <h3>
              Hi! I'm Marshall, and I'm a full-stack web developer from Las
              Vegas, Nevada.
            </h3>
          </StyledMain>
          <StyledNav>
            <ul>
              <Link to="/About">ABOUT</Link>
              <Link to="/Work">WORK</Link>
              <Link to="/Contact">CONTACT</Link>
            </ul>
          </StyledNav>
        </div>
      </Layout>
    );
  }
}
const StyledMain = styled.div`
  height: 100%;
  position: relative;
  width: 85vw;
  max-width: 700px;
  min-width: 320px;
  text-align: center;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding-top: 2rem;
  h1 {
    letter-spacing: 0.5rem;
  }
  @media only screen and (min-width: 769px) {
    height: 200px;
  }

  & :after {
    background: #fff;
    content: "";
    display: block;
    height: 80px;
    position: absolute;
    width: 1px;
    left: 50%;
    top: 100%;
  }
`;

const StyledNav = styled.nav`
  width: 150px;
  height: 225px;
  margin: 79px auto 0px auto;
  position: relative;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  align-items: center;

  ul {
    width: 100%;
    height: 100%;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      width: 100%;
      height: 100px;
      border-left: none;
      padding-top: 0px;
      border-top: 1px solid white;
      align-items: center;
      margin: 0;
      display: flex;
      justify-content: center;
      letter-spacing: 0.2rem;
      font-size: 12pt;
      font-weight: 100;

      transition: background-color 0.2s ease-in-out;
      & :hover {
        background-color: hsla(0, 0%, 100%, 0.175);
        text-decoration: none;
        color: white;
        cursor: pointer;
      }
      & :first-of-type {
        border-top: none;
      }
    }
  }

  @media (min-width: 769px) {
    width: 450px;
    height: 60px;
    ul {
      flex-direction: row;
      a {
        height: 100%;
        border-left: 1px solid white;
        border-top: none;
        & :first-of-type {
          border-left: none;
        }
      }
    }
  }
`;

export default indexPage;
