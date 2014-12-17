Raspi Core
==========

Raspi Core provides base support for the Raspberry Pi for the raspi suite of libraries. These libraries form the basis for [Raspi IO](https://github.com/bryan-m-hughes/raspi-io), an IO plugin that adds support for the Raspberry Pi to [Johnny-Five](https://github.com/rwaldron/johnny-five).

This module, along with [Raspi Board](https://github.com/bryan-m-hughes/raspi-board) and [Raspi Peripheral](https://github.com/bryan-m-hughes/raspi-peripheral) forms the basis for a suite of modules that provide support for various peripherals.

Check out the following peripheral API modules:

* [Raspi GPIO](https://github.com/bryan-m-hughes/raspi-gpio)
* [Raspi PWM](https://github.com/bryan-m-hughes/raspi-pwm)
* [Raspi I2C](https://github.com/bryan-m-hughes/raspi-i2c)

Note: when using this module, the script MUST be called with root permissions.

## Installation

Install with NPM:

```Shell
npm install raspi-core
```

In rare cases, you may need to install [node-gyp](https://www.npmjs.org/package/node-gyp) manually:

```Shell
npm install -g node-gyp
```

## API

### init(cb)

The ```init``` method initializes the library suite. This method MUST be called before using any peripherals.

<table>
  <thead>
    <tr>
      <th>Argument</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td>cb</td>
    <td>Function</td>
    <td>Callback to be called once the board has been initialized. Takes no arguments</td>
  </tr>
  <tr>
    <td></td>
    <td colspan="2">
      <table>
        <tr><td>Takes no arguments</td></tr>
      </table>
    </td>
</table>

## Example Usage

```JavaScript
var raspiCore = require('raspi-core');

raspiCore.init(function() {
  console.log('Raspberry Pi initialized');
});
```

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
