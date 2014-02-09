#Dependencis Jquery

#Slider
Include the div HTML on your web site in some partial if you want only show on one web page and in your layout if you want to show this on all your webpage

	<div class="slider"></div

#Include the javascript on the  website

	carousel.js, transition.js, slider.js

#Silverstripe
on mysite/code/page.php
	Requirements::javascript('themes/{MYTHEME}/javascript/carousel.js');
	Requirements::javascript('themes/{MYTHEME}/javascript/transition.js');
	Requirements::javascript('themes/{MYTHEME}/javascript/slider.js');


#Include de slider.php on your document root directory  on silverstripe just drop the file on the root project


#Style
.carousel{
	//What you want
	}
