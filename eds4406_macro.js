


    var VARIABLES = {
        // EDS4406 S2, 2015
        7456: {
            // Structure links
            STUDY_SCHEDULE: "http://usqstudydesk.usq.edu.au/m2/mod/book/view.php?id=430281",
            ASSESSMENTS: "http://usqstudydesk.usq.edu.au/m2/mod/book/view.php?id=430279&chapterid=24860",
            TEACHING_STAFF: "http://usqstudydesk.usq.edu.au/m2/mod/book/view.php?id=430283&chapterid=24865",

            // Teaching staff
            CE_NAME: "David Jones", CE_EMAIL: "david.jones@usq.edu.au",
            CE_LINK: "http://usqstudydesk.usq.edu.au/m2/mod/page/view.php?id=321209#ce",
            TT_LINK: "http://usqstudydesk.usq.edu.au/m2/mod/page/view.php?id=321209",

            // Modules
            M1_NAME: "What is ICT and why should I use them in pedagogy?",
            M1_WEEKS: "Weeks 1, 2 & 3",
            M2_NAME: "How do I design ICT-based learning experiences?",
            M2_WEEKS: "Weeks 4, 5 & 8",
            M3_NAME: "How do I implement ICT-based learning experiences?",
            M3_WEEKS: "Weeks 9 to 15",
 
            // PE dates
            PE_START: "18th May", PE_STOP: "5th June",

            // Weeks
       // Weeks
            W0_PERIOD:"Before 20 Jul",
            W0_TITLE: "Orientation",

            W1_PERIOD:"20-24 Jul", W1_LABEL: "Week 1",
            W1_START: "20 July",
            W1_TITLE: "Working and thinking as a computing discipline specialist",

            W2_PERIOD:"27-31 Jul", W2_LABEL: "Week 2",
            W2_START: "27th July",
            W2_TITLE: "Ongoing professional learning, joining professional networks",

            W3_PERIOD:"3-7 Aug", W3_LABEL: "Week 3",
            W3_START: "3rd August",
            W3_TITLE: "Diagnosing misconceptions and relevant extracurricular activities",

            W4_PERIOD:"10-14 Aug", W4_LABEL: "Week 4",
            W4_START: "10th August",
            W4_TITLE: "PCK and syllabus/work program familiarisation",

            W5_PERIOD:"17-21 Aug",       W5_LABEL: "Week 5",
            W5_START: "17th August",
            W5_TITLE: "Safety and behaviour management in a computing class",

            W6_PERIOD:"24-28 Aug", W6_LABEL: "Week 6",
            W6_START: "24th August",
            W6_TITLE: "Strategies for teaching computing software and project based learning",

            W7_PERIOD:"31 Aug-4 Sep", W7_LABEL: "Week 7",
            W7_START: "31st August",
            W7_TITLE: "Strategies for working with mobile devices in schools",

            W8_PERIOD:"7-11 Sep", W8_LABEL: "Week 8",
            W8_START: "7th September",
            W8_TITLE: "Assessment, making judgements, marking consistently, feedback and reporting",

            W9_PERIOD:"14-18 Sep", W9_LABEL: "Week 9",
            W9_START: "14th September",
            W9_TITLE: "Embedding literacy and numeracy",

            W10_PERIOD:"21-25 Sep", W10_LABEL: "Recess #1",
            W11_PERIOD:"28 Sep-2 Oct", W11_LABEL: "Recess #2",

            W12_PERIOD:"5-9 Oct", W12_LABEL: "PE Week 1",

            W13_PERIOD:"12-16 Oct", W13_LABEL: "PE Week 2",

            W14_PERIOD:"19-23 Oct", W14_LABEL: "PE Week 3",

            W15_PERIOD:"26-30 Oct", W15_LABEL: "Week 15",
            W15_START: "26th October",
            W15_TITLE: "Strategies for differentiation",

            W16_PERIOD:"2-6 Nov",       W16_LABEL: "Week 16",

            W17_PERIOD:"9-13 Nov", W17_LABEL: "Week 17",

            A1_DUE:"24 August 2015",
            A2_DUE:"2 November 2015",
        }
    };

//**************
// @getCourseId
//
// courseId is located 
// ul class breadcrumb
// - 5th li element of that ul
//    <a href="..course/view.php?id=[0-9]*"

function getCourseId() {

    var match = new RegExp( /^.*course\/view\.php\?id=([0-9]+).*$/  );
    return courseId = $("ul.breadcrumb li:nth-child(5)").html().replace( match,
                        '$1' );
}

//***************
// The main function to do it all

    // replace the values onload
    $(document).ready( function(){

        // figure out which course we're looking at
        var courseId = getCourseId();

        // default to EDC3100, S1, 2015
        if ( ! VARIABLES.hasOwnProperty( courseId ) ) {
            courseId = 7456
        }

        // start using the right values to replace
        var valueHash = VARIABLES[courseId];


        $(".link-studyschedule").attr( "href", valueHash.STUDY_SCHEDULE );
        $(".link-assessments").attr( "href", valueHash.ASSESSMENTS );
        $(".link-teachingstaff").attr( "href", valueHash.TEACHING_STAFF  );

        // replace the hrefs in links -- only email for now
        $( "a.dj_value" ).each( function( index ) {
            var _href = $(this).attr('href');
            _href =  _href.replace( /CE_EMAIL/, valueHash.CE_EMAIL );
            $(this).attr('href',_href);
        });
        // replace the titles in links with class dj_title
        $( "a.dj_title" ).each( function( index ) {
            var title = $(this).attr('title');

            for ( key in VARIABLES[courseId] ) {
                var match = new RegExp( "{{{" + key + "}}}", "g" );
                title =  title.replace( match, valueHash[key] );
                $(this).attr('title', title);
            }
        });

        // get all the class dj_value divs - actually with all
        $( ".dj_value").each( function( index ) {
            for ( key in VARIABLES[courseId] ) {
//            console.log( "div dj_value " + index + " key " + key );
                $(this).text( $(this).text().replace( key, valueHash[key] ) );
            }
        });

        // do the section names as well
        $( "h3.sectionname").each( function( index ) {
//            console.log( index + ": : " + $(this).text() );

            for ( key in VARIABLES[courseId] ) {
                match = "{{{" + key + "}}}";
                $(this).text( $(this).text().replace( match, valueHash[key] ) );
            }
        }); 

        // bread crumbs
        $( "div.breadcrumb-nav").each( function( index ) {
            for ( key in VARIABLES[courseId] ) {
                var match = new RegExp( "{{{" + key + "}}}", "g" );
                var replaced = $(this).html().replace( match, valueHash[key] ) ;
                $(this).html( replaced );
            }
        }); 

        // section navigation
//        $( "span.mdl-left").each( function( index ) {
        $( "div.section-navigation").each( function( index ) {
            for ( key in VARIABLES[courseId] ) {
        //        match = "/\{\{\{" + key + "\}\}\}/g";
                var match = new RegExp( "{{{" + key + "}}}", "g" );
                replaced = $(this).html().replace( match, valueHash[key] ) ;
                $(this).html( replaced );
//                $(this).text( $(this).text().replace( match, VARIABLES[key] ) );
            }
        }); 

  });

