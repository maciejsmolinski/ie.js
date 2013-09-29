# IE.JS

The purpose of this small library is to make detecting Internet Explorer and it's version as simple as possible.
Details about Internet Explorer's version are stored in global `IE` variable.

# Sample Usage

    if (IE) {
        console.log("You're using Internet Explorer");
    }

    if (IE < 8) {
        console.log("You're using outdated Internet Explorer. Please upgrade your browser");
    } else {
      console.log("IE8+ used!")
    }

`global.IE` might be an object (if Internet explorer is used) or undefined in case you're using modern browsers.

# Limitations

You can't use `===` in oder to detect IE version, `==` must be used.
More details to be found here: http://sidekicksrc.com/post/the-value-of-valueof/