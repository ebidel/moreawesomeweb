id: who
title: Who is this guy?

<p class="avatar rounded"></p>

<p>Eric Bidelman</p>
<p>Staff Developer Programs Engineer, <img src="images/logos/google_logo.png" style="height: 30px;margin: 0;"> <img src="images/logos/chrome_logo.png" style="height:27px;margin:0;vertical-align: top;"></p>

<hr>

<p>
  <a rel="author" href="http://google.com/+EricBidelman">
    <img src="http://www.google.com/images/icons/ui/gprofile_button-44.png" width="44" height="44"></a> <a rel="author" href="http://google.com/+EricBidelman">google.com/+EricBidelman</a>
</p>
<p style="margin:0;">
  <a rel="author" style="margin-left:-8px;" href="http://twitter.com/ebidel">
    <img src="images/logos/twitter_newbird_blue.png" width="58" height="58"></a> <a rel="author" href="http://twitter.com/ebidel" style="margin-left:-5px;">@ebidel</a>
</p>

<hr>

<p style="margin-top:10px;">
<img src="images/logos/h5rlogo.png" style="width: 50px;"><a href="http://html5rocks.com">html5rocks.com</a>
</p>

"[Using the HTML5 Filesystem API](http://www.amazon.com/Using-HTML5-Filesystem-Eric-Bidelman/dp/1449309453 )" - O'Reilly 

<a rel="author" href="http://www.ericbidelman.com">ericbidelman.com</a>

---
title: Plenty got #moreawesome
build_lists: true

- Web Components
    - Shadow DOM, `<style scoped>`, `@host`, custom pseudo elements
- WebRTC
    - `RTCDataChannel`, <code><a data-tooltip-property="RTCPeerConnection" data-tooltip-lowercase data-tooltip-js data-tooltip-support='["webkit", "moz", "unprefixed"]'>RTCPeerConnection</a></code>
- Web Audio API
    - Chrome, FF, Safari/iOS
- Payments made easy: `form.requestAutocomplete()`
- [JS i18n API](http://wiki.ecmascript.org/doku.php?id=globalization:specification_drafts)
- [User Timing API](http://w3c-test.org/webperf/specs/UserTiming/), [Resource Timing API](http://www.w3.org/TR/2011/WD-resource-timing-20110524/)
- [`<main>`](http://www.w3.org/html/wg/drafts/html/master/grouping-content.html#the-main-element), [`<dialog>`](http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#the-dialog-element)
- [Font Loader API](http://dev.w3.org/csswg/css-fonts/)
- ...

---

class: nobackdrop nobackground agenda
content_class: dark flexbox vcenter

<div class="flexbox vcenter centered">
<!-- <hgroup class="auto-fadein">
  <h2 class="markup">markup</h2>
  <h3 class="moreawesome">#moreawesome</h3>
</hgroup> -->
<hgroup class="auto-fadein">
  <h2 class="css">css</h2>
  <h3 class="moreawesome">#moreawesome</h3>
</hgroup>
<hgroup class="auto-fadein">
  <h2 class="multimedia">media</h2>
  <h3 class="moreawesome">#moreawesome</h3>
</hgroup>
</div>

---

id: conventions
title: Legend
content_class: dark flexbox vleft

<span><img src="images/icons/gears.svg"></span>Specification link

<span><img src="images/icons/h5r.png"></span> HTML5Rocks content

<span><label class="old color"></label></span></span>Old, broke, &amp; busted way of doing something

<span><label class="new color"></label></span>New hotness way of doing it

<span><label class="donttouchjs color"></label></span>No longer need JavaScript to achieve the same effect

<span><label class="perf color glisten">#perfmatters</label></span>Performance tip

---

class: nobackdrop nobackground agenda
content_class: dark flexbox vcenter

<div class="flexbox vcenter centered">
<!-- <hgroup>
  <h2 class="markup">markup</h2>
  <h3 class="moreawesome">#moreawesome</h3>
</hgroup> -->
<hgroup>
  <h2 class="css">css</h2>
  <h3 class="moreawesome">#moreawesome</h3>
</hgroup>
<hgroup class="faded">
  <h2 class="multimedia">media</h2>
  <h3 class="moreawesome">#moreawesome</h3>
</hgroup>
</div>

---

hidden: true
title: iframe attributes goodies
h5r_link: http://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/

Sandbox `<iframe>`. Run external pages with reduced privileges

<pre class="prettyprint" data-lang="HTML">
&lt;iframe src="..." <b>sandbox="allow-same-origin allow-scripts
                         allow-popups allow-forms"</b>>&lt;/iframe>
</pre>

Populate `<iframe>` content without an extra HTTP request:

<pre class="prettyprint" data-lang="HTML">
&lt;iframe <b>srcdoc="&lt;b>Hello World&lt;/b>"</b>>&lt;/iframe>
</pre>

Allow elements in an `<iframe>` to go fullscreen (e.g. `.requestFullscreen()`):

<pre class="prettyprint" data-lang="HTML">
&lt;iframe <b>allowfullscreen</b>>&lt;/iframe>
</pre>

Seamless `<iframe>`. No scrollbars. No borders. Shrink wrapped to its content:

<pre class="prettyprint" data-lang="HTML">
&lt;iframe <b>seamless</b>>&lt;/iframe>
</pre>

---

hidden: true
id: iframe-example
title: Example: iframe properties

`iframe[allowfullscreen]`:

<p><iframe allowfullscreen class="plain" style="border:2px inset"></iframe></p>

`iframe[seamless allowfullscreen srcdoc="..."]`:

<!-- Can't use <template> because you can't have <head>/<body> in it. -->
<template>
<body class="weavebg">
  <style>
  body.weavebg {
    width: initial;
    height: initial;
    min-height: initial;
    min-width: initial;
    opacity: 1;
  }
  </style>
  <button onclick="self.goFull()">Go fullscreen</button>
  <script>
    Element.prototype.requestFullscreen = Element.prototype.requestFullscreen ||
                                          Element.prototype.webkitRequestFullscreen ||
                                          Element.prototype.mozRequestFullScreen;
    self.goFull = function() {
      document.body.requestFullscreen();
    }
  </script>
</body>
</template>

<iframe allowfullscreen seamless sandbox="allow-scripts allow-same-origin"></iframe>

<div class="build topmargin">
  <p><label class="donttouchjs color"></label>required to determine iframe dimensions</p>
</div>

---

hidden: true
class: nobackdrop nobackground agenda
content_class: dark flexbox vcenter

<div class="flexbox vcenter centered">
<hgroup class="faded">
  <h2 class="markup">markup</h2>
  <h3 class="moreawesome">#moreawesome</h3>
</hgroup>
<hgroup>
  <h2 class="css">css</h2>
  <h3 class="moreawesome">#moreawesome</h3>
</hgroup>
<hgroup class="faded">
  <h2 class="multimedia">media</h2>
  <h3 class="moreawesome">#moreawesome</h3>
</hgroup>
</div>

---

id: donttouchjs
class: nobackdrop nobackground
content_class: flexbox vcenter centered dark

<h2 class="auto-fadein">Don't need JS?</h2>
<h2 class="build"><label class="perf color glisten-big">#perfmatters</label></h2>

---

title: Viewport-percentage units <label class="donttouchjs color"></label>
subtitle: <code>vw</code>, <code>vh</code>, <code>vmin</code>, <code>vmax</code>
spec_link: http://dev.w3.org/csswg/css-values/#viewport-relative-lengths
class: css-viewport-units
build_lists: true

<p class="build"><span><label class="bad"></label> The size of <code>rem</code>/<code>em</code> units are dependent on parent elements</span></p>
<p class="build"><span><label class="good"></label> The size of viewport units are based purely on viewport size!</span></p>

<div class="build">
<p>Value is equal to 1% (1/100th) of width/height:</p>
<div class="columns-2">
  <div>1<b>vw</b> = 1% of viewport width</div>
  <div>1<b>vh</b> = 1% of viewport height</div>
  <div>1<b>vmin</b> = min(1vw, 1vh)</div>
  <div>1<b>vmax</b> = max(1vw, 1vh)</div>
</div>
</div>

<div class="build" style="margin-top:1em;"><span><label class="good"></label> Need fewer <code>@media</code> query breakpoints for adjusting sizes</span></div>

<div class="build" style="margin-top:1.5em;">
  <p><label class="perf color glisten">#perfmatters</label>no need for JS to determine viewport size</p>
  <p><label class="perf color glisten">#perfmatters</label>no need for JS <code>resize</code> handlers to make adjustments</p>
</div>

---
title: Example
subtitle: viewport: 1000 x 700px

<pre class="prettyprint" data-lang="CSS" data-run-demo="/demos/viewport-units.html">
h1 {
  font-size: <b>4vw</b>; /* 4 × 1000px * 0.01 = 40px */
}
div {
  width: <b>15vmin</b>; /* 15 * 700px * 0.01 = 105px */
}
</pre>

---

title: Viewport units
subtitle: browser support
class: nobackdrop nobackground browser-support
content_class: flexbox vcenter

<div class="browser-support-row">
  <div class="supported mobile"><img src="images/logos/browsers/safari_logo.png"></div>
  <div class="supported"><img src="images/logos/browsers/ff_logo.png"></div>
  <div class="supported mobile"><img src="images/logos/chrome_logo.png"></div>
  <div class="mobile"><img src="images/logos/browsers/opera_logo.png"></div>
  <div class="supported"><img src="images/logos/browsers/ie10_logo.png"></div>
</div>

---

title: Intrinsic sizing <label class="donttouchjs color"></label>
spec_link: http://dev.w3.org/csswg/css-box/#the-width-and-height-properties
content_class: css-instrinc-example

<pre class="prettyprint" data-lang="CSS">
.red-div {
  display: <a data-tooltip-property="flex" data-tooltip-support='["unprefixed", "webkit", "ms"]'>flex</a>;
  <a data-tooltip-property="justify-content" data-tooltip-support='["unprefixed", "webkit", "ms"]'>justify-content</a>: center;
  <a data-tooltip-property="align-items" data-tooltip-support='["unprefixed", "webkit", "ms"]'>align-items</a>: center;
  width: <select data-prop="width">
      <option>min-content</option>
      <option>fit-content</option>
      <option>max-content</option>
      <option>fill-available</option>
    </select>;  /* vendor prefixed */
  height: <select data-prop="height">
      <!-- <option>initial</option> -->
      <option>min-content</option>
      <option>fit-content</option>
      <option>max-content</option>
      <option>fill-available</option>
    </select>; /* vendor prefixed */
}
</pre>

<div class="example">
  <div>
    Hello World
  </div>
</div>

---

title: Intrinsic sizing
subtitle: browser support
class: nobackdrop nobackground browser-support
content_class: flexbox vcenter

<div class="browser-support-row">
  <div><img src="images/logos/browsers/safari_logo.png"></div>
  <div class="supported mobile"><img src="images/logos/browsers/ff_logo.png"></div>
  <div class="supported mobile"><img src="images/logos/chrome_logo.png"></div>
  <div class="mobile"><img src="images/logos/browsers/opera_logo.png"></div>
  <div><img src="images/logos/browsers/ie10_logo.png"></div>
</div>

---

title: CSS Variables
spec_link: http://dev.w3.org/csswg/css-variables/
build_lists: true

<aside class="note">
  <section>
    <p>Support:</p>
    <p>Chrome - "<b>Enable experimental WebKit features</b> in <code>about:flags</code>.</p>
  </section>
</aside>

Made commonplace by CSS preprocessors.

<pre class="prettyprint" data-lang="CSS">
body {
  <b class="blue"><a data-tooltip-property="var" data-tooltip-support='["webkit"]'>var</a>-fontColor</b>: red;
  color: <b class="blue"><a data-tooltip-property="var" data-tooltip-support='["webkit"]'>var</a>(fontColor)</b>;
}
</pre>

- Custom property concepts

    1. Define variable <span class="red">name prefixed with "**`var-`**"</span>. Use by passing it to **`var()`**
    - Names are <span class="yellow">case-sensitive</span>
        <!-- - `var-fooBar` != `var-foobar` != `var-FOOBAR` != `var-foo-bar` -->
    - <span class="blue">Scoped to the rule</span> they're defined in but <span class="blue">cascade to children</span>
    - Allows <span class="green">fallback values</span>: `color:var(fontColor, blue);`

---

title: Example

<pre class="prettyprint" data-lang="CSS">
:root { /* "global variables" */
  <b><a data-tooltip-property="var" data-tooltip-support='["webkit"]'>var</a>-textColor</b>: yellow;
  <b><a data-tooltip-property="var" data-tooltip-support='["webkit"]'>var</a>-backgroundColor</b>: pink;
}
footer {
  <b class="blue"><a data-tooltip-property="var" data-tooltip-support='["webkit"]'>var</a>-backgroundColor</b>: black;
  background-color: <b><a data-tooltip-property="var" data-tooltip-support='["webkit"]'>var</a>(backgroundColor)</b>; /* black */
  color: <b><a data-tooltip-property="var" data-tooltip-support='["webkit"]'>var</a>(textColor)</b>; /* inherited yellow */
}
footer > span {
  <b><a data-tooltip-property="var" data-tooltip-support='["webkit"]'>var</a>-textColor</b>: white;
  color: <b><a data-tooltip-property="var" data-tooltip-support='["webkit"]'>var</a>(textColor)</b>; /* white */
  background-color: <b><a data-tooltip-property="var" data-tooltip-support='["webkit"]'>var</a>(backgroundColor)</b>; /* inherited black */
}
</pre>

<div class="css-vars-example">
  <footer class="rounded">I am yellow text and <span>white span</span> on a black background</footer>
</div>

---

title: CSS Variables
subtitle: browser support
class: nobackdrop nobackground browser-support
content_class: flexbox vcenter

<div class="browser-support-row">
  <div><img src="images/logos/browsers/safari_logo.png"></div>
  <div><img src="images/logos/browsers/ff_logo.png"></div>
  <div class="supported"><img src="images/logos/browsers/chrome_canary.png"></div>
  <div><img src="images/logos/browsers/opera_logo.png"></div>
  <div><img src="images/logos/browsers/ie10_logo.png"></div>
</div>

---

title: <a href="http://chromestatus.com">chromestatus.com</a>
class: fill nobackground nobackdrop chromestatus
image: images/screenshots/chromestatus.png
#content_class: flexbox vcenter

<!-- <div class="previewframe">
<iframe data-src="http://chromestatus.com"></iframe>
</div> -->

---

title: CSS feature detection...in CSS!
spec_link: http://dev.w3.org/csswg/css-conditional/#at-supports

Native CSS feature detection using `@supports` at-rule

<pre class="prettyprint" data-lang="CSS">
<b>@supports (display: flex) {</b>
  body {
    display: flex;
  }
}
</pre>

- Browsers that don't understand `@supports` ignore the block
- Keywords for complex testing: `not`, `and`, `or`

Provide alternate styling when feature isn't available:

<pre class="prettyprint" data-lang="CSS">
<b>@supports not (display: flex) {</b>
  body { /* alternative layout using floats/columns/grid */ }
}
</pre>

---
hidden: true
title: Example: test for intrinsic units

More realistically, you're testing multiple prefixes using `or`:

<pre class="prettyprint" data-lang="CSS">
@supports (display: -webkit-fit-content) or
          (display: -moz-fit-content) or
          (display: -ms-fit-content) or
          (display: -o-fit-content) or
          (display: fit-content) {
  section {
    display: -webkit-fit-content;
    display: -moz-fit-content;
    display: -ms-fit-content;
    display: -o-fit-content;
    display: fit-content;
  }
  ...
}
</pre>

---

title: CSS feature detection in JS

- `CSS.supports()` provides CSS feature detection in JS
- Returns `true` if the UA <span class="blue">supports the property</span> **and** the <span class="blue">value would be parsed successfully</span> as a supported value

<pre class="prettyprint" data-lang="CSS">
if (!window.<b>CSS.supports</b>('width', 'calc(50% - 10px)')) {
  // Calculate element's width in JS.
}
</pre>

or as a conditional string:

<pre class="prettyprint" data-lang="CSS">
window.<b>CSS.supports</b>('(width: calc(50% - 10px)) and (display: flex)');
</pre>


<p class="build centered" style="margin-top:2em;">
<span><label class="perf color glisten">#perfmatters</label> native replacement for <a href="http://modernizr.com/">Modernizr</a></span>

</p>
---

title: @supports
subtitle: browser support
class: nobackdrop nobackground browser-support
content_class: flexbox vcenter

<div class="browser-support-row">
  <div><img src="images/logos/browsers/safari_logo.png"></div>
  <div class="supported"><img src="images/logos/browsers/ff_nightly.png"></div>
  <div class="supported"><img src="images/logos/chrome_logo.png"></div>
  <div class="supported"><img src="images/logos/browsers/opera_logo.png"></div>
  <div><img src="images/logos/browsers/ie10_logo.png"></div>
</div>

---

id: scrollvideo
class: nobackdrop
content_class:  flexbox vcenter

<div class="curve-arrow build"><div></div></div>

<video src="videos/positionfixedscrolling.webm" class="reflect" loop height="500"></video>

---

title: The Internet is littered with examples... <label class="old color"></label>

<label class="bad"></label> All achieved with JS scroll handlers

<pre class="prettyprint" data-lang="HTML" data-run-demo="demos/old-sticky-scrolling.html">
&lt;style>
  <b>.fixed { position: fixed; top: 0; width: 100%; }</b>
&lt;/style>
&lt;p style="margin-bottom:100px;">Scroll this page.&lt;/p>
&lt;div class="sticky">&lt;h3>Super amazing header&lt;/h3>&lt;/div>
&lt;script>
var sticky = document.querySelector('.sticky');
<b>var origOffsetY = sticky.offsetTop;</b>
document.addEventListener(<b>'scroll'</b>, function(e) {
  <b>window.scrollY >= origOffsetY ? sticky.classList.add('fixed') :
                                  sticky.classList.remove('fixed')</b>
});
&lt;/script>
</pre>

Examples: [Google News](https://news.google.com/news/section?pz=1&cf=all&ned=us&topic=s&siidp=851286a6474d18d10608a6da0f52039b0ac7&ict=ln) (left nav), [Yelp](http://www.yelp.com/search?find_desc=restaurants&find_loc=San+Francisco%2C+CA&ns=1) (map results), [TechCrunch](http://techcrunch.com) (header)

---

title: Sticky positioned elements <label class="new color"></label> <label class="donttouchjs color"></label>
subtitle: <code>position: sticky</code>
h5r_link: http://updates.html5rocks.com/2012/08/Stick-your-landings-position-sticky-lands-in-WebKit

<aside class="note">
  <section>
    <p><b>There's no specification for it!</b></p>
    <p>Support:</p>
    <p><ul>
      <li>WebKit nightly
      <li>Chrome - "<b>Enable experimental WebKit features</b> in <code>about:flags</code>
      </ul>
    </p>
  </section>
</aside>

<pre class="prettyprint" data-lang="CSS" data-run-demo="http://html5-demos.appspot.com/static/css/sticky.html">
.sticky {
  <b>position: <a data-tooltip-property="sticky" data-tooltip-support='["unprefixed", "webkit"]'>sticky</a>;</b>
  top: 10px; /* When the element reaches top: 10px, it becomes fixed. */
  z-index: 100;
}
</pre>

Behavior:

1. Element(s) is initially `position: relative` in their parent
- Parent scrolls partially outside of viewport: element &rarr; `position: fixed`
- Parent scrolls fully outside of viewport: element scrolls with

<p class="build centered" style="margin-top:1.5em;"><span><label class="perf color glisten">#perfmatters</label>eliminate JS scroll handlers to achieve this effect!</span>
</p>

---

title: position: sticky
subtitle: browser support
class: nobackdrop nobackground browser-support
content_class: flexbox vcenter

<aside class="note">
  <section style="width:65%">
    <p>Support:</p>
    <p><ul>
      <li>WebKit nightly
      <li>Chrome - "<b>Enable experimental WebKit features</b> in <code>about:flags</code>
      </ul>
    </p>
    <p>Feature detect:</p>
    <p><code>getComputedStyle(el).position.match('sticky');</code></p>
  </section>
</aside>

<div class="browser-support-row">
  <div class="supported"><img src="images/logos/browsers/safari_logo.png"></div>
  <div><img src="images/logos/browsers/ff_logo.png"></div>
  <div class="supported"><img src="images/logos/browsers/chrome_canary.png"></div>
  <div><img src="images/logos/browsers/opera_logo.png"></div>
  <div><img src="images/logos/browsers/ie10_logo.png"></div>
</div>

---

title: Clipping DOM elements <label class="old color"></label> 

<pre class="prettyprint" data-lang="CSS">
img, div {
  position: absolute;
  <b>clip: rect(97px, 250px, 340px, 65px)</b>;
}
</pre>

<div class="clip-example">
  <img src="images/bgs/zen.jpg" class="rounded">
</div>

CSS <code>clip</code>:

<label class="bad"></label> Only supports `rect()`

<label class="bad"></label> DOM element needs to be `position:absolute`

---

id: clippath
title: Clip path <label class="new color"></label>
spec_link: https://dvcs.w3.org/hg/FXTF/raw-file/tip/masking/index.html#the-clip-path

<label class="good"></label> CSS `clip-path` removes the `position:absolute` restriction

<label class="good"></label> Use any <a href="http://dev.w3.org/csswg/css-exclusions/#basic-shapes-from-svg-syntax">basic shape</a> from SVG or reference complex `<clipPath>` element

<pre class="prettyprint" data-lang="CSS">
div {
  <a data-tooltip-property="clip-path" data-tooltip-support='["webkit", "unprefixed"]'>clip-path</a>: circle(50%, 50%, 50px);</a>
}
</pre>

<div id="clipdemos">

<div class="clip one">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna justo, viverra in volutpat quis, tristique non eros. Duis dignissim congue ligula a posuere. Sed lorem odio, dictum at cursus sed, semper in nisl. Sed eu porta sapien. Integer sagittis nisl imperdiet mi luctus sodales. Phasellus quis scelerisque nulla. Curabitur ornare purus at quam placerat suscipit. Nunc fermentum luctus tortor quis cursus. Nullam enim velit, sodales at ullamcorper in, convallis non nisl. Nulla enim leo, ullamcorper quis convallis ac, mollis nec lorem. Nulla volutpat pulvinar sapien ac consequat. Etiam molestie, risus consectetur faucibus lobortis, metus lectus ultrices erat, at ultrices enim libero a metus.
</div>

<div class="clip two">
  <img src="images/bgs/zen.jpg" class="rounded">
</div>

<div class="clip three">
  <ul>
    <li>Do</li>
    <li>Re</li>
    <li>Mi</li>
    <li>Fa</li>
    <li>So</li>
    <li>La</li>
    <li>Ti</li>
    <li>Do</li>
  </ul>
</div>
</div>

---

id: clippath-reference
title: Referencing a <code>&lt;clipPath></code>

<aside class="note">
  <section>
    <iframe data-src="/demos/clip-path.html" style="height:550px;border:none"></iframe>
  </section>
</aside>

<pre class="prettyprint" data-lang="HTML" data-run-demo>
&lt;style>
  img, div {
     <b><a data-tooltip-property="clip-path" data-tooltip-support='["webkit", "unprefixed"]'>clip-path</a>: url(#myClip);</b>
  }
&lt;/style>

&lt;img src="images/background-home.jpg">
&lt;div>...&lt;/div>

&lt;svg width="0" height="0" hidden>
  &lt;defs>
    <b>&lt;clipPath id="myClip">
      &lt;circle cx="150" cy="150" r="100"/>
      &lt;circle cx="70" cy="70" r="20"/>
      ...
    &lt;/clipPath></b>
  &lt;/defs>
&lt;/svg>
</pre>

---

title: clip-path
subtitle: browser support
class: nobackdrop nobackground browser-support
content_class: flexbox vcenter

<div class="browser-support-row">
  <div class="supported"><img src="images/logos/browsers/safari_logo.png"></div>
  <div class="supported"><img src="images/logos/browsers/ff_logo.png"></div>
  <div class="supported mobile"><img src="images/logos/chrome_logo.png"></div>
  <div class="mobile"><img src="images/logos/browsers/opera_logo.png"></div>
  <div><img src="images/logos/browsers/ie10_logo.png"></div>
</div>

---

class: nobackdrop nobackground agenda
content_class: dark flexbox vcenter

<div class="flexbox vcenter centered">
<!-- <hgroup class="faded">
  <h2 class="markup">markup</h2>
  <h3 class="moreawesome">#moreawesome</h3>
</hgroup> -->
<hgroup class="faded">
  <h2 class="css">css</h2>
  <h3 class="moreawesome">#moreawesome</h3>
</hgroup>
<hgroup>
  <h2 class="multimedia">media</h2>
  <h3 class="moreawesome">#moreawesome</h3>
</hgroup>
</div>

---

title: Screen sharing

<aside class="note">
  <section>
    <p>Support:</p>
    <p>Chrome 26 - "<b>Enable screen capture support in getUserMedia()</b>" in <code>about:flags</code>.</p>
  </section>
</aside>

**Enable screen capture support in getUserMedia()** in `about:flags`

<pre class="prettyprint" data-lang="CSS">
navigator.<a data-tooltip-property="getUserMedia" data-tooltip-js data-tooltip-support='["unprefixed", "webkit", "moz", "ms"]'>getUserMedia</a>({
  <b>video: {
    mandatory: {
      chromeMediaSource: 'screen'
      // maxWidth: 640, maxHeight: 480
    }
  }</b>
}, onStream, onError);
</pre>

- Page needs to be on HTTPS (for now).
- Permission prompt is not sticky (for now).
- Combining with WebRTC DataChannel API yields interesting use cases: remote desktop assistance, "browser the web together".

---

title: Demo

<p class="centered">
<a href="https://html5-demos.appspot.com/screenshare">html5-demos.com/screenshare</a>
</p>

<iframe data-src="https://html5-demos.appspot.com/static/getusermedia/screenshare.html#body" style="border:none;height:470px;"></iframe>

---

title: WebRTC screen sharing
subtitle: browser support
class: nobackdrop nobackground browser-support
content_class: flexbox vcenter

<aside class="note">
  <section>
    <p>Support:</p>
    <p>Chrome 26 - "<b>Enable screen capture support in getUserMedia()</b>" in <code>about:flags</code>.</p>
  </section>
</aside>

<div class="browser-support-row">
  <div><img src="images/logos/browsers/safari_logo.png"></div>
  <div><img src="images/logos/browsers/ff_logo.png"></div>
  <div class="supported"><img src="images/logos/browsers/chrome_canary.png"></div>
  <div><img src="images/logos/browsers/opera_logo.png"></div>
  <div><img src="images/logos/browsers/ie10_logo.png"></div>
</div>

---

title: Live microphone input
subtitle: Web Audio API
spec_link: https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#MediaStreamAudioSourceNode-section
h5r_link: http://updates.html5rocks.com/2012/09/Live-Web-Audio-Input-Enabled

<pre class="prettyprint" data-lang="JS" data-run-demo="/demos/hal/index.html">
<b>navigator.<a data-tooltip-property="getUserMedia" data-tooltip-js data-tooltip-support='["unprefixed", "webkit", "moz", "ms"]'>getUserMedia</a></b>({audio: true}, function(stream) {
  var audioCtx = new window.<b><a data-tooltip-property="AudioContext" data-tooltip-lowercase data-tooltip-support='["webkit"]' data-tooltip-js>AudioContext</a></b>();

  // Create an AudioNode from the stream.
  var source = audioCtx.<b>createMediaStreamSource</b>(stream);

  // TODO: create and connect up filter/analyser/javascript node(s) for processing.

  // Connect it to the destination to hear yourself.
  source.connect(audioCtx.destination);
}, function(e) {
  console.log(e);
});
</pre>

---

title: Demos
content_class: centered

<img src="images/gifs/speaker.gif" class="rounded" style="height:375px" alt="wub wub wub wub" title="wub wub wub wub">

<p>
<a href="http://webaudiodemos.appspot.com/Vocoder/index.html" class="demo">Vocoder</a>
<a href="http://webaudiodemos.appspot.com/AudioRecorder/index.html" class="demo">Audio Recorder</a>
<a href="http://webaudiodemos.appspot.com/pitchdetect/index.html" class="demo">Pitch Detect</a>
<a href="http://webaudiodemos.appspot.com/input/index.html" class="demo">Effects</a>
</p>

---

title: Live input to Web Audio API
subtitle: browser support
class: nobackdrop nobackground browser-support
content_class: flexbox vcenter

<div class="browser-support-row">
  <div><img src="images/logos/browsers/safari_logo.png"></div>
  <div><img src="images/logos/browsers/ff_logo.png"></div>
  <div class="supported "><img src="images/logos/chrome_logo.png"></div>
  <div><img src="images/logos/browsers/opera_logo.png"></div>
  <div><img src="images/logos/browsers/ie10_logo.png"></div>
</div>

---

content_class: flexbox vcenter centered

<h2 class="auto-fadein">Speech-enabled web apps?</h2>

---

id: web-speech-example
title: Web Speech API
spec_link: https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
h5r_link: http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API
build_lists: true

Speech recognition and [synthesis](https://groups.google.com/a/chromium.org/forum/?fromgroups=#!topic/blink-dev/X32NQBrDSYg) for web apps.

<pre class="prettyprint" data-lang="JS" data-run-demo="https://www.google.com/intl/en/chrome/demos/speech.html">
<b>var recognizer = new <a data-tooltip-property="SpeechRecognition" data-tooltip-lowercase data-tooltip-js data-tooltip-support='["webkit"]'>speechRecognition</a>();</b>
<b>recognizer.continuous = true;
recognizer.interimResults = true;</b>
recognizer.<b>onresult</b> = function(e) {
  if (<b>e.results</b>.length) {
    var lastResultIdx = e.results.resultIndex;
    console.log(<b>e.results[lastResultIdx][0].transcript</b>);
  }
};
<b>recognizer.start();</b>
</pre>

- Continuous dictation. interim results, alternative results
- Repeated permission prompt for pages not hosted on HTTPS.

      <p class="centered">
        <img src="images/screenshots/webspeech_permission.png" style="max-width:80%;">
      </p>

<!-- 
title: Example: continuous recognition
content_class: smaller

<pre class="prettyprint" data-lang="JS">
var finalTranscript = '';

var recognizer = new <a data-tooltip-property="SpeechRecognition" data-tooltip-lowercase data-tooltip-js data-tooltip-support='["webkit"]'>speechRecognition</a>();
<b>recognizer.continuous = true;
recognizer.interimResults = true;</b>

recognizer.<b>onstart</b> = function(e) { ... };
recognizer.<b>onerror</b> = function(e) { ... };
recognizer.<b>onend</b> = function(e) { ... };
recognizer.<b>onresult</b> = function(e) {
  var interimTranscript = '';
  for (var i = <b>e.resultIndex</b>; i < e.results.length; ++i) {
    <b>if (e.results[i].isFinal) {
      finalTranscript += e.results[i][0].transcript;
    } else {
      interimTranscript += e.results[i][0].transcript;
    }</b>
  }
};

recognizer.start();
</pre>

<p class="centered">
  <a href="https://www.google.com/intl/en/chrome/demos/speech.html" class="demo">Realtime composer</a>
  <a href="/demos/speech_translate.html" class="demo">Translator</a>
</p>
 -->

---

content_class: flexbox vcenter centered

<h2 class="auto-fadein">Voice-driven apps?</h2>

<p class="centered topmargin build">
  <a href="/demos/speech_translate.html" class="demo">Auto-translate</a>
</p>

<!-- ---

id: webspeech-video
content_class: flexbox vcenter centered

<video src="videos/webspeechcapture_small.webmhd.webm" class="reflect" controls height="500"></video>
 -->
---

title: Web Speech API
subtitle: browser support
class: nobackdrop nobackground browser-support
content_class: flexbox vcenter

<div class="browser-support-row">
  <div><img src="images/logos/browsers/safari_logo.png"></div>
  <div><img src="images/logos/browsers/ff_logo.png"></div>
  <div class="supported"><img src="images/logos/chrome_logo.png"></div>
  <div><img src="images/logos/browsers/opera_logo.png"></div>
  <div><img src="images/logos/browsers/ie10_logo.png"></div>
</div>

---

title: The web got way more #moreawesome
build_lists: true

<h2 class="css" style="margin-bottom:20px;">css</h2>

- `@supports`, `window.CSS.supports()`
- New units: intrinsic units, viewport units
- CSS Variables
- `position: sticky`

<h2 class="multimedia" style="margin-bottom:20px;">media</h2>

- Live mic &rarr; Web Audio API
- WebRTC screen sharing
- Web Speech API

---

title: Things to look forward to
build_lists: true

<img class="auto-fadein" style="width:280px;height:auto;float:right" src="//www.html5rocks.com/static/images/site_title.png" title="Look to HTML5Rocks.com for future articles on these topics" alt="Look to HTML5Rocks.com for future articles on these topics">

- Web Components: [Custom Elements](https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/custom/index.html), [HTML Imports](https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/imports/index.html)
- CSS: Regions / Exclusions, Custom Filters, Grid Layout
- [Web Animations](https://dvcs.w3.org/hg/FXTF/raw-file/default/web-anim/index.html)
- WebRTC...<span class="red">on mobile</span>
- Canvas blending modes
- ...

- - -

- Blink
    - [Lazy block layout](http://goo.gl/FiQWv) - easy infinite scroll lists <label class="perf color glisten">#perfmatters</label>
    - Moving [DOM attributes on the JS prototype](https://docs.google.com/a/google.com/document/d/1jwA8mtClwxI-QJuHT7872Z0pxpZz8PBkf2bGAbsUtqs/edit#) chain <label class="perf color glisten">#perfmatters</label>


<div class="build"><span>Follow "<a href="https://docs.google.com/spreadsheet/ccc?key=0AjGgk26K1Cc-dEIySWlPNmFHMWlCUGxIQkstZXJ3clE#gid=0">Intent to implement</a>" feature emails on blink-dev</span></div>

---

title: <a href="http://chromestatus.com">chromestatus.com</a>
class: fill nobackground nobackdrop chromestatus
image: images/screenshots/chromestatus.png
#content_class: flexbox vcenter

<!-- <div class="previewframe">
<iframe data-src="http://chromestatus.com"></iframe>
</div> -->
