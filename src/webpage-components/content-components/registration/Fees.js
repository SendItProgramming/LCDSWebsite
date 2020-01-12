import React from "react";
import { AdminFees, RegistrationCommitmentDepositCheques } from "./../../SharedComponents.js"
import SammyRegistration from "./../../../images/Sammy_Registration_Fees.jpg"

export function PreSchoolFees(site_urls){
  return(
    <div className="info">
      <p className="fun">Preschool fees</p>
      <AdminFees />
      <p className="subTitle"> Preschool Fees:</p>

      <p>Monthly fees are $150 for 2 days per week per month and $225 for 3 days per week per month. (Extra Days add $75/month/extra day added.)</p>

      {PaymentOptions()}
      <p><a href={site_urls["RegCommit"]} className= "greenLink">Registration Commitments</a></p>
      <RegistrationCommitmentDepositCheques />
      <img src={SammyRegistration}  alt="" />
    </div>
  );
}

export function JrKindergardenFees(site_urls){
  console.log(site_urls)
  return(
    <div className="info">
      <p className="fun">Junior Kindergarden Fees</p>
      <AdminFees />
      <p>Monthly fees are $300.00 for 4 days per week per month or $375.00 for 5 days per week per month.</p>

      {PaymentOptions()}
      <p><a href={site_urls["RegCommit"]} className= "greenLink">Registration Commitments</a></p>
      <RegistrationCommitmentDepositCheques />
      <img src={SammyRegistration}  alt="" />
    </div>
  );
}
export function KindergardenFees(site_urls){
  return(
    <div className="info"><p className="fun">Kindergarden Fees</p>
      <p className="subTitle">Kindergarten Fee:</p>
      <AdminFees />
      <p>Kindergarten is funded by the Alberta Government. LCDS charges a one time, non-refundable materials fee of $300.00, submitted with your child's registration, to cover the cost of consumable materials used throughout the year such as, paper, glue, paint, crayons, markers, Kleenex, soap, photocopying, etc.  </p>
      <p>Your child only needs to bring a pair of indoor shoes and a backpack on their first day of school.</p>
      <RegistrationCommitmentDepositCheques />
      <img src={SammyRegistration}  alt="" />
    </div>
  );
}

export function PaymentOptions(){
  return(
    <div className= "info">
    <p className="fun">Payment Options</p>
    <p className="subTitle">You can pay your fees in the following formats:</p>
    <ul>
      <li>One cheque which covers the entire nine-month period dated September 1</li>
      <li>Two post-dated cheques dated September 1 (covers - September, October, November, December and January) and February 1 (covers -  February, March, April, and May).</li>
      <li>Nine post-dated cheques, one for each month, dated the first of each month</li>
      <li>Cash is always accepted.</li>
    </ul>
    </div>
  );
}