import React, { Component } from "react";
import Layout from "../components/Layout";
import Subpage from "../components/Subpage";

export default class Work extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Subpage>
          <h1>WORK</h1>
        </Subpage>
      </Layout>
    );
  }
}
