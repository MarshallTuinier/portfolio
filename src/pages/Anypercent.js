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
            Anypercent is a frontend web application built using React. I am a huge fan of video games, and was inspired to watch people complete them at breakneck speeds after viewing AGDQ2015 (Awesome Games Done Quick).  This site allows users to watch random record-setting speedruns at the click of a button. 
          </p>
          <a href="https://anypercent.marshalltuinier.com">
          <Img fluid={this.props.data.anypercentFull.childImageSharp.fluid} style={{ maxWidth: "1000px", margin: "2rem auto", borderRadius: "5px"}} />
          </a>
          <p>View the full application <a href="https://anypercent.marshalltuinier.com">HERE</a>.</p>
          
          <p>Code: {'  '} <StyledLink href="https://github.com/marshalltuinier/anypercent" target="_blank" rel="noopener noreferrer">
              <Github />
            </StyledLink></p>
        </Subpage>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    anypercentFull: file(relativePath: { eq: "anypercentFull.jpg" }) {
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