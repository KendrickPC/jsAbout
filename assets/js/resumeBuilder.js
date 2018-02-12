// begin bio section
var bio = {
    "name": "Kenneth P. Chang",
    "role": "Full Stack Developer",
    "contacts": {
        "linkedin": "check me out on LinkedIn",
        "github": "check out my GitHub",
        "facebook": "check out my Facebook",
        "website": "check out my website",
        "location": "Taipei, TW"
    },
    "welcomeMessage": "",
    "skills": ["HTML", "CSS", "Javascript", "Ruby"],
    "biopic": "assets/images/fry9.jpg",
    "display": function () {
        $("#header").append(HTMLimgDiv);
        $(".img-div").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLnameDiv);
        $(".name-div").append(HTMLheaderName.replace("%data%", bio.name));
        $(".name-div").append(HTMLheaderRole.replace("%data%", bio.role));
        $(".name-div").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#header").append(HTMLcontactDiv);
        $(".contact-div").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
        $(".contact-div").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $(".contact-div").append(HTMLfacebook.replace("%data%", bio.contacts.facebook));
        $(".contact-div").append(HTMLwebsite.replace("%data%", bio.contacts.website));
        $("#header").append(HTMLmessageDiv);
        // $(".short-description").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("skills").append(HTMLskills.replace("%data%", bio.skills));
    }
};
// end bio section

// begin work section
var work = {
    "jobs": [
        {
            "employer": "CodeTaiwan.org",
            "title": "Co-Founder",
            "location": "Taipei, Taiwan",
            "dates": "2015-Current",
            "description": "Co-founded a company specializing in teaching coding fundamentals and EQ skills to kids in orphanages and rural communities around Taipei, Taiwan."
    },
        {
            "employer": "Law Offices of Dean Lloyd",
            "title": "Paralegal",
            "location": "Palo Alto, CA",
            "dates": "2012-2013",
            "description": "Managed the computer database for the office. Assisted a visually impaired trial attorney in client consultations, trials, case management conferences, settlement officer conferences, and meet & confer conferences. Drafted and revised petitions, orders, statements, discovery requests, responses, and declarations. Research local rules for Santa Clara, San Mateo, San Francisco, and Alameda County using LexisNexis."
    },
        {
            "employer": "Stanford Hospital & Clinics",
            "title": "Surgical Admissions Unit",
            "location": "Palo Alto, CA",
            "dates": "2010-2012",
            "description": "Assisted surgeons as a communication line for post op waiting room. Managed and maintained EPIC and Bed Board software systems within the surgical admissions unit."
 	},
        {
            "employer": "Cambridge Associates, LLC",
            "title": "Data & Reporting Analyst",
            "location": "Menlo Park, CA",
            "dates": "2010-2012",
            "description": "Managing and entering investment manager data into proprietary CA databases, quality checking performance data, evaluating and reconciling historical portfolio data, preparing deliverables, attending individual and team meetings, and preparing and presenting internal presentations."
    }],
    "display": function () {
        $("#work-experience").append(HTMLworkHeader);
        for (j in work.jobs) {
            $("#work-experience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
            $(".work-entry:last").append(formattedWorkDates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
            $(".work-entry:last").append(formattedWorkLocation);
            var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[j].description);
            $(".work-entry:last").append(formattedWorkDesc);
        }
    }
};
// end work section

// begin projects section
var projects = {
    "projects": [
        {
            "title": "CodeTaiwan.org",
            "dates": "2015-Current",
            "description": "Co-Founder of an Emotional Intelligence and Coding School in Taiwan.",
            "images": ["assets/images/logoCodeTaiwan.jpg", "assets/images/cody.png"]
 	  }],

    "display": function () {
        $("#projects").append(HTMLprojectHeader);
        for (p in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[p].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[p].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[p].description));
            for (i in projects.projects[p].images) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[p].images[i]));
            }
        }
    }
};
// end projects section

// begin education section
var education = {
    "schools": [
        {
            "name": "Notre Dame de Namur Univeristy",
            "location": "Belmont, CA",
            "degree": "Post Bacc Pre-Med Program",
            "majors": "Biochemistry",
            "dates": "",
            "url": "www.ndnu.edu"
    },
        {
            "name": "University of California, Berkeley Extension",
            "location": "San Francisco, CA",
            "degree": "Copy Editing Certification",
            "majors": "Copy Editing",
            "dates": "",
            "url": "https://extension.berkeley.edu/edu"
    },
        {
            "name": "University of California, Santa Barbara",
            "location": "Santa Barbara, CA",
            "degree": "BA",
            "majors": "Political Science",
            "dates": "",
            "url": "www.ucsb.edu"
 	}],
    "onlineCourses": [{
        "title": "Full-Stack Foundations Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "link for more information",
        "description": "Built complex server-side web applications that use powerful relational databases to persistently store data."
    },
    {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "link for more information",
        "description": "Mastering the skills required to become a Front-End Web Developer, built beautiful & responsive websites optimized for mobile & desktop performance."
 	},
                      {   
        "title": "Intro to Programming Nanodegree",
        "school": "Udacity",
        "dates": "2015",
        "url": "link for more information",
        "description": "A review, for an introductory program, practicing foundational skills all programmers use."
    }],
    "display": function () {
        $("#education").append(HTMLeducationHeader);
        for (e in education.schools) {
            $("#education").append(HTMLschoolStart);
            var sch = HTMLschoolName.replace("%data%", education.schools[e].name) + HTMLschoolDegree.replace("%data%", education.schools[e].degree)
            $(".education-entry:last").append(sch);
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[e].location));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[e].dates));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[e].majors));
        }
        $("#education").append(HTMLonlineClassesStart);
        $(".online-classes-entry:last").append(HTMLonlineClasses);
        for (o in education.onlineCourses) {
            $(".online-classes-entry:last").append(HTMLonlineClassesSubHeading);
            $(".online-classes-sub-heading:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[o].title));
            $(".online-classes-sub-heading:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[o].school));
            $(".online-classes-sub-heading:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[o].dates));
            $(".online-classes-sub-heading:last").append(HTMLonlineDescription.replace("%data%", education.onlineCourses[o].description));
            // $(".online-classes-sub-heading:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[o].url));
        }
    }
};
// end education section

// begin skills Javascript
         
// end skills Javascript


// begin display function calls-----
bio.display();
work.display();
projects.display();
education.display();
// end display function calls-----

//Maps
$("#mapDiv").append(HTMLmapsHeader);
$("#mapDiv").append(googleMap);

/* ----------------------------------------- TOGGLE SECTIONS METHOD -------------------------------- */
