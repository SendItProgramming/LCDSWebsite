import React, { Component } from "react";
import {
	Image,
	Carousel
}from "react-bootstrap"
import Slide1 from "./../../../images/Slide/slide1.png"
import Slide2 from "./../../../images/Slide/slide2.png"
import Slide3 from "./../../../images/Slide/slide3.png"
import Slide4 from "./../../../images/Slide/slide4.png"
import Slide5 from "./../../../images/Slide/slide5.png"
import Slide6 from "./../../../images/Slide/slide6.png"
import Slide7 from "./../../../images/Slide/slide7.png"
import Slide8 from "./../../../images/Slide/slide8.png"
import Slide9 from "./../../../images/Slide/slide9.png"
import { AboutInfo, Facebook,OpenHouseInfo,TrialClasses,SubstituteTeachers } from "./../../SharedComponents.js"
export default class Home extends Component {
  render(){
    return(
      <div>
        <div className="Carousel" ></div>
        <Carousel interval={5000}>
          <Carousel.Item>
            <img src={Slide1}  alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slide2}  alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slide3}  alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slide4}  alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slide5}  alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slide6}  alt="" />
          </Carousel.Item>
          <Carousel.Item>
          <img src={Slide7}  alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slide8}  alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slide9}  alt="" />
          </Carousel.Item>
        </Carousel>

        <AboutInfo site_urls={this.props.urls}/>
        <Facebook site_urls={this.props.urls}/>
        <OpenHouseInfo site_urls={this.props.urls}/>
        <TrialClasses site_urls={this.props.urls}/>
        <SubstituteTeachers site_urls={this.props.urls}/>
      </div>
    );
  }
}