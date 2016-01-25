


    var VARIABLES = {
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
       W0_PERIOD:"Before 2 Mar",
       W0_TITLE: "Orientation and getting ready",

       W1_PERIOD:"2-6 Mar", W1_LABEL: "Week 1",
       W1_START: "2nd March",
       W1_TITLE: "ICT, PLNs and You",

       W2_PERIOD:"9-13 Mar", W2_LABEL: "Week 2",
       W2_START: "9th March",
       W2_TITLE: "ICT and Pedagogy: Why and What?",

       W3_PERIOD:"16-20 Mar", W3_LABEL: "Week 3",
       W3_START: "16th March",
       W3_TITLE: "RAT, SLIC, and digital literacy",

       W4_PERIOD:"23-27 Mar", W4_LABEL: "Week 4",
       W4_START: "23rd March",
       W4_TITLE: "Effective planning: A first step",

       W5_PERIOD:"30 Mar-3 Apr",       W5_LABEL: "Week 5",
       W5_START: "30th March",
       W5_TITLE: "Developing your learning plan",

       W6_PERIOD:"6-10 Apr", W6_LABEL: "Recess #1",

       W7_PERIOD:"13-17 Apr", W7_LABEL: "Recess #2",

       W8_PERIOD:"20-24 Apr", W8_LABEL: "Week 8",
       W8_START: "29th April",
       W8_TITLE: "Finishing your UoW",

       W9_PERIOD:"27 Apr-1 May", W9_LABEL: "Week 9",
       W9_START: "27th April",
       W9_TITLE: "Professional experience: Expectations and design",

       W10_PERIOD:"4-8 May", W10_LABEL: "Week 10",
       W10_START: "4th May",
       W10_TITLE: "Digital Citizenship",

       W11_PERIOD:"11-15 May", W11_LABEL: "Week 11",
       W11_START: "11th May",
       W11_TITLE: "IWBs and CLEM",

       W12_PERIOD:"18-22 May", W12_LABEL: "PE Week 1",

       W13_PERIOD:"25-29 May", W13_LABEL: "PE Week 2",

       W14_PERIOD:"1 Jun-5 Jun", W14_LABEL: "PE Week 3",

       W15_PERIOD:"8-12 Jun", W15_LABEL: "Week 15",
       W15_START: "8th June",
       W15_TITLE: "What happened and what comes next?",

       W16_PERIOD:"15-19 Jun",       W16_LABEL: "Week 16",

       W17_PERIOD:"22-26 Jun", W17_LABEL: "Week 17",

       A1_DUE:"30 March 2015",
       A2_DUE:"4 May 2015",
       A3_DUE:"15 June 2015"
    };

    // replace the values onload
    $(document).ready( function(){

        // replace the hrefs in links -- only email for now
        $( "a.dj_value" ).each( function( index ) {
            var _href = $(this).attr('href');
            _href =  _href.replace( /CE_EMAIL/, VARIABLES["CE_EMAIL"] );
            $(this).attr('href',_href);
        });

        // replace the titles in links with class dj_title
        $( "a.dj_title" ).each( function( index ) {
            var title = $(this).attr('title');
console.log( "found title of " + title );

            for ( key in VARIABLES ) {
                var match = new RegExp( "{{{" + key + "}}}", "g" );
                title =  title.replace( match, VARIABLES[key] );
console.log( "-- modified to " + title );
                $(this).attr('title', title);
            }
        });

        // get all the class dj_value divs - actually with all
        $( ".dj_value").each( function( index ) {
            for ( key in VARIABLES ) {
            console.log( index + ": : " + $(this).text() );
                $(this).text( $(this).text().replace( key, VARIABLES[key] ) );
            }
        });
console.log( "done hello 27" );
        // do the section names as well
        $( "h3.sectionname").each( function( index ) {
//            console.log( index + ": : " + $(this).text() );

            for ( key in VARIABLES ) {
                match = "{{{" + key + "}}}";
                $(this).text( $(this).text().replace( match, VARIABLES[key] ) );
            }
        }); 

        // bread crumbs
        $( "div.breadcrumb-nav").each( function( index ) {
            for ( key in VARIABLES ) {
                var match = new RegExp( "{{{" + key + "}}}", "g" );
                var replaced = $(this).html().replace( match, VARIABLES[key] ) ;
                $(this).html( replaced );
            }
        }); 

        // section navigation
//        $( "span.mdl-left").each( function( index ) {
        $( "div.section-navigation").each( function( index ) {
            for ( key in VARIABLES ) {
    console.log( index + " [ " + key + " ] : " + $(this).html() );
        //        match = "/\{\{\{" + key + "\}\}\}/g";
                var match = new RegExp( "{{{" + key + "}}}", "g" );
                replaced = $(this).html().replace( match, VARIABLES[key] ) ;
    console.log( "replaced with " + replaced );
                $(this).html( replaced );
//                $(this).text( $(this).text().replace( match, VARIABLES[key] ) );
            }
        }); 
  });

