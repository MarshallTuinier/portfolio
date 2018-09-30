import React, { Component } from "react";
import Layout from "../components/Layout";
import Subpage from "../components/Subpage";

export default class Intro extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Subpage>
          <h1>INTRO</h1>
          <p>
            Lorem ipsum dolor amet tattooed pop-up sriracha banh mi, succulents
            gochujang celiac chambray lyft four loko scenester. Tbh 90's woke,
            pitchfork fashion axe polaroid mixtape edison bulb tilde ennui.
            Hexagon poke hell of, palo santo helvetica man bun ramps aesthetic.
            Butcher hot chicken asymmetrical, selvage freegan distillery raw
            denim seitan franzen pabst authentic selfies keytar tbh next level.
            Jean shorts knausgaard pitchfork disrupt.
          </p>
          <p>
            PBR&B austin neutra drinking vinegar. Pok pok keffiyeh hexagon viral
            jianbing. Tousled pok pok plaid typewriter, master cleanse hoodie
            gluten-free poke paleo. Cray stumptown lomo shabby chic
            chicharrones. Edison bulb shabby chic hammock pour-over af brooklyn
            authentic fashion axe street art occupy vape leggings gochujang
            wayfarers hexagon.
          </p>
        </Subpage>
      </Layout>
    );
  }
}
