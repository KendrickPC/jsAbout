// begin bio section
var bio = {
    "name": "Kenneth P. Chang",
    "role": "Full Stack Engineer",
    "contacts": {
        "linkedin": "check me out on linkedIn",
        "github": "check out my Github",
        "instagram": "@not.telling",
        "website": "www.EveryDayKenneth.com",
        "location": "Taipei, TW & Cupertino, CA"
    },
    "welcomeMessage": "Say something clever here. Maybe something in Chinese?",
    "skills": ["HTML/CSS", "JS/Jquery", "Responsive Web Design", "Angular JS"],
    "biopic": "assets/images/fry2.jpg",
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
        $(".contact-div").append(HTMLinstagram.replace("%data%", bio.contacts.instagram));
        $(".contact-div").append(HTMLwebsite.replace("%data%", bio.contacts.website));
        $("#header").append(HTMLmessageDiv);
        $(".short-description").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    }
};
// end bio section

// begin work section
var work = {
    "jobs": [
        {
            "employer": "IBM",
            "title": "Software Engineer",
            "location": "Taipei, TW",
            "dates": "2014-Present",
            "description": "I design software as a Junior Software Engineer."
 	},
        {
            "employer": "Cambridge Associates LLC",
            "title": "Junior Analyst",
            "location": "Menlo Park, CA",
            "dates": "2010-2014",
            "description": "I analyzed large sets of data with basic fundamental problem solving methods."
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
            "title": "About Me",
            "dates": "2015",
            "description": "Go check out my timeline on www.EveryDayKenneth.com",
            "images": ["assets/images/humayun.jpg", "assets/images/tropicalBeach.jpg"]
 	  },

        {
            "title": "Portfolio",
            "dates": "2015",
            "description": "...",
            "images": ["assets/images/indore.jpg", "assets/images/sfo.jpg"]
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
            "name": "Notre Dame University",
            "location": "South Bend, IN",
            "degree": "M.S.",
            "majors": "Biochemistry",
            "dates": "2009 - 2011",
            "url": "www.notredame.edu"
 	},

        {
            "name": "University of California, Santa Barbara",
            "location": "Santa Barbara, CA",
            "degree": "BA",
            "majors": "Political Science",
            
            "dates": "2003-2007",
            "url": "www.ucsb.edu"
 	}],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "www.udacity.com",
        "description": "There's no price tag for a quality education."
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
            $(".online-classes-sub-heading:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[o].url));
        }
    }
};
// end education section

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
