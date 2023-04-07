// index.js

// receives a function and calls it
function receivesAFunction(callback) {
  callback();
}

// returns a named function
function returnsANamedFunction() {
  function namedFunction() {
    console.log("This is a named function.");
  }
  return namedFunction;
}

// returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    console.log("This is an anonymous function.");
  };
}

module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};
