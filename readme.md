# IE.JS

Making Internet Explorer detection as simple as possible via global `IE` variable.

# Sample Usage

1) Simply detect IE

```
    if (IE) {
      console.log("You're using Internet Explorer");
    }
```

2) Compare IE version

```
    if (IE < 8) {
      console.log("You're using outdated Internet Explorer. Please upgrade your browser");
    } else {
      console.log("Modern browser (including IE8+) is used!");
    }
```

3) Check exact IE version

```
    // Correct
    if (IE && IE == 8) {
      console.log("You're using Internet Explorer 8!");
    }
```

```
    // Incorrect. This won't work. Details to be found in "Limitations" section below.
    if (IE && IE === 8) {
      console.log("You're using Internet Explorer 8!");
    }
```

`global.IE` variable might be an object (if Internet explorer is used) or `undefined` in case you're using modern, non-ie browsers.

# Limitations

You can't use `===` in oder to detect IE version, `==` must be used.
More details to be found here: http://sidekicksrc.com/post/the-value-of-valueof/