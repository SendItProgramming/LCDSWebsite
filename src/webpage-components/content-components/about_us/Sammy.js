import React, { Component } from "react";
import { Image }from "react-bootstrap"
import SammyPic from "./../../../images/SammyPage.jpg"

export default class Sammy extends Component {

  render() {

    return(
      <div className="info">
      <p className="fun">
        Sammy Squirrel
      </p>
      <p>Sammy is a very mischievous squirrel who lives in the classroom at LCDS.  Sammy loves to interact with the children every day when he isn't foraging for food or off on an exciting adventure. 
      Sometimes things go missing in the classroom, or a mess is left behind and Sammy is usually to blame. 
      He is a very busy little squirrel.
      We enjoy Sammy and all of his crazy adventures.
      The children love to hear about what he has been up to and what he has to say.</p>
      <p id="image"><Image src={SammyPic} alt="" /></p>
    </div>
    )
  }
}
