(function() {

var rafId = null;
var PREFIXES = {
  'webkit': 'WebKit',
  'moz': 'Moz',
  'ms': 'MS',
  'o': 'O'
};

var transEndEventNames = {
  'WebkitTransition': 'webkitTransitionEnd',
  'MozTransition': 'transitionend',
  'OTransition': 'oTransitionEnd',
  'msTransition': 'MSTransitionEnd',
  'transition': 'transitionend'
};

window.requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame;

window.cancelAnimationFrame = window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame ||
    window.msCancelAnimationFrame || window.oCancelAnimationFrame;

// Find the correct transitionEnd vendor prefix.
window.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];

// Find the correct transitionEnd vendor prefix.
window.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];

window.$ = function(selector, opt_scope) {
  var scope = opt_scope || document;
  return scope.querySelector(selector);
};

window.$$ = function(selector, opt_scope) {
  var scope = opt_scope || document;
  return Array.prototype.slice.call(scope.querySelectorAll(selector) || []);
};

HTMLElement.prototype.$ = function(selector) {
  return $(selector, this);
};

HTMLElement.prototype.$$ = function(selector) {
console.log($, $$)
  return $$(selector, this);
};

HTMLElement.prototype.listen = HTMLElement.prototype.addEventListener;
document.listen = document.addEventListener;

// If DOM is ready, run our setup. Otherwise wait for it to finish.
if (document.readyState === 'complete') {
  initContent();
} else {
  document.listen('readystatechange', function() {
    if (document.readyState === 'complete') {
      initContent();
    }
  });
}


function addVendorPrefixes() {
  [].forEach.call(document.querySelectorAll('[data-tooltip-property]'), function(tip, i) {
    var property  = tip.dataset.tooltipProperty;

    var support = Object.keys(PREFIXES); // Default to all prefixes if support array is missing.
    var includeUnprefixedVersion = false;
    if (tip.dataset.tooltipSupport) {
      support = JSON.parse(tip.dataset.tooltipSupport);
      // A 'unprefix' in the array indicates not to include unprefixed property.
      var idx = support.indexOf('unprefixed');
      if (idx != -1) {
        includeUnprefixedVersion = true;
        support.splice(idx, 1);
      }
    }

    var str = ['/* Requires vendor prefixes. */'];

    if ('tooltipJs' in tip.dataset) {
      tip.href = 'http://caniuse.com/#search=' + property;

      support.forEach(function(prefix, i) {
        // Capitalized Properties should remain so, unless explicitly called out.
        if (property[0] == property[0].toUpperCase() &&
            !('tooltipLowercase' in tip.dataset)) {
          var val = PREFIXES[prefix] + property;
        } else {
          var upperCasedProperty = property[0].toUpperCase() + property.substring(1);
          var val = prefix + upperCasedProperty;
        }
        if (!('tooltipJsProperty' in tip.dataset)) {
	        val += '(...);';
        }
        str.push(val);
      });

      if (includeUnprefixedVersion) {
        str.push(property + '(...);');
      }

    } else {
      tip.href = 'http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#including_a_mixin';

      support.forEach(function(prefix, i) {
        str.push('-' + prefix + '-' + property);// + ': ...');

      });
      
      str.push(property);// + ': ...'); // Include unprefixed property by default for CSS.
    }

    tip.dataset.tooltip = str.join('\n');
    tip.role = 'tooltip';
    tip.innerHTML = '<span class="property">' +
                    //(!('tooltipJs' in tip.dataset) ? '+' : '') + property +
                    property +
                    '</span>';
    tip.dataset.tooltipActive = '';
  });
}

function fetchAndInjectSamples() {

  var pres = $$('pre[data-url]');

  pres.forEach(function(pre, i) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', pre.dataset.url);

    xhr.onloadend = function(e) {
      if (e.target.status == 200) {
        pre.textContent = e.target.response + pre.textContent;
        if (i == pres.length - 1) {
          prettyPrint();
        }
      }
    };

    xhr.send();
  });
}

function setupSnippetDemos() {

  var pres = $$('pre[data-run-demo]');

  pres.forEach(function(pre, i) {
    var a = document.createElement('a');
    a.href = pre.dataset.runDemo;
    //a.textContent = 'RUN DEMO';
    a.classList.add('snippet-demo');
    pre.appendChild(a);
  });
}

// Generates a random number between from and to.
function random(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function onSpeechStart(e) {
  console.log('listening...');
  //slidedeck.computer.justSpoke = false;
  //this.justSpoke = false;
};

function onSpeechResult(e) {
  if (e.results.length) {
    var result = e.results[e.resultIndex];
    if (result.isFinal) {
      var utterance = result[0].transcript.trim();

      // Protection from spoken response through speakers creating a cycle.
      if (this.justSpoke) {
        this.justSpoke = false;
        return;
      }

      console.log('utterance: "' + utterance + '"');

      // "PRESENTATION"
      //   ward
      // go back
      // open google.com
      // Google "XXX"
      // close it
      // make me a sandwich.
      // I'm hungry, please make me a sandwich.
      // sudo. make me a sandwich.
      // "IGNORE ME"
      if (this.payingAttention) {
        if (utterance.match(/forward/g)) {
          slidedeck.nextSlide();
        } else if (utterance.match(/back/g)) {
          slidedeck.prevSlide();
        } else if (utterance.match(/open/g)) {
          var parts = utterance.split(' ');
          if (parts.length > 1) {
            window.launchedPopup = window.open('http://' + parts[1]);
          }
        } else if (utterance.match(/^google/ig)) {
          var parts = utterance.split(' ');
          if (parts.length > 1) {
            var q = parts.slice(1).join(' ')
            window.launchedPopup = window.open('https://www.google.com/search?q=' + q);
          }
        } else if (utterance.match(/close/g) && window.launchedPopup) {
           window.launchedPopup.close();
        } else if (utterance.match(/ignore/g)) {
          this.speak('OK. I will ignore you.');
          //this.justSpoke = true;
          this.payingAttention = false;
          this.stopListening();
        } else if (utterance.match(/presentation/g)) {
          this.speak('What shall I do?');
          //this.justSpoke = true;
        } else if (utterance.match(/sandwich/g)) {
          if (utterance.match(/pseudo|sudo/g)) {
            switch(random(0, 1)) {
              case 0:
                this.speak('You said the magic word. Sounds yummy. Can I have some too?');
                break;
              default:
                this.speak('You said the magic word. How about PB and J?');
                break;
            }
            //this.justSpoke = true;
          } else {
            if (utterance.match(/please/g)) {
              this.speak("You're getting warmer.");
            } else { 
              this.speak('Do it yourself!');
            }
            //this.justSpoke = true;
          }
        } else {
          this.speak("Sorry. I don't understand " + utterance);
          //this.justSpoke = true;
        }
      } else if (utterance.match(/presentation/g) && !this.payingAttention) {
        this.speak('Yes? How can I help you?');
        //this.justSpoke = true;
        this.payingAttention = true;
      }
    }
  }
}

function onSpeechEnd(e) {
  if (this) {
    this.payingAttention = false;
    //this.justSpoke = false;
  }
}

// DOM Ready business.
function initContent(e) {
  var currentSlide = slidedeck.slides[slidedeck.curSlide_];
  if (currentSlide.classList.contains('nobackdrop')) {
    document.body.classList.add('nobackdrop');
  }
  if (currentSlide.dataset.bodyClass) {
    document.body.classList.add(currentSlide.dataset.bodyClass);
  }

  slidedeck.container.listen('slideenter', function(e) {
    var slide = e.target;
    if (slide.classList.contains('nobackdrop')) {
      document.body.classList.add('nobackdrop');
    } 
    if (slide.dataset.bodyClass) {
      document.body.classList.add(slide.dataset.bodyClass);
    }
    if (slide.id == 'scrollvideo') {
      var video = slide.querySelector('video');
      if (video.currentTime >= video.duration) {
        video.load();
      }
      video.play();
    }
  });

  slidedeck.container.listen('slideleave', function(e) {
    var slide = e.target;
    if (slide.classList.contains('nobackdrop')) {
      document.body.classList.remove('nobackdrop');
    }
    if (slide.dataset.bodyClass) {
      document.body.classList.remove(slide.dataset.bodyClass);
    }
    if (slide.id == 'scrollvideo') {
      var video = slide.querySelector('video');
      video.pause();
    }
  });

  document.listen('keydown', function(e) {
    switch (e.keyCode) {
      // case 80: // P
      //   document.body.classList.toggle('with-devtools');
      //   break;
      case 83: // S: web speech control
        if (!!window.Computer && !slidedeck.computer) {
          slidedeck.computer = new Computer(true);
          slidedeck.computer.onstart = onSpeechStart.bind(slidedeck.computer);
          slidedeck.computer.onresult = onSpeechResult.bind(slidedeck.computer);
          slidedeck.computer.onend = onSpeechEnd.bind(slidedeck.computer);
        }

        if (slidedeck.computer.isListening) {
          slidedeck.computer.stopListening();
          slidedeck.computer = null; // gc so hard!
        } else {
          slidedeck.computer.listen();
        }

        break;
      default:
        break;
    }
  }, false);

  // Writing in markdown leaves off the .prettyprint class. Find those that
  // don't have the class and get em colored.
  $$('pre:not(.prettyprint)').forEach(function(pre, i) {
    pre.classList.add('prettyprint');
  });
  prettyPrint();

  addVendorPrefixes(); // adds vendor prefix tooltips
  //fetchAndInjectSamples(); // pulls custom element samples files into pre tags.
  setupSnippetDemos();

  initDemos();
}

})();


// Inline slide examples -------------------------------------------------------

function playPause(e) {
  if (this.currentTime >= this.duration) {
    this.load();
  }

  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
}

function initDemos() {

(function() {
  var demo = $('.css-instrinc-example');
  var div = demo.querySelector('.example div');

  // demo.querySelector('.example').listen('click', function(e) {
  //   e.target.classList.toggle('shrinkwrap');
  // });

  demo.querySelector('select[data-prop="width"]').listen('change', function(e) {
    var val = e.target.value;

    // As of Firefox 23.0a1 (2013-05-03), -moz-available is their fill-available.
    if (navigator.userAgent.match('Firefox') && val == 'fill-available') {
      val = 'available';
    }

    div.style.width = val == 'initial' ? '' : '-o-' + val;
    div.style.width = val == 'initial' ? '' : '-ms-' + val;
    div.style.width = val == 'initial' ? '' : '-moz-' + val;
    div.style.width = val == 'initial' ? '' : '-webkit-' + val;
  });

  demo.querySelector('select[data-prop="height"]').listen('change', function(e) {
    var val = e.target.value;

    // As of Firefox 23.0a1 (2013-05-03), -moz-available is their fill-available.
    if (navigator.userAgent.match('Firefox') && val == 'fill-available') {
      val = 'available';
    }

    div.style.height = val == 'initial' ? '' : '-o-' + val;
    div.style.height = val == 'initial' ? '' : '-ms-' + val;
    div.style.height = val == 'initial' ? '' : '-moz-' + val;
    div.style.height = val == 'initial' ? '' : '-webkit-' + val;
  });
})();

(function() {
  var demo = $('#iframe-example');
  //var template = demo.querySelector('script[type="text/template"]');
  var template = demo.querySelector('template');

  // <template> strips out <body>/</head>. Add them back in:
  // https://www.w3.org/Bugs/Public/show_bug.cgi?id=21809
  demo.querySelector('iframe[seamless]').srcdoc = '<body class="weavebg">' +
      template.innerHTML + '</body>';
  demo.querySelector('iframe.plain').srcdoc = '<body>' +
      template.innerHTML + '</body>';
})();

(function() {
  var demo = $('#clippath-reference pre[data-run-demo] .snippet-demo');

  demo.listen('click', function(e) {
    e.preventDefault();

    // Simulate keypress of 'P' to bring up presenter notes.
    var evt = document.createEvent('Event');
    evt.initEvent('keydown', true, true);
    evt.keyCode = 'P'.charCodeAt(0);
    document.dispatchEvent(evt);
  });
})();

(function() {
  $('#scrollvideo video').listen('click', playPause);
})();

// (function() {
//   $('#webspeech-video video').listen('click', playPause);
// })();

}


