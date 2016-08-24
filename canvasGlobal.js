//Global JS File

(function() {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://web.unthsc.edu/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
}());

/*(function() {
	for (var i = ENV.current_user_roles.length - 1; i > -1; i--) {

     if (ENV.current_user_roles[i] == 'student' && location.href.match(/\/courses\/\d+\/quizzes/) &&  location.href.indexOf("history?version=1") > -1){
		$("h2 > a.pull-right").hide();
		break;
	} 
}
}());*/


///////////////////////////////////
//Add Canvas Video Tour to Header//
///////////////////////////////////

(function() {
	var menu = $('#menu');
	
	if (!menu.length) return;
	
	/*var canvasTourStudent = $('<div/>',{
		class: 'ic-flash-static ic-flash-info ic-flash--Theme-Editor',
		id: 'cus-top-menu',
		html: '<ul><li><a href="https://unthsc.instructure.com/courses/782" target="_blank">Canvas Student Orientation</a></li><li><a href="http://library.hsc.unt.edu/" target="_blank">Research Support</a>'+
		'<li><a href="https://www.unthsc.edu/students/" target="_blank">Academic Support</a>'+		
		'<li><a href="http://www.unthsc.edu/canvas" target="_blank">Canvas Support</a>'+
		'<li><a href="http://web.unthsc.edu/helpdesk" target="_blank">ITS Helpdesk</a></li>'+
		//Ending
		'</ul></div>'
	});*/
	
	var canvasTourStudent = $('<li/>',{
		class: 'menu-item ic-app-header__menu-list-item',
		id: 'cus-link-1',
		html: '<a class="ic-app-header__menu-list-link" href="https://unthsc.instructure.com/courses/782" target="_blank"><div class="menu-item__text">Canvas Orientation</div></a></li>'		
	});
	
	/*var ResearchSupport = $('<li/>',{
		class: 'menu-item ic-app-header__menu-list-item',
		id: 'cus-link-2',
		html: '<a class="ic-app-header__menu-list-link" href="http://library.hsc.unt.edu/" target="_blank"><div class="menu-item__text">Library</div></a></li>'		
	});*/
	
	/*var ITSSupport = $('<li/>',{
		class: 'menu-item ic-app-header__menu-list-item',
		id: 'cus-link-3',
		html: '<a class="ic-app-header__menu-list-link" href="http://web.unthsc.edu/helpdesk" target="_blank"><div class="menu-item__text">ITS Helpdesk</div></a></li>'		
	});*/
	
	menu.append(canvasTourStudent);
	
	
	
})();

(function() {
  	$("#cus-link-1 > a.ic-app-header__menu-list-link").addClass("icon-instructure");
	$("#context_external_tool_672_menu_item > a > svg").hide();
	$("#context_external_tool_672_menu_item > a.ic-app-header__menu-list-link").addClass("icon-syllabus");
	/*$("#context_external_tool_681_menu_item > a > svg").hide();
	$("#context_external_tool_681_menu_item > a.ic-app-header__menu-list-link").addClass("icon-pin");*/
	
	
	/*"removeClass("ic-icon-svg--commons svg-icon-commons").addClass("ic-icon-svg--syllabus svg-icon-syllabus");*/
	/*$("#cus-link-2 > a.ic-app-header__menu-list-link").addClass("icon-search");*/
	/*$("#cus-link-3 > a.ic-app-header__menu-list-link").addClass("icon-info");*/
}());

$().ready(function (){
	var matchme = location.pathname.match(/\/accounts\/1\/external_tools\/672\.*/);
	if(!matchme) return;
		$("div.ic-app-nav-toggle-and-crumbs").hide();
		$("div#left-side").hide();
		$("div.ic-app-main-layout-horizontal").css("margin-left", "0px");
});




//////////////////////////////////////////////////////////////////
//Parse Course Number - It is stored in the variable "coursenum"//
//////////////////////////////////////////////////////////////////
/*var coursenum1 = null;
(function() {
	var matches = location.pathname.match(/\/courses\/(.*)/);
	if (!matches) return;
	coursenum1 = matches[1];
	var killspot = coursenum1.indexOf("/",0); 
	if (killspot >= 0) {
		coursenum1 = coursenum1.slice(0, killspot);
	}
}());*/


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
			$('i.icon-unpublish').parent().trigger("click");
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

///////////////////////////////////////////
//Make Unpublished message stick out more//
///////////////////////////////////////////

if ($(".reminder:contains('This Course is Unpublished')").length > 0) {
	$("body").prepend('<style>.reminder {border: 2px solid #a34140;}.reminder h2 {background-color: #FFEAEA; color: #a34140; border-bottom: 2px solid #a34140;font-weight:bold;}</style>');}


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
    klToolsPath = 'https://canvastools.unthsc.edu/global/design_tools/',
    // Path to the tools_variables file
    klToolsVariablesFile = klToolsPath + 'js/tools_variables.js',
    // Path to additional_customization file
    klToolsAdditionalCustomizationFile = klToolsPath + 'js/additional_customization.js',
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

/////////////////////////////////////////////////////
//Where called for, include custom css or jqlibrary//
/////////////////////////////////////////////////////

//If we are on a wiki page, include the stylesheet.



setTimeout(function(){
if ($("#custom-css").length>0){
	var customcssurl2 = "/courses/" + coursenum + "/file_contents/course%20files/global/css/style.css";
	var coursecss2 = document.createElement('link');
	
	coursecss2.type = "text/css";
	coursecss2.rel = "stylesheet";
	coursecss2.href = customcssurl2;

	document.getElementsByTagName('head')[0].appendChild(coursecss2);
}
}, 300);

setTimeout(function(){
if ($("#custom-css").length>0){
	var customcssurl = "https://canvastools.unthsc.edu/global/bach-epid5313/global/css/style.css";
	var coursecss = document.createElement('link');
	
	coursecss.type = "text/css";
	coursecss.rel = "stylesheet";
	coursecss.href = customcssurl;
	document.getElementsByTagName('head')[0].appendChild(coursecss);
}
}, 300);

setTimeout(function(){
if ($("#custom-css").length>0){
	var customjsurl = "https://canvastools.unthsc.edu/global/bach-epid5313/global/js/script.js";
	/*var customjsurl = "/courses/" + coursenum + "/file_contents/course%20files/global/js/script.js";*/
	var coursejs = document.createElement('script');
	coursejs.src = customjsurl;
	coursejs.type = "text/javascript";
	document.getElementsByTagName('head')[0].appendChild(coursejs);
}
  }, 300);
 


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
  var protocol_and_host = 'https://www.canvabadges.org';
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
        $('.course-list-term-column').each(function () {
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
        if ($('.course-list-table-row > .course-list-course-title-column:not(:has(span.course-list-term-column))').length > 0) {
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
                $('.course-list-table-row > .course-list-course-title-column:not(:has(span.course-list-term-column))').closest('tr').show();
            } else {
                $('.course-list-table-row').hide();
                $('.course-list-term-column:contains("' + selectedTerm + '")').closest('tr').show();
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

////////////////////////////////////////////////////
// Start Gamification Menu		                  //
////////////////////////////////////////////////////
var gleVariables = {
 gleLimitByCourse: true,
    // Change klLimitByUser to "true" to limit to users in the klUserArray array
    // klUserArray is the Canvas user ID not the SIS user ID
    gleCourseArray: [
        '6572'
    ]
};

function gleTriggerCourseCheck() {
    'use strict';
	
    var gleLoadTools = false;

    console.log('gleTriggerCourseCheck()');
    // Only proceed if this passes the limits on the tools
    if (gleVariables.gleLimitByCourse === true) {
        console.log(coursenum);
        // If the user's Canvas ID is in the klToolsVariables.klUserArray
        if ($.inArray(coursenum, gleVariables.gleCourseArray) !== -1) {
            gleLoadTools = true;
        }
    }
	if (gleLoadTools) {
        if ($('div#left-side > nav > ul#section-tabs').length > 0) {
			$('ul#section-tabs > li').hide();
            $('ul#section-tabs > li > a.home').text("Main Menu");
				$('ul#section-tabs > li > a.home').hover(function(){
					$(this).text("Home")}, function(){$(this).text("Main Menu");});
			$('ul#section-tabs > li > a.announcements').text("Messages");
				$('ul#section-tabs > li > a.announcements').hover(function(){
					$(this).text("Announcements")}, function(){$(this).text("Messages");});
			$('ul#section-tabs > li > a.assignments').text("Challenges");
				$('ul#section-tabs > li > a.assignments').hover(function(){
					$(this).text("Assignments")}, function(){$(this).text("Challenges");});
            $('ul#section-tabs > li > a.discussions').text("Town Commune");
				$('ul#section-tabs > li > a.discussions').hover(function(){
					$(this).text("Discussions")}, function(){$(this).text("Town Commune");});
			$('ul#section-tabs > li > a.grades').text("Experience Points");
				$('ul#section-tabs > li > a.grades').hover(function(){
					$(this).text("Grades")}, function(){$(this).text("Experience Points");});
			$('ul#section-tabs > li > a.modules').text("World Map");
				$('ul#section-tabs > li > a.modules').hover(function(){
					$(this).text("Modules")}, function(){$(this).text("World Map");});
			$('ul#section-tabs > li > a.people').text("Heroes");
				$('ul#section-tabs > li > a.people').hover(function(){
					$(this).text("People")}, function(){$(this).text("Heroes");});
			$('ul#section-tabs > li').show();
        } else {
            // console.log('Check Again');
            setTimeout(function () {
                gleTriggerCourseCheck();
            }, 500);
		}
   }
}
gleTriggerCourseCheck();


////////////////////////////////////////////////////
// End Gamification Menu		                  //
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Hide Canvas Dashboard Feedback                 //
////////////////////////////////////////////////////


var feedbackWrappersArray = [
        '#right-side' // Course Front Page
        
    ]

function feedbackCheck(feedbackWrapperElement) {
    'use strict';
    var feedbackLoaded = false;
    // Content Pages
    if ($('div.recent_feedback').length > 0) {
        feedbackLoaded = true;
    }
    if (feedbackLoaded) {
        console.log('Feedback has loaded');
        postFeedbackLoaded();
    } else {
        setTimeout(function () {
            console.log('Still no content, check again (' + feedbackWrapperElement + ')');
            feedbackCheck(feedbackWrapperElement);
        }, 100);
    }
}

function postFeedbackLoaded (){
	'use strict';
for (var i = ENV.current_user_roles.length - 1; i > -1; i--) {
	if(ENV.current_user_roles[i] == 'student'){
	setTimeout( function(){		 
	if( $('#right-side-wrapper').length > 0 && $('#dashboard').length > 0){	
		$('#right-side-wrapper > aside > div.recent_feedback > h2').after("<span class='toggleFeedbackMsg'>Feedback Currently Hidden</span>");
		
		$('aside#right-side > div.rs-margin-lr').before("<button class='btn button-sidebar-wide Button--secondary toggleFeedback' type='button'>Show Feedback</button>");
		
		 
	 } 
	 
	 else if  (location.pathname.match(/\/courses\/(.*)/) && $('div.recent_feedback').length > 0){
			$('#right-side-wrapper > aside > div.recent_feedback > h2').after("<span class='toggleFeedbackMsg'>Feedback Currently Hidden</span>");
			$('aside#right-side').append("<button class='btn button-sidebar-wide Button--secondary toggleFeedback' type='button'>Show Feedback</button>");
		    
			}	
	 else {
	 }
		
		$('.toggleFeedback').click(function(){
			$("#right-side-wrapper > aside > div.recent_feedback > ul").slideToggle();
				$(this).text(function(i, v){
					return v === 'Show Feedback' ? 'Hide Feedback' : 'Show Feedback'
				});
		     $('span.toggleFeedbackMsg').toggle("slow");
		 });
		 
	}, 300); 
	console.log("Feedback Toggle Loaded");
	}
	};
};

$(document).ready(function () {
    'use strict';
    var task,
        i;

    // Identify which page we are on and when the content has loaded
    for (i = 0; i <= feedbackWrappersArray.length; i++) {
        if ($(feedbackWrappersArray[i]).length > 0) {
            // console.log(klContentWrappersArray[i] + ' Found');
            feedbackCheck(feedbackWrappersArray[i]);
            break;
        }
    }
});

////////////////////////////////////////////////////
// End  Canvas Dashboard Feedback                 //
////////////////////////////////////////////////////