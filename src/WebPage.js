import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from "./webpage-components/Header";
import Content from "./webpage-components/Content";
import Footer from "./webpage-components/Footer";
import CustomBottom from "./webpage-components/CustomBottom";
import { routes, titles } from "./database-connection/Dummy";
import "./index-src/css/WebPage.css"

export default class WebPage extends Component {
  constructor() {
    super();
    this.state = {
      site_urls: routes(),
      titles: titles(),
      jwt: JSON.parse(sessionStorage.getItem('Auth')),
    }
    this.Logout = this.Logout.bind(this);
    this.Login = this.Login.bind(this);
  }

  Logout(){
    console.log("logout running")
    this.setState({
      jwt:null
    })
    sessionStorage.removeItem('Auth')
  }

  Login() {
    let comp = this;
        const url = "http://localhost:8888/auth/check";
      fetch(url, {
        method : "POST",
        body: new FormData(document.getElementById("inputform")),
        // -- or --
        // body : JSON.stringify({
          // user : document.getElementById('user').value,
          // ...
        // })
      }).then(
          function(response){
            if (!response.ok){
              alert("Something went wrong logging in, please check your credentials and try again")
              return
            }
            return response.text()
          } // .json(), etc.
          // same as function(response) {return response.text();}
      ).then(
            function(data) {
              if(data){
          //soruce https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript
                let base64Url = data.split('.')[1];
                let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                let jwt = JSON.parse(window.atob(base64));
                let userObj = JSON.parse(jwt.sub)
                console.log(userObj)
                sessionStorage.setItem('Auth', JSON.stringify(userObj))
                comp.setState({
                  jwt:userObj
                })
              }
            }
      );
    }

  render() {
    return (
      <BrowserRouter>
      <div id="wrapper" class="container">
        <div className="WebPage">
          <Header  site_urls={this.state.site_urls} user={this.state.jwt}/>
          <Content site_urls={this.state.site_urls} titles={this.state.titles} Logout={this.Logout} Login={this.Login} jwt={this.state.jwt}/>
          <Footer  site_urls={this.state.site_urls}/>
          <CustomBottom/>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
