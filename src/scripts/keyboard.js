(function($){

	"use strict";

	const $keyboard = $("#keyboard");
  const $input = $("input");

  //Set the capital letters and numbers to false on initialization
  let isCaps = false;
  let isNum = false;

  const keyboard = {};

  //Toggle the capital letters on and off
  keyboard.toggleCaps = () => {
  	isCaps = !isCaps ? true : false;
  	let $letter = $keyboard.find($(".letter"));
  	$letter.find(".on").toggleClass("caps");
  }

  //Toggle the numerical keys on and off
  keyboard.changeKeys = () => {
  	isNum = !isNum ? true : false;
  	let $letter = $keyboard.find($(".letter"));
  	let $numKey = $keyboard.find($(".key-toggle"));
  	$numKey.find(".on").toggleClass("visible");
  	$numKey.find(".off").toggleClass("visible");
  	$letter.find(".on").toggleClass("visible");
  	$letter.find(".off").toggleClass("visible");
  }

  //Add the selected key to the input value
  keyboard.type = function() {
  	if (!isCaps && !isNum) {
  		let character = this.find(".on").html();
  		$input.val($input.val() + character);
  		return true;
  	} else if (isCaps && !isNum) {
  		let character = this.find(".on").html();
  		$input.val($input.val() + character.toUpperCase());
  		return true;
  	} else if (isNum) {
			let character = this.find(".off").html();
			$input.val($input.val() + character);
			return true;
  	}
  };

  //Delete the last character of the input value
  keyboard.delete = () => {
  	let currentVal = $input.val();
  	$input.val(currentVal.substr(0, currentVal.length - 1));
  	return true;
  };

  //Add a space to the input value
  keyboard.addSpace = () => {
  	$input.val($input.val() + " ");
  };

  //Get the value of the input and perform an action
  keyboard.enter = () => {
  	let searchValue = $input.val().toLowerCase().trim();

  	if(searchValue){
  		//This is just for testing - will be replaced with the search / email functionality
  		$(".results").html(`You searched for "${searchValue}"`);
  	}

  };

  //Animate the clicked keys
  keyboard.clickAnimation = function(e) {
  	$(this).addClass("clicked");
  };

  //Remove the animation when it completes the transform
  keyboard.removeAnimation = function(e) {
  	if(e.propertyName !== "transform") return;
  	$(this).removeClass("clicked");
  };

  keyboard.init = () => {

  	$keyboard.on("click", ".capslock", function() {
  		keyboard.toggleCaps();
  		keyboard.clickAnimation.call($(this));
  		this.addEventListener("transitionend", keyboard.removeAnimation);
  		// keyboard.removeAnimation();
  	});

  	$keyboard.on("click", ".key-toggle", function() {
  		keyboard.changeKeys();
  		keyboard.clickAnimation.call($(this));
  		this.addEventListener("transitionend", keyboard.removeAnimation);
  	});

  	$keyboard.on("click", ".letter", function() {
  		keyboard.type.call($(this));
  		keyboard.clickAnimation.call($(this));
  		keyboard.clickAnimation.call($(this));
  		this.addEventListener("transitionend", keyboard.removeAnimation);
  	});

  	$keyboard.on("click", ".delete", function() {
  		keyboard.delete();
  		keyboard.clickAnimation.call($(this));
  		this.addEventListener("transitionend", keyboard.removeAnimation);
  	});

  	$keyboard.on("click", ".enter", function() {
  		keyboard.enter();
  	});

  	$keyboard.on("click", ".space", function() {
  		keyboard.addSpace();
  		keyboard.clickAnimation.call($(this));
  		this.addEventListener("transitionend", keyboard.removeAnimation);
  	});
  }

 $(function() {

 	keyboard.init();

 	//Set up the keyboard structure and append to the page when called
  $.fn.makeKeyboard = function(){
  	let keyboardLayout = `<ul class="keyboard-row keyboard-row-1">
        <li class="letter">
          <span class="off">1</span>
          <span class="on visible">q</span>
        </li>
        <li class="letter">
          <span class="off">2</span>
          <span class="on visible">w</span>
        </li>
        <li class="letter">
          <span class="off">3</span>
          <span class="on visible">e</span>
        </li>
        <li class="letter">
          <span class="off">4</span>
          <span class="on visible">r</span>
        </li>
        <li class="letter">
          <span class="off">5</span>
          <span class="on visible">t</span>
        </li>
        <li class="letter">
          <span class="off">6</span>
          <span class="on visible">y</span>
        </li>
        <li class="letter">
          <span class="off">7</span>
          <span class="on visible">u</span>
        </li>
        <li class="letter">
          <span class="off">8</span>
          <span class="on visible">i</span>
        </li>
        <li class="letter">
          <span class="off">9</span>
          <span class="on visible">o</span>
        </li>
        <li class="letter">
          <span class="off">0</span>
          <span class="on visible">p</span>
        </li>
        <li class="delete lastitem">
          <svg data-src="build/images/delete-symbol.svg" />
        </li>
      </ul>
      <ul class="keyboard-row keyboard-row-2">

        <li class="letter">
          <span class="off">\`</span>
          <span class="on visible">a</span>
        </li>
        <li class="letter">
          <span class="off">~</span>
          <span class="on visible">s</span>
        </li>
        <li class="letter">
          <span class="off">!</span>
          <span class="on visible">d</span>
        </li>
        <li class="letter">
          <span class="off">:</span>
          <span class="on visible">f</span>
        </li>
        <li class="letter">
          <span class="off">#</span>
          <span class="on visible">g</span>
        </li>
        <li class="letter">
          <span class="off">$</span>
          <span class="on visible">h</span>
        </li>
        <li class="letter">
          <span class="off">%</span>
          <span class="on visible">j</span>
        </li>
        <li class="letter">
          <span class="off">;</span>
          <span class="on visible">k</span>
        </li>
        <li class="letter">
          <span class="off">&amp;</span>
          <span class="on visible">l</span>
        </li>
      </ul>
      <ul class="keyboard-row keyboard-row-3">
        <li class="capslock">
          <svg data-src="build/images/caps-symbol.svg" />
        </li>
        <li class="letter">
          <span class="off">*</span>
          <span class="on visible">z</span>
        </li>
        <li class="letter">
          <span class="off">/</span>
          <span class="on visible">x</span>
        </li>
        <li class="letter">
          <span class="off">?</span>
          <span class="on visible">c</span>
        </li>
        <li class="letter">
          <span class="off">-</span>
          <span class="on visible">v</span>
        </li>
        <li class="letter">
          <span class="off">_</span>
          <span class="on visible">b</span>
        </li>
        <li class="letter">
          <span class="off">'</span>
          <span class="on visible">n</span>
        </li>
        <li class="letter">
          <span class="off">&quot;</span>
          <span class="on visible">m</span>
        </li>
        <li class="letter">
          <span class="off">,</span>
          <span class="on visible">.</span>
        </li>
        <li class="enter">Enter</li>
      </ul>
      <ul class="keyboard-row keyboard-row-4">
        <li class="key-toggle">
          <span class="off">abc</span>
          <span class="on visible">123</span>
        </li>
        <li class="space">SPACE</li>
        <li class="letter">
          <span class="off">?</span>
          <span class="on visible">@</span>
        </li>

      </ul>`
      return $("#keyboard").append(keyboardLayout);
    };
});

})(jQuery);