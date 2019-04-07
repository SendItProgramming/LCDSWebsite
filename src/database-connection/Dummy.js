
/*
  select key, url from site_map
*/
export function routes() {
  return {
    Home:               "/",

    AboutUs:            "/about-us/",                //Done
    OurStaff:           "/about-us/our-staff",       //Created, not done
    OurBoard:           "/about-us/our-board",       //Done
    Squirrel:           "/about-us/sammy-squirrel",  //Done
    Testimonials:       "/about-us/testimonials",    //Done   
    History:            "/about-us/our-history",     //DOne
    Founder:            "/about-us/founder",         //Done
    JuneHenry:          "/about-us/june-henry",      //Done

    Programs:           "/programs/",                     //Done
    Kindergarden:       "/programs/kindergarden",         //Done
    JrKindergarden:     "/programs/jr-kindergarden",      //Done
    PreSchool:          "/programs/preschool",            //Done
    LearningSupport:    "/programs/learning-support",     //Done
    FieldTrips:         "/programs/field-trips",          //Done
    DailySnacks:        "/programs/daily-snacks",         //Done
    FoodRestrictions:   "/programs/daily-snacks/food-restictions",                   //Done
    PreschoolDevSkills: "/programs/kindergarten/preschool-development-skills",       //Done
    IsMyChildReady:     "/programs/is-my-child-ready-for-preschool-or-kindergarden", //done
    Requirements:       "/programs/registration-requirements-for-learning-support",  //Done
    GenGuide:           "/programs/registration/half-day-program-general-guidelines",

    Registration:       "/registration/",                                            //Dpme
    ProgramFees:        "/registration/program-fees",                                //Done
    ParentInvolvement:  "/registration/parent-involvement",                          //Done
    Committee:          "/registration/parent-involvement/committee",                //Done
    BoardDirectors:     "/registration/parent-involvement/board-of-directors",       //Done
    MiscPositions:      "/registration/parent-involvement/miscellaneous-poisitions", //Done
    PreschoolFees:      "/registration/program-fees/preschool-fees",
    JrKindergardenFees: "/registration/program-fees/junior-kindergarden-fees",
    KindergardenFees:   "/registration/program-fees/kindergarden-fees",
    PaymentOptions:     "/registration/program-fees/payment-options",

    RegCommit:          "/registration/program-fees/registration-commitments",
    Resources:          "/resources",                                                //Done

    Events:             "/events/",                                                  //Done
    JobOpportunities:   "/events/job-opportunities",                                 //Done
    Fundraising:        "/events/fundraising",
    Calendar:           "/events/calendar",
    OpenHouse:          "/events/open-house-registration",
    TrialClasses:       "/events/trial-classes",    //Done

    News:               "/news",
    Facebook:           "/news/lcds-on-facebook",   //done
    Contact:            "/contact",                                                 //Done


    Admin:              "/Admin"
  };
}

/*
  select key, title from site_map
*/
export function titles() {
  return {
    Home:               "Home",

    AboutUs:            "About Us",
    OurStaff:           "Our Staff",
    OurBoard:           "Our Board",
    Squirrel:           "Sammy The Squirrel",
    Testimonials:       "Testimonials",
    History:            "Our History",
    Founder:            "Our Founder",
    JuneHenry:          "June Henry",

    Programs:           "Programs",
    Kindergarden:       "Kindergarden",
    JrKindergarden:     "Junior Kindergarden",
    PreSchool:          "Preschool",
    LearningSupport:    "Learning Support",
    FieldTrips:         "Field Trips",
    DailySnacks:        "Daily Snacks",
    FoodRestrictions:   "Food Restrictions",
    PreschoolDevSkills: "Preschool Developments SKills",
    IsMyChildReady:     "Is My Child Ready?",
    Requirements:       "Requirements For Learning Support",

    Registration:       "Registration",
    ProgramFees:        "Progam Fees",
    ParentInvolvement:  "Parent Involement",
    Committee:          "Committee",
    BoardDirectors:     "Board Of Directors",
    MiscPositions:      "Miscellaneous Positions",
    PreschoolFees:      "Preschool Fees",
    JrKindergardenFees: "Junior Kindergarden Fees",
    KindergardenFees:   "Kindergarden Fees",
    PaymentOptions:     "Payment Options",

    RegCommit:          "Registration Commitments",
    Resources:          "Resources",

    Events:             "Events",
    JobOpportunities:   "Job Opportunities",
    Fundraising:        "Fundraising",
    Calendar:           "Calendar",
    OpenHouse:          "Open House Registration",
    TrialClasses:       "Trial Classes",

    News:               "News",
    Contact:            "Contact",
    Admin:              "Admin"
  };
}