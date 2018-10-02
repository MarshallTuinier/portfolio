import React, { Component } from "react";
import styled from "styled-components";
import GridItem from "../components/GridItem";
import Layout from "../components/Layout";
import Subpage from "../components/Subpage";

export default class Work extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Subpage>
          <h1>WORK</h1>
          <Grid>
            <GridItem
              rowStart={1}
              colStart={1}
              rowEnd={1}
              colEnd={1}
              background="red"
            />
            <GridItem
              rowStart={1}
              colStart={2}
              rowEnd={1}
              colEnd={2}
              background="green"
            />
            <GridItem
              rowStart={1}
              colStart={3}
              rowEnd={1}
              colEnd={3}
              background="purple"
            />
            <GridItem
              rowStart={2}
              colStart={1}
              rowEnd={2}
              colEnd={1}
              background="blue"
            />
            <GridItem
              rowStart={2}
              colStart={2}
              rowEnd={2}
              colEnd={2}
              background="red"
            />
            <GridItem
              rowStart={2}
              colStart={3}
              rowEnd={2}
              colEnd={3}
              background="green"
            />
            <GridItem
              rowStart={3}
              colStart={1}
              rowEnd={3}
              colEnd={1}
              background="purple"
            />
            <GridItem
              rowStart={3}
              colStart={2}
              rowEnd={3}
              colEnd={2}
              background="blue"
            />
            <GridItem
              rowStart={3}
              colStart={3}
              rowEnd={3}
              colEnd={3}
              background="red"
            />
          </Grid>
        </Subpage>
      </Layout>
    );
  }
}

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
