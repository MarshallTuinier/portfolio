import React, { Component } from "react";
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/Layout";
import Subpage from "../components/Subpage";
import Github from '../assets/svg/github'
export default class About extends Component {
  render() {
    return (
      <Layout>
        <Subpage>
          <h1>Yum!</h1>
          <p>
          Yum is a full stack web application built with React, Nodejs, and MongoDB.  As a lover of all things food, I wanted a way to easily keep track of restaurants I dug, as well as hone my JS chops.  This application features user accounts and permission, liking/comments/rating systems, and Google Maps integration.
          </p>
          <a href="https://yum.marshalltuinier.com">
          <Img fluid={this.props.data.yumFull.childImageSharp.fluid} style={{ maxWidth: "1000px", margin: "2rem auto", borderRadius: "5px"}} />
          </a>
          <p>View the full application <a href="https://yum.marshalltuinier.com">HERE</a>. To log in as a test user, please use the following credentials: email: testuser@example.com password: password</p>
          <p>Code: {'  '} <StyledLink href="https://github.com/marshalltuinier/yum" target="_blank" rel="noopener noreferrer">
              <Github />
            </StyledLink></p>
        </Subpage>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    yumFull: file(relativePath: { eq: "yumFull.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const StyledLink = styled.a`
  svg {
    transition: transform .25s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`
