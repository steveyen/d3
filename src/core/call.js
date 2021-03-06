//
// Note: assigning to the arguments array simultaneously changes the value of
// the corresponding argument! However, the Google Closure compiler doesn't
// realize this, and so can optimize-away our attempt to avoid side-effects.
// This fix by Jason Davies has been tested to survive minimization.
//
// TODO The `this` argument probably shouldn't be the first argument to the
// callback, anyway, since it's redundant. However, that will require a major
// version bump due to backwards compatibility, so I'm not changing it right
// away.
//
function d3_call(callback) {
  callback.apply(this, (arguments[0] = this, arguments));
  return this;
}
