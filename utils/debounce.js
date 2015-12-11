function debouce(fn, delay, immediate) {
  // use closures! We have access to timeout across fns
  let timeout;
  return function() {
    let context = this;
    let delayedFn = function() {
      // nix timeout
      timeout = null;
      if (!immediate) {
        fn.apply(context, arguments);
      }
    }
    clearTimeout(timeout);
    timeout = setTimeout(delayedFn, delay);

    if (immediate && !timeout) {
      fn.apply(context, arguments);
    }
  };
}

export default debouce;