easy-carousel
=============

#Slider
Include the div HTML on your web site in some partial if you want only show on one web page and in your layout if you want to show this on all your webpage

	<div class="slider"></div>
#include css

    <link rel="stylesheet" type="text/css" href="slider.css">

on silverstripe

    Requirements::themedCSS('slider.css');

#fade effect
just include the css for fade

        <link rel="stylesheet" type="text/css" href="slider-fade.css">

on silverstripe

        Requirements::themedCSS('slider-fade');

or change the option on the js file

	var fade_effect = true;
	var css_folder = '/themes/simple/css/'; //where are slider-fade.css


#Include the javascript on the  website

	jquery, carousel.js, transition.js, slider.js

#Silverstripe
on mysite/code/page.php

	Requirements::javascript('themes/{MYTHEME}/javascript/jquery.js);
	Requirements::javascript('themes/{MYTHEME}/javascript/slider.js');

#php
Include de slider.php on your document root directory  on silverstripe just drop the file on the root project

#Dependencis Jquery

#Style

	.carousel{
		//What you want
		}

check slider-fade for more examples off style

#Aviable options on js file

	var link = new Array('http://www.cactusnelson.org.nz', 'http://getbootstrap.com/javascript/#carousel', 'http://mullerivan.com.ar'); //link to display SHOULD BE ARRAY
	var interval = 2000; //The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
	var show_navigation = true; //show or hidden all navigation
	var folder = 'assets/slider/'; //where are  all the images
	var fade_effect = true ; //fade efect
	var css_folder = '/themes/simple/css/'; //where are slider-fade.css
