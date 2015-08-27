//Global JS File

(function() {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://web.unthsc.edu/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
}());

(function() {
	for (var i = ENV.current_user_roles.length - 1; i > -1; i--) {

     if (ENV.current_user_roles[i] == 'student' && location.href.match(/\/courses\/\d+\/quizzes/) &&  location.href.indexOf("history?version=1") > -1){
		$("h2 > a.pull-right").hide();
		break;
	} 
}
}());
////////////////////////
//Add Button to Header//
////////////////////////
(function() {
	var menu = $('#menu');
	if (!menu.length) return;
	//Menu Item Support

	var studentSupport = $('<li/>', {
		'class': 'menu-item',
		'id': 'support_menu_item',
		html: '<a class="menu-item-title" href="/">Support&nbsp;<span class="menu-item-title-icon"></span><i class="icon-mini-arrow-down"></i></a><div class="menu-item-drop"><table cellspacing="0"><tbody><tr><td class="menu-item-drop-column">'+
		'<span id="test" class="menu-item-heading" >Research Help</span><ul class="menu-item-drop-column-list">'+
		//List Research Help items
		'<li><a href="http://library.hsc.unt.edu/" target="_blank"><span class="name ellipsis">Library Services</span></a></li>'+
		'<li><a href="http://library.hsc.unt.edu/content/database-tutorials-help" target="_blank"><span class="name ellipsis">Database Tutorials and Help</span></a></li>'+
		'<li><a href="http://guides.library.hsc.unt.edu/writing-styles" target="_blank"><span class="name ellipsis">Writing Styles & Guides</span></a></li>'+
		//Ending
		'</ul></td></tr>'+
		'<td class="menu-item-drop-column">'+
		'<span id="test" class="menu-item-heading">Academic Help</span><ul class="menu-item-drop-column-list">'+
		//List Academic Help items
		'<li><a href="http://web.unthsc.edu/Departments/StudentAffairs/" target="_blank"><span class="name ellipsis">Student Affairs</span></a></li>'+
		'<li><a href="http://web.unthsc.edu/departments/studentaffairs/cap" target="_blank"><span class="name ellipsis">Center for Academic Performance</span></a></li>'+
		'<li><a href="http://web.unthsc.edu/info/200306/center_for_academic_performance/380/tutoring" target="_blank"><span class="name ellipsis">Tutoring</span></a></li>'+
		'<li><a href="http://web.unthsc.edu/info/200306/center_for_academic_performance/382/writing_and_presentation_support" target="_blank"><span class="name ellipsis">Writing & Presentation Support</span></a></li>'+
		'<li><a href="http://web.unthsc.edu/info/200496/office_of_disability_accommodations" target="_blank"><span class="name ellipsis">Office of Disability Accommodations</span></a></li>'+
		//Ending
		'</ul></td></tr>'+
		'<td class="menu-item-drop-column">'+
		//Title in dropdown menu
		'<span id="test" class="menu-item-heading" >Support Resources</span><ul class="menu-item-drop-column-list">'+
		//List items
		//'<li><a href="https://training.instructure.com/courses/347469/" target="_blank"><span class="name ellipsis" target="_blank">Canvas Orientation for Students</span></a></li>'+
		//'<li><a href="https://training.instructure.com/courses/1157710/" target="_blank"><span class="name ellipsis" target="_blank">Canvas Orientation for Instructors</span></a></li>'+
		'<li><a href="http://web.unthsc.edu/helpdesk"><span class="name ellipsis" target="_blank">ITS Helpdesk & Client Services</span></a></li>'+
		'<li><a href="http://canvas.unthsc.edu" target="_blank"><span class="name ellipsis">Canvas Support</span></a></li>'+
		'<li><a href="https://community.canvaslms.com/docs/DOC-2061" target="_blank"><span class="name ellipsis">Canvas Accessibility Statement</span></a></li>'+
		'<li><a href="http://web.unthsc.edu/Departments/StudentAffairs/TES/" target="_blank"><span class="name ellipsis">Testing and Evaluation Services</span></a></li>'+
		//Ending
		'</ul></td></tr>'+
		'</tbody></table></div>'
	});

	menu.append(studentSupport);
})();




///////////////////////////////////
//Add Canvas Video Tour to Header//
///////////////////////////////////
(function() {
	var topbar = $('#topbar');
	if (!topbar.length) return;
	//Menu Item Support

	var canvasTourStudent = $('<div/>',{
		id: 'canvasTour',
		html: '<a href="https://unthsc.instructure.com/courses/782" id="canvasTourMsg" style="left: 0px;" title="Take the Canvas Student Tour" target="_blank">'+
		'<span>New Student in Canvas? Take the Student Tour!</span>'+
		'</a>'
	});
	if(window.location.href == "https://unthsc.instructure.com/"){
		topbar.prepend(canvasTourStudent);
		$('div#canvasTour').addClass("slideAnimation");
	} else{
		topbar.prepend(canvasTourStudent);
	}
	
})();


/*$(document).ready(function(){
	var coursePing = document.createElement('script');
	coursePing.src = "https://dl.dropboxusercontent.com/s/jer542iw128x3fs/pingdom.js";
	coursePing.type = "text/javascript";
	$("head").append(coursePing);
});*/

//////////////////////////////////////////////////////////////////
//Parse Course Number - It is stored in the variable "coursenum"//
//////////////////////////////////////////////////////////////////
var coursenum1 = null;
(function() {
	var matches = location.pathname.match(/\/courses\/(.*)/);
	if (!matches) return;
	coursenum1 = matches[1];
	var killspot = coursenum1.indexOf("/",0); 
	if (killspot >= 0) {
		coursenum1 = coursenum1.slice(0, killspot);
	}
}());


/////////////////////////////////////////////////////
//Where called for, include custom css or jqlibrary//
/////////////////////////////////////////////////////

//If we are on a wiki page, include the stylesheet.
setTimeout(function(){
if ($("#custom-css").length>0){
	var customcssurl = "/courses/" + coursenum1 + "/file_contents/course%20files/global/css/style.css";
	var coursecss = document.createElement('link');
	coursecss.type = "text/css";
	coursecss.rel = "stylesheet";
	coursecss.href = customcssurl;

	if ($("#unt-custom-css").length>0){
		document.getElementById("unt-custom-css").appendChild(coursecss);
	}
	if ($(".unt-custom-css").length>0){
		$(".unt-custom-css").appendChild(coursecss);
	}
	if ($("#custom-css").length>0){
		$("head").append(coursecss);
	}
}
}, 300);

setTimeout(function(){
if ($("#custom-script").length>0){
	var customjsurl = "/courses/" + coursenum1 + "/file_contents/course%20files/global/js/script.js";
	var coursejs = document.createElement('script');
	coursejs.src = customjsurl;
	coursejs.type = "text/javascript";
	document.getElementsByTagName('head')[0].appendChild(coursejs);
}
  }, 300);
  
///////////////////////////////////////////
//Make Unpublished message stick out more//
///////////////////////////////////////////

if ($(".reminder:contains('This Course is Unpublished')").length > 0) {
	$("body").prepend('<style>.reminder {border: 2px solid #a34140;}.reminder h2 {background-color: #FFEAEA; color: #a34140; border-bottom: 2px solid #a34140;font-weight:bold;}</style>');}

/*
Adds bulk publishing and unpublishing
By: Mike Cotterman (Marion Technical College)
Note: location check in IF is based on onPage function by RPFlorence from https://gist.github.com/rpflorence/5817898
*/
$().ready(function (){
	if((location.href.match(/\/courses\/\d+\/modules\/?$/) || location.href.match(/\/courses\/\d+\/?$/)) && $('button.add_module_link').length>0 && $('div#context_modules.editable.ig-list').length>0){
		$('div.header-bar-right').prepend('<button class="btn btn-small" id="mtc-unpublish-all" data-tooltip=\'{"tooltipClass":"popover popover-padded", "position":"bottom"}\'  title="This process may take some time depending on the number of items/modules that need to be unpublished. Scroll down the modules list to watch progress. <br />Also, some items may not be able to be unpublished."><i class="icon-unpublish" style="color:red;"></i> Unpublish All</button> ');
		$('div.header-bar-right').prepend('<button class="btn btn-small" id="mtc-publish-all" data-tooltip=\'{"tooltipClass":"popover popover-padded", "position":"bottom"}\'  title="This process may take some time depending on the number of items/modules that need to be published. Scroll down the modules list to watch progress."><i class="icon-publish MTC-publishAll" style="color:green;"></i> Publish All</button> ');
		
		$('button#mtc-publish-all').click(function(ele){
			$('i.icon-unpublished').parent().trigger("click");
		});
		$('button#mtc-unpublish-all').click(function(ele){
			$('i.icon-publish:not(i.MTC-publishAll)').parent().not('[data-unpublishable=false]').trigger("click");
		});}
		
	});

$().ready(function (){
	if($('#add_user_form').length>0){
		$("#add_user_form input[name='pseudonym[send_confirmation]']").attr("checked",false); //select all options
	}
});


if ($("#left-side").length>0 && location.pathname.match(/\/courses\/(.*)/)){
	$( "ul#section-tabs").find("li > a.home").addClass("icon-home");
	$( "ul#section-tabs").find("li > a.announcements").addClass("icon-announcement");
	$( "ul#section-tabs").find("li > a.assignments").addClass("icon-assignment");
	$( "ul#section-tabs").find("li > a.discussions").addClass("icon-discussion");
	$( "ul#section-tabs").find("li > a.modules").addClass("icon-module");
	$( "ul#section-tabs").find("li > a.quizzes").addClass("icon-quiz");
	$( "ul#section-tabs").find("li > a.grades").addClass("icon-check-plus");
	$( "ul#section-tabs").find("li > a.conferences").addClass("icon-media");
	$( "ul#section-tabs").find("li > a.collaborations").addClass("icon-group");
	$( "ul#section-tabs").find("li > a.people").addClass("icon-user");
	$( "ul#section-tabs").find("li > a.context_external_tool_277").addClass("icon-filmstrip");
	$( "ul#section-tabs").find("li > a.context_external_tool_278").addClass("icon-video");
	$( "ul#section-tabs").find("li > a.files").addClass("icon-download");
	$( "ul#section-tabs").find("li > a.syllabus").addClass("icon-syllabus");
	$( "ul#section-tabs").find("li > a.outcomes").addClass("icon-star");
	$( "ul#section-tabs").find("li > a.pages").addClass("icon-document");
	$( "ul#section-tabs").find("li > a.settings").addClass("icon-settings");
	$( "ul#section-tabs").find("li > a:contains('Proctortack')").addClass("icon-lock");
	$( "ul#section-tabs").find("li > a:contains('Proctortrack')").addClass("icon-lock");
	$( "ul#section-tabs").find("li > a:contains('Chat')").addClass("icon-discussion-reply");
	$( "ul#section-tabs").find("li > a:contains('Peerwise')").addClass("icon-peer-review");
	$( "ul#section-tabs").find("li > a:contains('Student Portfolios')").addClass("fa fa-medkit iconFontIncrease");
}

(function() {
    $("#grades_menu_item > a.menu-item-no-drop").addClass("icon-check-plus");
	$("#calendar_menu_item > a.menu-item-no-drop").addClass("icon-calendar-day");
	$("#courses_menu_item > a.menu-item-title").addClass("icon-folder");
	if($('a.menu-item-title:contains("Courses & Groups")').length){
		$("#courses_menu_item > a.menu-item-title").addClass( "icon-folder-with-groups" );}
	$("#context_external_tool_373_menu_item > a.menu-item-no-drop").addClass("icon-instructure");
	$("#courses_menu_item > a.menu-item-title").addClass("icon-folder");
	$("#resources_menu_item > a.menu-item-title").addClass("icon-collection-save");
	$("#support_menu_item > a.menu-item-title").addClass("icon-question");
}());

/*jslint browser: true, sloppy: false, eqeq: false, vars: false, maxerr: 50, indent: 4, plusplus: true */
/*global $, jQuery, alert, console, tinyMCE */

// These tools were designed to facilitate rapid course development in the Canvas LMS
// Copyright (C) 2014  Kenneth Larsen - Center for Innovative Design and Instruction
// Utah State University

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// http://www.gnu.org/licenses/agpl-3.0.html

////////////////////////////////////////////////////
// KENNETHWARE CONFIG                             //
////////////////////////////////////////////////////


// Development version will be loaded in the following courses
var iframeID,
    // Path to where the canvasCustomTools folder is located
    klToolsPath = 'https://canvastools.unthsc.edu/global/custom_tools/',
    // Path to the tools_variables file
    klToolsVariablesFile = klToolsPath + 'js/tools_variables.js',
    // Path to additional_customization file
    klToolsAdditionalCustomizationFile = klToolsPath + 'js/additional_customization.js',
    // To utilize the features that pull from the Canvas api you will need the hosted php files put their path here
    klApiToolsPath = klToolsPath + 'api/',
    // Path to institutional css file
    klGlobalCSSFile = 'https://canvastools.unthsc.edu/global/css/canvasGlobal.css',
    klFontAwesomePath = '//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css',
    coursenum;

function klGetCourseNum() {
    'use strict';
    var matches, killspot;
    // Parse Course Number - It is stored in the variable "coursenum"
    coursenum = null;
    matches = location.pathname.match(/\/courses\/(.*)/);
    if (matches) {
        coursenum = matches[1];
        killspot = coursenum.indexOf("/", 0);
        if (killspot >= 0) {
            coursenum = coursenum.slice(0, killspot);
        }
    }
}
klGetCourseNum();

//Apply Font-Awesome Everywhere
if ($(".fa").length > 0) {
        $("head").append($("<link/>", { rel: "stylesheet", href: klFontAwesomePath, type: 'text/css' }));
    }
	
// Pull in custom variables
$.getScript(klToolsVariablesFile, function () {
    'use strict';
    console.log("tools_variables.js loaded");
    // Additional Customization
    $.getScript(klToolsAdditionalCustomizationFile, function () {
        console.log("additional_customization.js loaded");
        // Run code to initialize tools
        $.getScript(klToolsPath + "js/master_controls.js", function () {
            console.log("master_controls.js loaded");
        });
    });
});

////////////////////////////////////////////////////
// END KENNETHWARE CONFIG                         //
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Start CanvaBadges                              //
////////////////////////////////////////////////////

$(function() {
  console.log("CANVABADGES: Loaded!");
  // NOTE: if pasting this code into another script, you'll need to manually change the
  // next line. Instead of assigning the value null, you need to assign the value of
  // the Canvabadges domain, i.e. "https://www.canvabadges.org". If you have a custom
  // domain configured then it'll be something like "https://www.canvabadges.org/_my_site"
  // instead.
  var protocol_and_host = null;
  if(!protocol_and_host) {
    var $scripts = $("script");
    $("script").each(function() {
      var src = $(this).attr('src');
      if(src && src.match(/canvas_profile_badges/)) {
        var splits = src.split(/\//);
        protocol_and_host = splits[0] + "//" + splits[2];
      }
      var prefix = src && src.match(/\?path_prefix=\/(\w+)/);
      if(prefix && prefix[1]) {
        protocol_and_host = protocol_and_host + "/" + prefix[1];
      }
    });
  }
  if(!protocol_and_host) {
    console.log("CANVABADGES: Couldn't find a valid protocol and host. Canvabadges will not appear on profile pages until this is fixed.");
  }
  var match = location.href.match(/\/(users|about)\/(\d+)$/);
  if(match && protocol_and_host) {
    console.log("CANVABADGES: This page shows badges! Loading...");
    var user_id = match[2];
    var domain = location.host;
    var url = protocol_and_host + "/api/v1/badges/public/" + user_id + "/" + encodeURIComponent(domain) + ".json";
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: url,
      success: function(data) {
        console.log("CANVABADGES: Data retrieved!");
        if(data.objects && data.objects.length > 0) {
          console.log("CANVABADGES: Badges found! Adding to the page...");
          var $box = $("<div/>", {style: 'margin-bottom: 20px;'});
          $box.append("<h2 class='border border-b'>Badges</h2>");
          for(idx in data.objects) {
            var badge = data.objects[idx];
            var $badge = $("<div/>", {style: 'float: left;'});
            var link = protocol_and_host + "/badges/criteria/" + badge.config_id + "/" + badge.config_nonce + "?user=" + badge.nonce;
            var $a = $("<a/>", {href: link});
            $a.append($("<img/>", {src: badge.image_url, style: 'width: 72px; height: 72px; padding-right: 10px;'}));
            $badge.append($a);
            $box.append($badge);
          }
          $box.append($("<div/>", {style: 'clear: left'}));
          $("#edit_profile_form,fieldset#courses,.more_user_information + div").after($box);
        } else {
          console.log("CANVABADGES: No badges found for the user: " + user_id + " at " + domain);
        }
      },
      error: function(err) {
        console.log("CANVABADGES: Badges failed to load, API error response");
        console.log(err);
      },
      timeout: 5000
    });
  } else {
    console.log("CANVABADGES: This page doesn't show badges");
  }
});
////////////////////////////////////////////////////
// End CanvaBadges     		                      //
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// Start Announcements Widget                     //
////////////////////////////////////////////////////
// Original code from Matt Huwiler modified by Josh Blumberg for Champlain College
// Includes Truncate code from Pathable https://github.com/pathable/truncate
// Edited 3/20/2014

$(function() {

    // Config
    // At most display this many announcements
    var maxDisplay = 20;

    // Don't display announcements older than n days.  CURRENTLY NOT USED
    var noOlderThan = 0;

    // Abbreviate announcements to a set length
    var truncateLength = 150;

    // Matches trailing non-space characters.
    var chop = /(\s*\S+|\s)$/;

    // Return a truncated html string.  Delegates to $.fn.truncate.
    $.truncate = function(html, options) {
        return $('<div></div>').append(html).truncate(options).html();
    };

    // Truncate the contents of an element in place.
    $.fn.truncate = function(options) {
        if ($.isNumeric(options)) options = {length: options};
        var o = $.extend({}, $.truncate.defaults, options);

        return this.each(function() {
            var self = $(this);

            if (o.noBreaks) self.find('br').replaceWith(' ');

            var text = self.text();
            var excess = text.length - o.length;

            if (o.stripTags) self.text(text);

            // Chop off any partial words if appropriate.
            if (o.words && excess > 0) {
                excess = text.length - text.slice(0, o.length).replace(chop, '').length - 1;
            }

            if (excess < 0 || !excess && !o.truncated) return;

            // Iterate over each child node in reverse, removing excess text.
            $.each(self.contents().get().reverse(), function(i, el) {
                var $el = $(el);
                var text = $el.text();
                var length = text.length;

                // If the text is longer than the excess, remove the node and continue.
                if (length <= excess) {
                    o.truncated = true;
                    excess -= length;
                    $el.remove();
                    return;
                }

                // Remove the excess text and append the ellipsis.
                if (el.nodeType === 3) {
                    $(el.splitText(length - excess - 1)).replaceWith(o.ellipsis);
                    return false;
                }

                // Recursively truncate child nodes.
                $el.truncate($.extend(o, {length: length - excess}));
                return false;
            });
        });
    };

    $.truncate.defaults = {

        // Strip all html elements, leaving only plain text.
        stripTags: false,

        // Only truncate at word boundaries.
        words: false,

        // Replace instances of <br> with a single space.
        noBreaks: false,

        // The maximum length of the truncated html.
        length: Infinity,

        // The character to use as the ellipsis.  The word joiner (U+2060) can be
        // used to prevent a hanging ellipsis, but displays incorrectly in Chrome
        // on Windows 7.
        // http://code.google.com/p/chromium/issues/detail?id=68323
        ellipsis: '\u2026' // '\u2060\u2026'

    };

    // Are we on the homepage?  If so, can we extract the atom feed URL?  And is it a valid feed URL?
    if ( ! /courses\/\d+(?:\/(?:pages|wiki)\/front\-page)?\/?$/.test(document.location.href) ) return;

    // If accessed from /pages/front-page or /wiki/front-page, atom feed doesn't exist.  Display a note explaining this.
    if ( /courses\/\d+(?:\/(?:pages|wiki)\/front\-page)\/?$/.test(document.location.href) ) {
        //window.location.replace(document.location.href.replace(/(?:pages|wiki)\/front\-page\/?/, ''));
        $("#cc-homepage-announcements").append('<p>To view the latest announcements please click on "Announcements" or "Home"</p>');
        return;
    }

    var $atomLink = $('link[rel=alternate][title="Course Atom Feed"]');
    if ( ! $atomLink ) return;
    var atomCourseUrl = $.trim($atomLink.attr('href'));
    if (!atomCourseUrl || !~atomCourseUrl.indexOf("_") ||!~atomCourseUrl.indexOf(".atom")) return;

    // Sweet.  Now let's extract the atom feed ID from the course feed url so we can construct an announcements feed URL
    var feedId = atomCourseUrl.substring(atomCourseUrl.lastIndexOf("/") + 1, atomCourseUrl.lastIndexOf(".atom"));
    if (!feedId) return;

    // Now that we have the feed ID, we can construct the announcements feed URL from it
    var announcementsFeedUrl = 'https://' + location.hostname + '/feeds/announcements/' + feedId + '.atom';

    console.log("Found feed URL: " + announcementsFeedUrl.toString());

    var $xhr = $.ajax({
            url: announcementsFeedUrl,
            dataType: "xml"
        }),
        announcements = [];

    $xhr.done(function( data ) {
        var $xml = $(data);
        $xml.find("entry").each(function(i, entry) {
            var $this = $(entry);
            announcements.push({
                link: $.trim($this.find('link').attr('href')),
                title: $.trim($this.find('title').text()),
                published: new Date($.trim($this.find('published').text())),
                author: $.trim($this.find('author').text()),
                content: $.trim($this.find('content').text())
            });
        });

        //This should work but it appears to be backwards for Safari (works in Firefox and Chrome)
        announcements.sort(function( a, b ) {

            var aDate = a.published.getTime(),
                bDate = b.published.getTime();

            return aDate < bDate ? 1 : (aDate > bDate ? -1 : 0);

        });

        $("#cc-homepage-announcements").append((function() {
            var announcementsHtml = [];
            var displayedCount = 0;
            var shortenedTitle;
            for (var i = 0; i < announcements.length; i++) {
                // Was announcement published longer than than 1 week ago?
                //var oneWeekAgo = new Date().getTime() - noOlderThan * 24 * 60 * 60 * 1000;
                //if (announcements[i].published.getTime() > oneWeekAgo) {
                //}

                //Strip the word "Announcement: " that is at the start of every title
                if(announcements[i].title.search("Announcement:") >= 0) {
                    shortenedTitle = announcements[i].title.substring(14);
                }else{
                    shortenedTitle = announcements[i].title;
                }

                announcementsHtml.push('<h6 style="text-align:left;color:#C47C12">' + (announcements[i].published.getMonth() + 1) + '/'+ announcements[i].published.getDate() + '/' + announcements[i].published.getFullYear() + '</h6>');
                announcementsHtml.push('<h5 style="margin:0px;padding:0px;text-align:left;"><a href="' + announcements[i].link + '">' + shortenedTitle + '</a></h5>');
                announcementsHtml.push('<p>' + $.truncate(announcements[i].content,truncateLength) + '</p>');
                displayedCount++;


                if (displayedCount >= maxDisplay) break;
                announcementsHtml.push('<hr style="color:#1C1C1C; background-color:#1C1C1C; height:1px;">');  //Add a <hr> if there are more announcements
            }

            return $( announcementsHtml.join(""));

        }()));

    });


    $xhr.fail(function( xhr, status, err ) {
        // Show an error if desired if feed failed to load
    });

});

////////////////////////////////////////////////////
// End Announcements Widget                       //
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Start Course List Filter                       //
////////////////////////////////////////////////////


    if ($('#my_courses_table').length > 0) {
        var kl_course_filter = '<div id="kl_course_filter_wrapper"><label for="kl_course_filter">Filter by Term:</label> <select id="kl_course_filter"><option value="all">View All</option>',
            kl_course_terms = [],
            txt;
        $('.course-list-term').each(function () {
            // Grab the text
            txt = $(this).text();
            // Add if not already in the array
            if ($.inArray(txt, kl_course_terms) === -1 ) {
                kl_course_terms.push(txt);
            }
        });
        kl_course_terms.sort();
        $.each(kl_course_terms, function (index, el) {
            kl_course_filter += '<option value="' + el + '">' + el + '</option>';
        });
        if ($('.course-list-table-row > .course-list-course-title-column:not(:has(span.course-list-term))').length > 0) {
            kl_course_filter += '<option value="No Term Set">No Term Set</option>';
        }
        kl_course_filter += '</select></div>';
        $('#my_courses_table').before(kl_course_filter);
        $('#kl_course_filter').change(function () {
            var selectedTerm = $('#kl_course_filter option:selected').text();
            console.log(selectedTerm);
            if (selectedTerm === 'View All') {
                $('.course-list-table-row').show();
            } else if (selectedTerm === 'No Term Set') {
                $('.course-list-table-row').hide();
                $('.course-list-table-row > .course-list-course-title-column:not(:has(span.course-list-term))').closest('tr').show();
            } else {
                $('.course-list-table-row').hide();
                $('.course-list-term:contains("' + selectedTerm + '")').closest('tr').show();
            }

        });
    }

////////////////////////////////////////////////////
// End Course List Filter                         //
////////////////////////////////////////////////////

/*if (location.pathname.match(/\/courses\/\d+\/users/) && ($('#addUsers').length>0)){
	
	
	var findAUser = $('<div/>',{
		'class': 'rs-margin-lr',
		'id': 'findingUser',
		html:   '<form accept-charset="UTF-8" action="/accounts/1/users" class="ic-Form-control" id="new_user" method="get"><div style="margin:0;padding:0;display:inline">'+
		'<input name="utf8" value="✓" type="hidden"></div>'+
		'<div class="ic-Input-group"><input class="ic-Input" id="user_name" name="user[name]" value="" aria-labelledby="user_name_label" type="text"><button class="Button">Go</button>'+
        '</div></form></div>'
	});
	$('#right-side').append(findAUser);
}*/