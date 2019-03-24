
/*
  select key, url from site_map
*/
export function routes() {
  return {
    Home:               "/",

    Admin:              "/admin",

    AboutUs:            "/about-us/",
    OurStaff:           "/about-us/our-staff",
    OurBoard:           "/about-us/our-board",
    Squirrel:           "/about-us/sammy-squirrel",
    Testimonials:       "/about-us/testimonials",
    History:            "/about-us/our-history",
    Founder:            "/about-us/founder",

    Programs:           "/programs/",
    Kindergarden:       "/programs/kindergarden",
    JrKindergarden:     "/programs/jr-kindergarden",
    PreSchool:          "/programs/preschool",
    LearningSupport:    "/programs/learning-support",
    FieldTrips:         "/programs/field-trips",
    DailySnacks:        "/programs/daily-snacks",

    Registration:       "/registration/",
    ProgramFees:        "/registration/program-fees",
    ParentInvolvement:  "/registration/parent-involvement",

    Resources:          "/resources",

    Events:             "/events/",
    JobOpportunities:   "/events/job-opportunities",
    Fundraising:        "/events/fundraising",
    Calendar:           "/events/calendar",

    News:               "/news",
    Contact:            "/contact",

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

    Admin:              "Admin",

    News:               "News",
    Contact:            "Contact"
  };
}