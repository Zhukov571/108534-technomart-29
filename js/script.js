/*Modal*/
!function (e) { "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function (e) { for (var t = this; t && 1 === t.nodeType;) { if (t.matches(e)) return t; t = t.parentNode } return null }) }(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
	var modalButtons = document.querySelectorAll('.js-open-modal'),
		closeButtons = document.querySelectorAll('.js-modal-close');


	modalButtons.forEach(function (item) {

		item.addEventListener('click', function (e) {
			e.preventDefault();
			var modalId = this.getAttribute('data-modal'),
				modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
			modalElem.classList.add('active');
		}); // end click

	}); // end foreach

	closeButtons.forEach(function (item) {

		item.addEventListener('click', function (e) {
			var parentModal = this.closest('.modal');

			parentModal.classList.remove('active');
		});

	}); // end foreach

	document.body.addEventListener('keyup', function (e) {
		var key = e.keyCode;

		if (key == 27) {

			document.querySelector('.modal.active').classList.remove('active');
		};
	}, false);

}); // end ready

/*End Modal*/

/*Carousel*/
const prevButton = document.getElementById("carousel-button-prev");
const nextButton = document.getElementById("carousel-button-next");
const slideNav = document.getElementById("carousel-slide-nav");
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;
let slidePos = 0;
let navigation = slideNav.childNodes;

slideNavigation();

function displaySlide(element, className) {
	for (let item = 0; item < totalSlides; item++) {
		item === slidePos
			? element[item].classList.add(className)
			: element[item].classList.remove(className);
	}
}

function nextSlide() {
	if (slidePos === totalSlides - 1) {
		slidePos = 0;
	} else {
		slidePos++;
	}
	displaySlide(slides, "carousel-item-visible");
	displaySlide(navigation, "nav-current");
}

function prevSlide() {
	if (slidePos === 0) {
		slidePos = totalSlides - 1;
	} else {
		slidePos--;
	}
	displaySlide(slides, "carousel-item-visible");
	displaySlide(navigation, "nav-current");
}

function slideNavigation() {
	for (let slide = 0; slide < totalSlides; slide++) {
		let span = document.createElement("span");
		if (slide === slidePos) {
			span.classList.add("nav-current");
		}
		slideNav.append(span);
		span.addEventListener("click", function () {
			slidePos = slide;
			displaySlide(slides, "carousel-item-visible");
			displaySlide(navigation, "nav-current");
		});
	}
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

setInterval(nextSlide, 2750);
/*End Carousel*/


/*Tabs*/
function Tabs() {
	var bindAll = function () {
		var menuElements = document.querySelectorAll('[data-tab]');
		for (var i = 0; i < menuElements.length; i++) {
			menuElements[i].addEventListener('click', change, false);
		}
	}

	var clear = function () {
		var menuElements = document.querySelectorAll('[data-tab]');
		for (var i = 0; i < menuElements.length; i++) {
			menuElements[i].classList.remove('active');
			var id = menuElements[i].getAttribute('data-tab');
			document.getElementById(id).classList.remove('active');
		}
	}

	var change = function (e) {
		clear();
		e.target.classList.add('active');
		var id = e.currentTarget.getAttribute('data-tab');
		document.getElementById(id).classList.add('active');
	}

	bindAll();
}

var connectTabs = new Tabs();

/*End Tabs*/