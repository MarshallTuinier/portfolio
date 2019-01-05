import React, { Component } from "react";
import Layout from "../components/Layout";
import Subpage from "../components/Subpage";
export default class About extends Component {
  render() {
    return (
      <Layout>
        <Subpage>
          <h1>404</h1>
          <h2>Uh-Oh!!! Looks like there's nothing here....</h2>
        </Subpage>
      </Layout>
    );
  }
}