app.nav = function() {
	
	// setup hide and show of nav
	if ( document.getElementById('nav-select') ) {
		var navBtn = document.getElementById('nav-select');
		navBtn.onclick = function(e){
			e.stopPropagation();
			var mainNav = document.querySelector('.main-nav');
			mainNav.classList.toggle('nav-active');
		};
		// hide the nav if you click away 
		document.body.addEventListener('click', function(e) {
			var mainNav = document.querySelector('.main-nav');
			mainNav.classList.remove('nav-active');
		});
	}
	if (window.pathname = '/') {
		var navLogo = document.querySelector('.page-nav__logo');
		var pageLogo = document.querySelector('.page-logo');
		var crossOver = 90;
		navLogo.style.opacity = 0;
		// want to set opacity based upon a percentage of the initial scrollY value.
		// Heading is at full opacity at 70px
		window.onscroll = function() {
			// how many pixels until main logo is gone and nav logo is visible.
			fade(navLogo, 90);
			fade(pageLogo, 90, true);
		}
	}
	function fade(node, px, fadeOut) {
		// helper function to fade in and out objects based up position in browser
		// if reverse is set to true, it will fade
		var opacity = window.scrollY * (100 / px) / 100;
		opacity > 1 ? opacity = 1 : true;
		if(fadeOut) {
			node.style.opacity = 1 - opacity;
			return;
		} 
		node.style.opacity = opacity;
	};
	
	
}
(function() {
	app.nav();
});