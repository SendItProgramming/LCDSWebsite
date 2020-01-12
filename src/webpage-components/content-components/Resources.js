import React, { Component } from "react";

export default class Resources extends Component {
  render() {
    return(
      <div className ="info">
        <p className ="fun">Resources</p>
        <p className="subTitle">The following are helpful websites for parents</p>
        <table className = "Table">
          <tbody>
            <tr>
              <td>
                <p><a className ="greenLink" href="https://www.learnalberta.ca/content/mychildslearning/gradeataglance/Kindergarden.pdf">
                Kindergarden Curriculum</a></p>
                <p>Alberta Education - Kindergarden Curriculum Guide for Parents</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><a className ="greenLink" href="https://www.alberta.ca/ministry-education.aspx">
                Alberta Education</a></p>
                <p>Alberta Education Website</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><a className ="greenLink" href="http://www.humanservices.alberta.ca/financial-support/15104.html">
                Alberta Government Childcare Subsidy</a></p>
                <p>Information about AB Government Childcare Subsidy</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><a className ="greenLink" href="https://myhealth.alberta.ca/Pages/default.aspx">
                My Health Alberta</a></p>
                <p>Health Information for Parents.  check to make sure your child's immunizations are up to date.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><a className ="greenLink" href="http://www.napta.ca/">
                Northern Alberta Preschool Teacher's Association</a></p>
                <p>Find a Preschool in your area.</p>
              </td>
            </tr>

            <tr>
              <td>
              <p><a className ="greenLink" href = "http://www.humanservices.alberta.ca/services-near-you/edmonton-and-area-child-and-family-services.html">
              Edmonton Region Child & Family Services</a></p>
              <p>Edmonton Region Child & Family Services - Programs and Services</p>
              </td>
            </tr>

            <tr>
              <td>
              <p><a className ="greenLink" href="https://www.abcheadstart.org/">
                ABC Headstart</a></p>
                <p>ABC Headstart Program - Preschool Programs and Learning Support for low income families and low income families having children with special learning needs.</p>
              </td>
            </tr>

            <tr>
              <td>
                <p><a className ="greenLink" href="">Eye See...Eye Learn Program</a></p>
                <p>Eye See...Eye Learn Program - The Alberta Association of Optometrists
                Free Eye Examination and Free Glasses for Kindergarden Students in Alberta</p>
              </td>
            </tr>

            <tr>
              <td>
                <p><a className ="greenLink" href="https://www.triplep-parenting.ca/alb-en/triple-p/">Triple P - Positive Parenting</a></p>
                <p>Triple P - Positive Parenting Website</p>
              </td>
            </tr>

            <tr>
              <td>
              <p><a className ="greenLink" href="http://www.earlychildhoodedm.ca/northcentral/">North Central Early Years Coalition</a></p>
              <p>North Central Early Years Coalition Website. Parenting information and events.</p>
              </td>
            </tr>

            <tr>
              <td>
              <p><a className ="greenLink" href="https://www.edmonton.ca/attractions-events.aspx">City of Edmonton - Attractions and Events</a></p>
              <p>Check out what's happening in the City of Edmonton.</p>
              </td>
            </tr>

            <tr>
              <td>
              <p><a className ="greenLink" href="https://www.drugwatch.com/health/children/"> Drugwatch</a></p>
              <p>Children's Health Guide: Newborn to Preteen</p>
              </td>
            </tr>

            <tr>
              <td>
              <p><a className ="greenLink" href= "https://www.caringforkids.cps.ca/">
              Canadian Pediatric Society</a></p>
              <p>Information for parents from the Canadian Pediatric Society</p>
              </td>
            </tr>

            <tr>
              <td>
              <p><a className ="greenLink" href="https://edmonton.cmha.ca/">Edmonton Canadian Mental Health Association</a></p>
              <p>Call 211. Great resources for parenting help, newcomers to Edmonton, mental health support, where to go for help with basic needs, etc.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}