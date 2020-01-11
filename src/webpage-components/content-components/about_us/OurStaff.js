import React, { Component } from "react";
import MichellFung from "./../../../images/Staff/Michell_Fung.jpg"
import CarmenBriggs from "./../../../images/Staff/Carmen_Briggs.jpg"
import CorinaMichetti from "./../../../images/Staff/Corina_Michetti.jpg"
import SarahQuinton from "./../../../images/Staff/Sarah_Quinton.jpg"
import ShannonMusic from "./../../../images/Staff/Shannon_Music.jpg"

export default class OurStaff extends Component {
  render() {
    return(
      <div>
      <p className="fun">Staff</p>
      <table className = "Table">
      <tbody>
      <tr>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <td><img className="table-image" src={MichellFung} alt="" /></td>
        <td className="left">
        <p className="subTitle">Our Teacher</p>
        <p className="nameTitle">Michell Fung</p>
        <p>I was born and raised here in Edmonton.
        I grew up in the north side of Edmonton and now currently live on the south side with my husband Neil and my cat and dog. I have two degrees.
        My first degree is in Psychology with a minor in Sociology. My second degree is in Elementary Education.
        I have worked with children in a various number of places such as the women’s shelter, YMCA day cares and have taught in a couple of Head Start programs.
        One of my hobbies is singing. I have sung in a mixed community choir for 6 years. 
        Your children will learn many new songs and dances.
        I really love working with children and families.
        I love seeing the growth and development of all children.</p>
        </td>
      </tr>
      <tr>
        <td></td>
        <td className="left">
        <p className="subTitle">Our Educational Assistants:</p>

        </td>
      </tr>
      <tr>
        <td><img className="table-image" src={CorinaMichetti} alt="" /></td>
        <td className="left">
          <p className="nameTitle">Corina Michetti</p>

          <p>Ms. Corina is a former parent of LCDS.
            Her children have graduated from LCDS and are working their way through Elementary School.
            Ms. Corina works with children in the classroom who receive educational support services.
            Ms. Corina enjoys spending time with her husband and two children.
          </p>
        </td>
      </tr>
      <tr>
        <td><img className="table-image" src={SarahQuinton} alt="" /></td>
        <td className="left">
          <p className="nameTitle">Sarah Quinton</p>

          <p>
            Ms. Sarah joined LCDS in the fall of 2017.
            She has been a wonderful addition to our classroom.
            Ms. Sarah helps to create all of the wonderful projects and activities for our preschoolers in the classroom.
            In her spare time she participates in dance classes and fitness programs and enjoys travelling.
          </p>
        </td>
      </tr>
      <tr>
        <td><img className="table-image" src={ShannonMusic} alt="" /></td>
        <td className="left">
          <p className="subTitle">Our Executive Director</p>
          <p className="nameTitle">Shannon Music</p>
          <p>
            Miss Shannon is the LCDS Executive Director.
            Shannon is also a former LCDS parent and former Board Member.
            Miss Shannon has 3 children who graduated from LCDS and are now graduating from Post Secondary school and are starting their own lives.
            She enjoys spending time with her husband, and family and with her little West Highland Terrier named Ben.
          </p>
        </td>
      </tr>
      <tr>
        <td><img className="table-image" src={CarmenBriggs} alt="" /></td>
        <td className="left">
          <p className="subTitle">Our Business Manager</p>
          <p className="nameTitle">Carmen Briggs</p>
          <p>
            Miss Carmen is our Business Manager.
            Carmen is also a former LCDS parent and former Board member.
            Carmen enjoys spending time with her husband, two children and her little Yorkshire Terrier Mazey.
            Carmen's two boys also graduated from LCDS and are now graduating from High School and attending Post Secondary School.
          </p>
        </td>
      </tr>
      </tbody>
      </table>
      </div>
    );
  }
}