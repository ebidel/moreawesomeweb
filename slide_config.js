var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: "A More Awesome Web",
    subtitle: "Features You've Always Wanted",
    eventInfo: {
      title: 'Google I/O',
      date: '5/15/2013'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: '/images/logos/chrome_logo.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro',
      'Architects+Daughter',
      'Muli'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Eric Bidelman',
    company: 'Chrome Team',
    gplus: 'http://google.com/+EricBidelman',
    twitter: '@ebidel',
    www: 'http://ericbidelman.com',
    github: 'http://github.com/ebidel'
  }]
};

