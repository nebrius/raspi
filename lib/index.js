'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _addon = require('../build/Release/addon');

var _addon2 = _interopRequireDefault(_addon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isInitialized = false; /*
                           The MIT License (MIT)
                           
                           Copyright (c) 2014 Bryan Hughes <bryan@theoreticalideations.com> (http://theoreticalideations.com)
                           
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
                           */

function init(cb) {
  if (!isInitialized) {
    isInitialized = true;
    _addon2.default.init(cb);
  } else {
    process.nextTick(cb);
  }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBNEJnQixJLEdBQUEsSTs7QUFKaEI7Ozs7OztBQUVBLElBQUksZ0JBQWdCLEtBQXBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLFNBQVMsSUFBVCxDQUFjLEVBQWQsRUFBa0I7QUFDdkIsTUFBSSxDQUFDLGFBQUwsRUFBb0I7QUFDbEIsb0JBQWdCLElBQWhCO0FBQ0Esb0JBQU0sSUFBTixDQUFXLEVBQVg7QUFDRCxHQUhELE1BR087QUFDTCxZQUFRLFFBQVIsQ0FBaUIsRUFBakI7QUFDRDtBQUNGIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5Db3B5cmlnaHQgKGMpIDIwMTQgQnJ5YW4gSHVnaGVzIDxicnlhbkB0aGVvcmV0aWNhbGlkZWF0aW9ucy5jb20+IChodHRwOi8vdGhlb3JldGljYWxpZGVhdGlvbnMuY29tKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4qL1xuXG5pbXBvcnQgYWRkb24gZnJvbSAnLi4vYnVpbGQvUmVsZWFzZS9hZGRvbic7XG5cbmxldCBpc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KGNiKSB7XG4gIGlmICghaXNJbml0aWFsaXplZCkge1xuICAgIGlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIGFkZG9uLmluaXQoY2IpO1xuICB9IGVsc2Uge1xuICAgIHByb2Nlc3MubmV4dFRpY2soY2IpO1xuICB9XG59XG4iXX0=