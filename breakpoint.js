/**
 * Breakpoint Demo
 */
((window, document, _, $) => {
  const eventName = 'newell.breakpoint';
  const $window = $(window);
  const $documentElement = $(document.documentElement);

  // Parse screen size from css font-family.
  const getScreenSize = () => $documentElement.css('font-family').replace(/\"/g, '').split(':').pop();
  let currentScreenSize = getScreenSize();

  // If screen size has changed, dispatch event to listeners.
  const onResize = () => {
    const screenSize = getScreenSize();
    if (screenSize !== currentScreenSize) {
      $window.trigger(eventName, screenSize)
      currentScreenSize = screenSize;
    }
  }

  $(() => {
    // Dispatch event for initial screensize.
    // Bind to window resize w/ throttled callback.
    $window
      .trigger(eventName, currentScreenSize)
      .on('resize', _.debounce(onResize, 300));
  })

})(window, document, _, jQuery);
