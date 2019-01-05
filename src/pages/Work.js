import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import GridItem from "../components/GridItem";
import Layout from "../components/Layout";
import Subpage from "../components/Subpage";

export default class Work extends Component {
  render() {
    const { data } = this.props 
    return (
      <Layout location={this.props.location}>
        <Subpage>
          <h1>WORK</h1>
          <p>Here are a few of my most recent personal projects:</p>
          <Grid>
            <Link to="/Yum">
              <GridItem title={"YUM!"} description={"A full-stack restaurant review application built with React, Node.js, and MongoDB."} fluid={data.yumSquare.childImageSharp.fluid}/>
            </Link>
            <Link to="/Swagbag">
              <GridItem title={"SwagBag"} description={"A full-stack e-commerce application built with React, Apollo, GraphQL, and PostgreSQL."} fluid={data.swagbagSquare.childImageSharp.fluid}/>
            </Link>
            <Link to="/Tipout">
              <GridItem title={"Tipout"} description={"A full-stack tip tracking application built with React, Apollo, GraphQL."} fluid={data.tipoutSquare.childImageSharp.fluid}/>
            </Link>
            <Link to="/MakingNevadaHome">
              <GridItem title={"MakingNevadaHome"} description={"A GatsbyJS site for Las Vegas realty."} fluid={data.mnhSquare.childImageSharp.fluid}/>
            </Link>
            <Link to="/Anypercent">
              <GridItem title={"Anypercent"} description={"A React app for watching random record-setting speedruns."} fluid={data.anypercentSquare.childImageSharp.fluid}/>
            </Link>             
            <Link to="/Stockwatch">
              <GridItem title={"StockWatch"} description={"A web app for monitoring stock market trends."} fluid={data.stockwatchSquare.childImageSharp.fluid}/>
            </Link>
          </Grid>
        </Subpage>
      </Layout>
    );
  }
}

const Grid = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

//---------- GatsbyJS Images ------------//

export const query = graphql`
  query {
    yumSquare: file(relativePath: { eq: "yumSquare.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    swagbagSquare: file(relativePath: { eq: "swagbagSquare.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tipoutSquare: file(relativePath: { eq: "tipoutSquare.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mnhSquare: file(relativePath: { eq: "mnhSquare.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    anypercentSquare: file(relativePath: { eq: "anypercentSquare.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    stockwatchSquare: file(relativePath: { eq: "stockwatchSquare.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
