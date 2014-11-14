Raspi Core
==========

Raspi Core provides base support for the Raspberry Pi. This module automatically downloads and installs [Wiring Pi](http://wiringpi.com/) to provide access to the hardware.

Install with ```npm install raspi-core```. Note: you may need to install [node-gyp](https://www.npmjs.org/package/node-gyp) manually: ```npm install -g node-gyp```.

This module exposes a single method, ```init```, that initializes Wiring PI. It takes a single callback as its arguments, to be called once initialization is complete, as shown below:

```JavaScript
var raspiCore = require('raspi-core');

raspiCore.init(function() {
  console.log('Raspberry Pi initialized');
});
```

The intent of this module is to form the basis for a set of other modules that expose various peripheral APIs. Check out:

* [Raspi GPIO](https://github.com/bryan-m-hughes/raspi-gpio): Basic GPIO access

License
=======

The MIT License (MIT)

Copyright (c) 2014 Bryan Hughes bryan@theoreticalideations.com (https://theoreticalideations.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
