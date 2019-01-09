/*
The MIT License (MIT)

Copyright (c) 2014-2017 Bryan Hughes <bryan@nebri.us>

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

import { IBaseModule, IPeripheral } from 'core-io-types';
import { getPinNumber as getRaspiPinNumber } from 'raspi-board';

if (!(global as any).raspiPinUsage) {
  (global as any).raspiPinUsage = {};
}
const registeredPins: { [ pinNumber: string ]: IPeripheral } = (global as any).raspiPinUsage;

// We used to do some stuff here back when we used Wiring Pi, but now that we
// use pigpio, there's nothing for us to do. We're keeping this module in place
// though because some other OSes may require this initialization, and we may
// even require it again someday in Raspbian.
export function init(cb: () => void): void {
  process.nextTick(cb);
}

export function getActivePeripherals(): { [ pin: number ]: IPeripheral } {
  return registeredPins;
}

export function getActivePeripheral(pin: number): IPeripheral | undefined {
  return registeredPins[pin];
}

export function setActivePeripheral(pin: number, peripheral: IPeripheral): void {
  if (registeredPins[pin]) {
    registeredPins[pin].destroy();
    const peripheralPins = registeredPins[pin].pins;
    for (const peripheralPin of peripheralPins) {
      delete registeredPins[peripheralPin];
    }
  }
  registeredPins[pin] = peripheral;
}

export function getPinNumber(alias: string | number): number | null {
  return getRaspiPinNumber(alias);
}

export const module: IBaseModule = {
  init,
  getActivePeripherals,
  getActivePeripheral,
  setActivePeripheral,
  getPinNumber
};
