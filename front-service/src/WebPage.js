import React, { Component } from 'react';
import Header from "./webpage-components/Header";
import Content from "./webpage-components/Content";
import Footer from "./webpage-components/Footer";
import CustomBottom from "./webpage-components/CustomBottom";
import './WebPage.css';

export default class WebPage extends Component {
  render() {
    return (
      <div className="WebPage">
        <Header/>
        <Content/>
        <Footer/>
        <CustomBottom/>
      </div>
    );
  }
}