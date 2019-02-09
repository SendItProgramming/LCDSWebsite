import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from "./webpage-components/Header";
import Content from "./webpage-components/Content";
import Footer from "./webpage-components/Footer";
import CustomBottom from "./webpage-components/CustomBottom";
import { routes } from "./database-connection/Dummy";
import "./index-src/css/WebPage.css"

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
      <div id="wrapper" class="container">
        <div className="WebPage">
          <Header  site_urls={this.state.site_urls}/>
          <Content site_urls={this.state.site_urls}/>
          <Footer  site_urls={this.state.site_urls}/>
          <CustomBottom/>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
