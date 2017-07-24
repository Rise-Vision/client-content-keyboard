# JQuery Keyboard for Interactive Presentations

This Keyboard uses JS & jQuery to detect user interactions with the keys and add those values to an input field. To be used with interactive presentations that require a keyboard for searching or submitting user information.

The keyboard contains all alphabet keys and can input text in lowercase or capitals.

The keyboard can also input numerical values as well as all characters commonly found in email addresses such as '@', '-' and '.'.

For the key icons on caps lock and delete, we use an SVG inject plugin added via npm `npm install svg-injector-2` so the colour values can be targeted with CSS.

### Setup

The Keyboard has been set up as a basic jQuery plug in with a dedicated SASS file.

1. Add the keyboard.js, svg-injector.min.js, and keyboard.scss files to the project;

2. Add an element to the HTML with the ID of keyboard, e.g. `<div id="keyboard">`;

3. In the main javascript file add the following:

		```javascript
		$("#keyboard").makeKeyboard();

		//inject the SVG elements
		new SVGInjector().inject(document.querySelectorAll('svg[data-src]'));
		```

### Styling

To change the keyboard styles, modications can be made to variables in the keyboard.scss file. The keyboard layout is built with flexbox.

