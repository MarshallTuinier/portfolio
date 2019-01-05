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
          <h1>StockWatch</h1>
          <p>
            StockWatch is a frontend web application built using React and D3. I wanted to devote some time to learn the ever-intimidating D3 charting library and its implementation into React, and this is the result. 
          </p>
          <a href="https://stock-watch.marshalltuinier.com">
          <Img fluid={this.props.data.stockwatchFull.childImageSharp.fluid} style={{ maxWidth: "1000px", margin: "2rem auto", borderRadius: "5px"}} />
          </a>
          <p>View the full application <a href="https://stockwatch.marshalltuinier.com">HERE</a>.</p>
          
          <p>Code: {'  '} <StyledLink href="https://github.com/marshalltuinier/stock-watch" target="_blank" rel="noopener noreferrer">
              <Github />
            </StyledLink></p>
        </Subpage>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    stockwatchFull: file(relativePath: { eq: "stockwatchFull.jpg" }) {
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