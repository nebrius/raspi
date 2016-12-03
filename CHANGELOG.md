## 3.0.4 (2016-12-3)

- Fixed broken publish

## 3.0.3 (2016-12-3)

- Added proper .npmignore

## 3.0.2 (2016-12-3)

- Added types declaration to package.json

## 3.0.1 (2016-12-3)

- Converted the project to TypeScript and cleaned up a bunch of odds and ends
  - Note: there is no functionality change or bug fixes with this release

## 3.0.0 (2016-11-25)

- Removed raspi-wiringpi dependency because Raspbian now ships with it by default.

## 2.1.0 (2016-6-5)

- Removed gulp in favor of npm run scripts
- Updated dependencies

## 2.0.0 (2015-10-20)

- Upgraded to NAN 2
  - POTENTIAL BREAKING CHANGE
  - The API has not changed, but the build requirements have
  - Make sure you are running Raspbian Jessie because this module no longer builds on stock Raspbian Wheezy
  - See https://github.com/fivdi/onoff/wiki/Node.js-v4-and-native-addons for more information

## 1.3.2 (2015-7-16)

- Updated dependencies
- Updated the repository links to point to their new location
- Added code linter
- Update code style to use newer best practices

## 1.3.1 (2015-4-27)

- Updated dependencies

## 1.3.0 (2015-2-21)

- Switched from traceur to babel for ES6->ES5 compilation

## 1.2.0 (2015-2-19)

- Upgraded NAN to get support for Node.js 0.12
  - io.js support is theoretically there, but won't work until https://github.com/TooTallNate/node-gyp/pull/564 is landed

## 1.1.6 (2015-2-11)

- Renamed this package to raspi.js (raspi in NPM) to better reflect the purpose.

## 1.1.5 (2015-1-21)

- Locked down the NAN version for now since code breaks on 1.5

## 1.1.4 (2014-12-29)

- Updated the README

## 1.1.3 (2014-12-20)

- Added a README
- Fixed a script compile issue that prevented 1.1.2 from including the reentrant fix

## 1.1.2 (2014-12-3)

- Made ```init``` properly reentrant

## 1.1.1 (2014-12-2)

- Bug fix in package.json

## 1.1.0 (2014-12-2)

- Switched to ECMAScript 6
- This is a breaking API change! The export structure is slightly different

## 1.0.5 (2014-11-27)

- Fixed a bad NPM publish

## 1.0.4 (2014-11-25)

- Switched to using wiringPiSetup instead of wiringPiSetupGpio

## 1.0.0-1.0.3 (2014-11-14)

- Implemented initial functionality and worked out the kinks in building during ```npm install```
