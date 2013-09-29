# IE.JS

Making Internet Explorer detection as simple as possible via global `IE` variable.

# Sample Usage

1. Simply detect IE

```
    if (IE) {
      console.log("You're using Internet Explorer!");
    }
```

2. Check IE version

```
    if (IE < 8) {
      console.log("You're using an outdated Internet Explorer version. Please upgrade your browser");
    } else {
      console.log("Modern browser (including IE8+) used!");
    }
```

`global.IE` might be an object (if Internet explorer is used) or undefined in case you're using modern browsers.

# Limitations

You can't use `===` in oder to detect IE version, `==` must be used.
More details to be found here: http://sidekicksrc.com/post/the-value-of-valueof/