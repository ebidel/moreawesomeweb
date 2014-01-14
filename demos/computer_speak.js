window.SpeechRecognition = window.SpeechRecognition ||
                           window.webkitSpeechRecognition;

function Computer(continuous, outContainer) {
  this.recognizer = new window.SpeechRecognition();
  this.recognizer.continuous = continuous;
  this.outContainer = outContainer;

  this.recognizer.onresult = function(e) {
    if (this.onresult) {
      this.onresult(e);
    } else {
      // if (e.results.length) {
      //   var result = e.results[e.resultIndex];
      //   if (result.isFinal) {
      //     console.log('Speech result: ' + result[0].transcript);
      //     translate_(result[0].transcript);
      //   }
      // }
    }
  }.bind(this);

  this.recognizer.onstart = function(e) {
    if (this.onstart) {
      this.onstart(e);
    }
  }.bind(this);

  this.recognizer.onend = function(e) {
    if (this.onend) {
      this.onend(e);
    }
  }.bind(this);
}

Computer.prototype.DEST_LANG = 'en'; 

// True if the speech detector should be listening for commands.
Computer.prototype.payingAttention = false;

// True if voice just spoke. Good for preventing cycles.
Computer.prototype.justSpoke = false;

Computer.prototype.listen = function() {
  if (!this.isListening) {
    this.recognizer.start();
  }
  this.isListening = true;
};

Computer.prototype.stopListening = function() {
  if (this.isListening) {
    this.recognizer.stop();
  }
  this.isListening = false;
};

Computer.prototype.translate = function(txt) {
  var translateURL = [
      'translate.google.com/translate_a/t?client=t&hl=en&sl=en&tl=',
      this.DEST_LANG,
      '&ie=UTF-8&oe=UTF-8&multires=1&otf=2&ssel=0&tsel=0&sc=1&q=',
      encodeURIComponent(txt)].join('');

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://www.corsproxy.com/' + translateURL, true);

  xhr.onload = function(e) {
    var arr = eval(e.target.response); // JSON.parse flakes out on the response.
    var translateText = arr[0][0][0];

    if (this.outContainer) {
      this.outContainer.innerHTML += '<div>' + translateText + '</div>';
      this.outContainer.scrollTop = this.outContainer.scrollHeight;
    }

    this.speak(translateText);
  }.bind(this);

  xhr.send();
};

Computer.prototype.speak = function(txt) {

  console.log('Translated text: ', txt);

  // Need to latinize the text.
  // Remove when https://code.google.com/p/chromium/issues/detail?id=333515 is fixed.
  var sanitized = latinize(txt);
  console.log('sanitized speech: ' + sanitized);

  var msg = new SpeechSynthesisUtterance();
  // msg.voiceURI = 'native';
  //   msg.volume = 1; // 0 to 1
  //   var voices = window.speechSynthesis.getVoices();
  //   msg.voice = voices[10];
  //   msg.rate = 1; // 0.1 to 10
  //   msg.pitch = 1; //0 to 2
  msg.text = sanitized;
  msg.lang = this.DEST_LANG;

  msg.onend = function(e) {
    console.log('Finished at ' + e.elapsedTime + ' seconds.');
  };

  speechSynthesis.speak(msg);
};