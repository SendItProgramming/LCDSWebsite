import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from "./webpage-components/Header";
import Content from "./webpage-components/Content";
import Footer from "./webpage-components/Footer";
import CustomBottom from "./webpage-components/CustomBottom";
import './WebPage.css';

export default class WebPage extends Component {
  constructor() {
    super();
    this.state = {
      site_urls: routes()
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="WebPage">
          <Header  site_urls={this.state.site_urls}/>
          <Content site_urls={this.state.site_urls}/>
          <Footer  site_urls={this.state.site_urls}/>
          <CustomBottom/>
        </div>
      </BrowserRouter>
    );
  }
}


function routes() {
  return {
    Home:               "/",
    AboutUs:            "/about-us/",
    OurStaff:           "/about-us/our-staff",
    OurBoard:           "/about-us/our-board",
    Squirrel:           "/about-us/sammy-squirrel",
    Testimonials:       "/about-us/testimonials",
    History:            "/about-us/our-history",
    Founder:            "/about-us/founder",
    Kindergarden:       "/kindergarden",
    JrKindergarden:     "/jr-kindergarden",
    PreSchool:          "/preschool",
    LearningSupport:    "/learning-support",
    FieldTrips:         "/field-trips",
    DailySnacks:        "/daily-snacks",
    ProgramFees:        "/program-fees",
    ParentInvolvement:  "/parent-involvement",
    Resources:          "/resources",
    JobOpportunities:   "/job-opportunities",
    Fundraising:        "/fundraising",
    Calendar:           "/calendar",
    News:               "/news",
    Contact:            "/contact"
  };
}