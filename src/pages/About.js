import React, { Component } from "react";
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout";
import Subpage from "../components/Subpage";
export default class About extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Subpage>
          <h1>ABOUT</h1>
          <p>
            As a web developer, I am focused on building beatiful, performant,
            and scalable websites, web apps, and UIs. My passion is working to
            build software to improve the lives of those around me, leveraging
            the modern JavaScript ecosystem, with a focus on React, Webpack,
            Node, and GraphQL.
          </p>
          <p>
            Outside of coding, I have a variety of hobbies including
            woodworking, jazz guitar, luthery, and strategy board games. I love
            attending concerts, traveling, and spending time with my wife Taylor
            and baby girl Rory.
          </p>
          <Img fluid={this.props.data.family.childImageSharp.fluid} style={{ maxWidth: "800px", margin: "2rem auto", borderRadius: "5px"}} />
        </Subpage>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    family: file(relativePath: { eq: "family.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
