### Carousel

The carousel expects minimal markup to start, and builds itself out from there. Start by adding the initial image to the carousel. Then, you can either attach an array of image source paths to the carousel DOM "data-images" or pass the array as the "images" option. Then, add your previous and next buttons, and a list with a single list-item containing an active-state indicator. The carousel will build the rest of the indicators depending on the number of images it has discovered. 

It's a good idea to use links that reference the next and previous images for your buttons. This way, visitors without JavaScript can still navigate to a few more images by clicking these buttons since they are essentially image links.

#### Markup

	<div class="carousel" data-images='["img/project1.jpg", "img/project2.jpg"]'>
		<a href="img/project1.jpg" class="button prev" role="button">Previous</a>
		<a href="img/project2.jpg" class="button next" role="button">Next</a>
		<img src="img/project1.jpg"/>
		<ol class="indicators">
			<li><a class="indicator" role="button"></a></li>
		</ol>
	</div>

#### Usage

	$('.carousel').gCarousel();

#### Options

	images: false (read from data)
	activeClass: 'active'
	buttonSelector: 'a'
	indicatorsClass: 'indicators'
	nextClass: 'next'
	prevClass: 'prev'
