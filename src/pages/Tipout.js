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
          <h1>Tipout</h1>
          <p>
            Tipout is a fullstack tip tracking application built with React, Apollo, and GraphQL.  As a long time restaurant worker, I found the available tip trackers were clumsy, slow, and only used local storage.  This is my cloud based solution.  The Data visualization is done using D3 and VX.
          </p>
          <a href="https://tipout.marshalltuinier.com">
          <Img fluid={this.props.data.tipoutFull.childImageSharp.fluid} style={{ maxWidth: "1000px", margin: "2rem auto", borderRadius: "5px"}} />
          </a>
          <p>View the full application <a href="https://tipout.marshalltuinier.com">HERE</a>. To log in as a test user, please use the following credentials: email: testuser@example.com password: password</p>
          
          <p>Code: {'  '} <StyledLink href="https://github.com/marshalltuinier/tipout" target="_blank" rel="noopener noreferrer">
              <Github />
            </StyledLink></p>
        </Subpage>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    tipoutFull: file(relativePath: { eq: "tipoutFull.jpg" }) {
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