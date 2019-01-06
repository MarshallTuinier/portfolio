import React, { Component } from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { Transition } from "../utils/Transition";
import favicon from "../assets/favicon.png";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            background: file(relativePath: { eq: "background.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 2800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <StyledLayout>
            <Helmet
              title="Marshall Tuinier"
              meta={[
                {
                  name: "description",
                  content: "Web developer Marshall Tuinier",
                },
                {
                  name: "keywords",
                  content:
                    "webdev, webdeveloper, gatsbyjs, reactjs, frontend, graphql, developer, app, webapp, javascript",
                },
              ]}
              link={[
                { rel: "shortcut icon", type: "image/png", href: `${favicon}` },
              ]}
            />
            <Img
              fluid={data.background.childImageSharp.fluid}
              style={{
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
              }}
            />
            <BgMask />
            <Transition>{children}</Transition>
          </StyledLayout>
        )}
      />
    );
  }
}

//-------------Styles------------------//

const StyledLayout = styled.main`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16pt;
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  a {
    color: white;
  }

  h3 {
    margin: 2rem 0;
  }
`;

const BgMask = styled.div`
  background-color: #111;
  opacity: 0.3;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
`;

export default Layout;
