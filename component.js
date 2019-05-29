/**
 * Component consuming screen size events
 */
((window, $) => {
  // Listen for breakpoint events.
  $(window)
    .on('newell.breakpoint', (e, screen) => {
      console.log('Screen changed! Do some logic for:', screen);
    });
})(window, jQuery);
