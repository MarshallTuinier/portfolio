import React, { Component } from "react";
import styled from "styled-components";

import { Transition, Blur } from "../utils/Transition";

class Layout extends Component {
  render() {
    const { location, children } = this.props;

    return (
      <StyledLayout>
        <Blur location={location}>
          <Background location={location} />
        </Blur>
        <BgMask />

        <Transition>{children}</Transition>
      </StyledLayout>
    );
  }
}

//-------------Styles------------------//

const StyledLayout = styled.main`
  width: 100%;
  height: 100vh;
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
`;

const Background = styled.div``;

const BgMask = styled.div`
  background-color: #111;
  opacity: 0.3;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
`;

export default Layout;
