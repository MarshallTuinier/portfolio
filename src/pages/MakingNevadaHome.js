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
          <h1>MakingNevadaHome</h1>
          <p>
            MakingNevadaHome is a frontend web application built using GatsbyJS.  This site was created for a small boutique Las Vegas realty company to streamline both realtor workflow and UX.  
          </p>
          <a href="https://makingnevadahome.com">
          <Img fluid={this.props.data.mnhFull.childImageSharp.fluid} style={{ maxWidth: "1000px", margin: "2rem auto", borderRadius: "5px"}} />
          </a>
          <p>View the full application <a href="https://makingnevadahome.com">HERE</a>.</p>
          
          <p>Code: {'  '} <StyledLink href="https://github.com/marshalltuinier/makingnevadahome" target="_blank" rel="noopener noreferrer">
              <Github />
            </StyledLink></p>
        </Subpage>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    mnhFull: file(relativePath: { eq: "mnhFull.jpg" }) {
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