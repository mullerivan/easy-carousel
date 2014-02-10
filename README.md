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
