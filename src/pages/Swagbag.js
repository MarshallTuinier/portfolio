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
          <h1>SwagBag</h1>
          <p>
          SwagBag is a full stack e-commerce application built with React, Apollo, and GraphQL. Server rendering is done using Next.js. This application features user accounts and permissions, robust ordering, and payments via Stripe.
          </p>
          <a href="https://swagbag.marshalltuinier.com">
          <Img fluid={this.props.data.swagbagFull.childImageSharp.fluid} style={{ maxWidth: "1000px", margin: "2rem auto", borderRadius: "5px"}} />
          </a>
          <p>View the full application <a href="https://swagbag.marshalltuinier.com">HERE</a>. To log in as a test user, please use the following credentials: email: testuser@example.com password: password</p>
          <p>If you'd like to "purchase" an item, use the following mock Stripe information: CC number: 4242 4242 4242 4242 Exp: 02/22 CVC: 222</p>
          <p>Code: {'  '} <StyledLink href="https://github.com/marshalltuinier/swagbag" target="_blank" rel="noopener noreferrer">
              <Github />
            </StyledLink></p>
        </Subpage>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    swagbagFull: file(relativePath: { eq: "swagbagFull.jpg" }) {
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