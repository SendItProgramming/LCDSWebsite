
/*
  select key, url from site_map
*/
export function routes() {
  return {
    Home:               "/",

    AboutUs:            "/about-us/",           //Done
    OurStaff:           "/about-us/our-staff",  //Created, not done
    OurBoard:           "/about-us/our-board",       //Done
    Squirrel:           "/about-us/sammy-squirrel",  //Done
    Testimonials:       "/about-us/testimonials",   
    History:            "/about-us/our-history",    //DOne
    Founder:            "/about-us/founder",        //Done
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

    Registration:       "/registration/",                                            //Dpme
    ProgramFees:        "/registration/program-fees",                                //Done
    ParentInvolvement:  "/registration/parent-involvement",                          //Done
    Committee:          "/registration/parent-involvement/committee",                //Done
    BoardDirectors:     "/registration/parent-involvement/board-of-directors",       //Done
    MiscPositions:      "/registration/parent-involvement/miscellaneous-poisitions", //Done

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

    NotFound:           "/*/"
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
    Squirrel:           "Sammy Squirrel",
    Testimonials:       "Testimonials",
    History:            "Our History",
    Founder:            "Our Founder",

    Programs:           "Programs",
    Kindergarden:       "Kindergarden",
    JrKindergarden:     "Jr Kindergarden (4-5)",
    PreSchool:          "PreSchool (3-4)",
    LearningSupport:    "Learning Support",
    FieldTrips:         "Field Trips",
    DailySnacks:        "Daily Snack",

    Registration:       "Registration",
    ProgramFees:        "Program Fees",
    ParentInvolvement:  "Parent Involvement",

    Resources:          "Resources",

    Events:             "Events",
    JobOpportunities:   "Job Opportunities",
    Fundraising:        "Fundraising",
    Calendar:           "Calendar",

    News:               "News",
    Contact:            "Contact"
  };
}