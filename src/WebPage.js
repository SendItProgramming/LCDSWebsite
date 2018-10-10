import React, { Component } from 'react';
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
      <div className="WebPage">
        <Header site_urls={this.state.site_urls}/>
        <Content/>
        <Footer/>
        <CustomBottom/>
      </div>
    );
  }
}


function routes() {
  return {
    Home:               "/",
    OurStaff:           "/our-staff",
    OurBoard:           "/our-board",
    Squirrel:           "/sammy-squirrel",
    Testimonials:       "/testimonials",
    History:            "/our-history",
    Founder:            "/founder",
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