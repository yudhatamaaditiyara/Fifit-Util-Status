/**
 * Copyright (C) 2019 Yudha Tama Aditiyara
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const assert = require('assert');
const status = require('../../');

it('must be typeof codes === "object"', () => {
  assert.ok(status.codes !== null && typeof status.codes == 'object');
});

it('must be Array.isArray(entries)', () => {
  assert.ok(Array.isArray(status.entries));
});

it('must be typeof messages === "object"', () => {
  assert.ok(status.messages !== null && typeof status.messages == 'object');
});

it('must be typeof identifiers === "object"', () => {
  assert.ok(status.identifiers !== null && typeof status.identifiers == 'object');
});

it('must be typeof errorCodes === "object"', () => {
  assert.ok(status.errorCodes !== null && typeof status.errorCodes == 'object');
});

it('must be Array.isArray(errorEntries)', () => {
  assert.ok(Array.isArray(status.errorEntries));
});

it('must be typeof errorMessages === "object"', () => {
  assert.ok(status.errorMessages !== null && typeof status.errorMessages == 'object');
});

it('must be typeof errorClassNames === "object"', () => {
  assert.ok(status.errorClassNames !== null && typeof status.errorClassNames == 'object');
});

it('must be typeof errorIdentifiers === "object"', () => {
  assert.ok(status.errorIdentifiers !== null && typeof status.errorIdentifiers == 'object');
});

it('must be typeof clientErrorCodes === "object"', () => {
  assert.ok(status.clientErrorCodes !== null && typeof status.clientErrorCodes == 'object');
});

it('must be Array.isArray(clientErrorEntries)', () => {
  assert.ok(Array.isArray(status.clientErrorEntries));
});

it('must be typeof clientErrorMessages === "object"', () => {
  assert.ok(status.errorMessclientErrorMessagesages !== null && typeof status.clientErrorMessages == 'object');
});

it('must be typeof clientErrorClassNames === "object"', () => {
  assert.ok(status.clientErrorClassNames !== null && typeof status.clientErrorClassNames == 'object');
});

it('must be typeof clientErrorIdentifiers === "object"', () => {
  assert.ok(status.clientErrorIdentifiers !== null && typeof status.clientErrorIdentifiers == 'object');
});

it('must be typeof serverErrorCodes === "object"', () => {
  assert.ok(status.serverErrorCodes !== null && typeof status.serverErrorCodes == 'object');
});

it('must be Array.isArray(serverErrorEntries)', () => {
  assert.ok(Array.isArray(status.serverErrorEntries));
});

it('must be typeof serverErrorMessages === "object"', () => {
  assert.ok(status.serverErrorMessages !== null && typeof status.serverErrorMessages == 'object');
});

it('must be typeof serverErrorClassNames === "object"', () => {
  assert.ok(status.serverErrorClassNames !== null && typeof status.serverErrorClassNames == 'object');
});

it('must be typeof serverErrorIdentifiers === "object"', () => {
  assert.ok(status.serverErrorIdentifiers !== null && typeof status.serverErrorIdentifiers == 'object');
});

it('must be typeof isInformationalStatus === "function"', () => {
  assert.ok(typeof status.isInformationalStatus == 'function');
});

it('must be typeof isSuccessStatus === "function"', () => {
  assert.ok(typeof status.isSuccessStatus == 'function');
});

it('must be typeof isRedirectionStatus === "function"', () => {
  assert.ok(typeof status.isRedirectionStatus == 'function');
});

it('must be typeof isErrorStatus === "function"', () => {
  assert.ok(typeof status.isErrorStatus == 'function');
});

it('must be typeof isClientErrorStatus === "function"', () => {
  assert.ok(typeof status.isClientErrorStatus == 'function');
});

it('must be typeof isServerErrorStatus === "function"', () => {
  assert.ok(typeof status.isServerErrorStatus == 'function');
});

it('must be work isInformationalStatus(100...199)', () => {
  for (let i = 100; i < 200; ++i) {
    assert.ok(status.isInformationalStatus(i));
    assert.ok(status.isInformationalStatus(String(i)));
  }
  assert.ok(!status.isInformationalStatus(99));
  assert.ok(!status.isInformationalStatus(200));
});

it('must be work isSuccessStatus(200...299)', () => {
  for (let i = 200; i < 300; ++i) {
    assert.ok(status.isSuccessStatus(i));
    assert.ok(status.isSuccessStatus(String(i)));
  }
  assert.ok(!status.isSuccessStatus(199));
  assert.ok(!status.isSuccessStatus(300));
});

it('must be work isRedirectionStatus(300...399)', () => {
  for (let i = 300; i < 400; ++i) {
    assert.ok(status.isRedirectionStatus(i));
    assert.ok(status.isRedirectionStatus(String(i)));
  }
  assert.ok(!status.isRedirectionStatus(299));
  assert.ok(!status.isRedirectionStatus(400));
});

it('must be work isErrorStatus(400...599)', () => {
  for (let i = 400; i < 600; ++i) {
    assert.ok(status.isErrorStatus(i));
    assert.ok(status.isErrorStatus(String(i)));
  }
  assert.ok(!status.isErrorStatus(399));
  assert.ok(!status.isErrorStatus(600));
});

it('must be work isClientErrorStatus(400...499)', () => {
  for (let i = 400; i < 500; ++i) {
    assert.ok(status.isClientErrorStatus(i));
    assert.ok(status.isClientErrorStatus(String(i)));
  }
  assert.ok(!status.isClientErrorStatus(399));
  assert.ok(!status.isClientErrorStatus(500));
});

it('must be work isServerErrorStatus(500...599)', () => {
  for (let i = 500; i < 600; ++i) {
    assert.ok(status.isServerErrorStatus(i));
    assert.ok(status.isServerErrorStatus(String(i)));
  }
  assert.ok(!status.isServerErrorStatus(499));
  assert.ok(!status.isServerErrorStatus(600));
});

it('must be valid codes', () => {
  assert.ok(Object.keys(status.codes).length > 0);
  for (var code in status.codes) {
    assert.ok(/^[0-9]+$/.test(code));
    assert.ok(typeof status.codes[code] === 'string');
  }
});

it('must be valid entries', () => {
  assert.ok(status.entries.length > 0);
  for (var entry of status.entries) {
    assert.ok(/^[0-9]+$/.test(String(entry[0])));
    assert.ok(typeof entry[1] === 'string');
  }
});

it('must be valid messages', () => {
  assert.ok(Object.keys(status.messages).length > 0);
  for (var message in status.messages) {
    let code = String(status.messages[message]);
    assert.ok(/^[0-9]+$/.test(code));
    assert.ok(typeof message === 'string');
  }
});

it('must be valid identifiers', () => {
  assert.ok(Object.keys(status.identifiers).length > 0);
  for (var code in status.identifiers) {
    assert.ok(/^[0-9]+$/.test(code));
    assert.ok(/^[a-zA-Z0-9]+$/.test(status.identifiers[code]));
  }
});

it('must be valid errorCodes', () => {
  assert.ok(Object.keys(status.errorCodes).length > 0);
  for (var code in status.errorCodes) {
    assert.ok(status.isErrorStatus(code));
    assert.ok(typeof status.errorCodes[code] === 'string');
  }
});

it('must be valid errorEntries', () => {
  assert.ok(status.errorEntries.length > 0);
  for (var entry of status.errorEntries) {
    assert.ok(status.isErrorStatus(entry[0]));
    assert.ok(typeof entry[1] === 'string');
    assert.ok(status.entries.indexOf(entry > -1));
  }
});

it('must be valid errorMessages', () => {
  assert.ok(Object.keys(status.errorMessages).length > 0);
  for (var message in status.errorMessages) {
    assert.ok(status.isErrorStatus(status.errorMessages[message]));
    assert.ok(typeof message === 'string');
  }
});

it('must be valid errorClassNames', () => {
  assert.ok(Object.keys(status.errorClassNames).length > 0);
  for (var code in status.errorClassNames) {
    assert.ok(status.isErrorStatus(code));
    assert.ok(/Error$/.test(status.errorClassNames[code]));
  }
});

it('must be valid errorIdentifiers', () => {
  assert.ok(Object.keys(status.errorIdentifiers).length > 0);
  for (var code in status.errorIdentifiers) {
    assert.ok(status.isErrorStatus(code));
    assert.ok(/^[a-zA-Z0-9]+$/.test(status.errorIdentifiers[code]));
  }
});

it('must be valid clientErrorCodes', () => {
  assert.ok(Object.keys(status.clientErrorCodes).length > 0);
  for (var code in status.clientErrorCodes) {
    assert.ok(status.isClientErrorStatus(code));
    assert.ok(typeof status.clientErrorCodes[code] === 'string');
  }
});

it('must be valid clientErrorEntries', () => {
  assert.ok(status.clientErrorEntries.length > 0);
  for (var entry of status.clientErrorEntries) {
    assert.ok(status.isClientErrorStatus(entry[0]));
    assert.ok(typeof entry[1] === 'string');
    assert.ok(status.errorEntries.indexOf(entry > -1));
  }
});

it('must be valid clientErrorMessages', () => {
  assert.ok(Object.keys(status.clientErrorMessages).length > 0);
  for (var message in status.clientErrorMessages) {
    assert.ok(status.isClientErrorStatus(status.clientErrorMessages[message]));
    assert.ok(typeof message === 'string');
  }
});

it('must be valid clientErrorClassNames', () => {
  assert.ok(Object.keys(status.clientErrorClassNames).length > 0);
  for (var code in status.clientErrorClassNames) {
    assert.ok(status.isClientErrorStatus(code));
    assert.ok(/Error$/.test(status.clientErrorClassNames[code]));
  }
});

it('must be valid clientErrorIdentifiers', () => {
  assert.ok(Object.keys(status.clientErrorIdentifiers).length > 0);
  for (var code in status.clientErrorIdentifiers) {
    assert.ok(status.isClientErrorStatus(code));
    assert.ok(/^[a-zA-Z0-9]+$/.test(status.clientErrorIdentifiers[code]));
  }
});

it('must be valid serverErrorCodes', () => {
  assert.ok(Object.keys(status.serverErrorCodes).length > 0);
  for (var code in status.serverErrorCodes) {
    assert.ok(status.isServerErrorStatus(code));
    assert.ok(typeof status.serverErrorCodes[code] === 'string');
  }
});

it('must be valid serverErrorEntries', () => {
  assert.ok(status.serverErrorEntries.length > 0);
  for (var entry of status.serverErrorEntries) {
    assert.ok(status.isServerErrorStatus(entry[0]));
    assert.ok(typeof entry[1] === 'string');
    assert.ok(status.errorEntries.indexOf(entry > -1));
  }
});

it('must be valid serverErrorMessages', () => {
  assert.ok(Object.keys(status.serverErrorMessages).length > 0);
  for (var message in status.serverErrorMessages) {
    assert.ok(status.isServerErrorStatus(status.serverErrorMessages[message]));
    assert.ok(typeof message === 'string');
  }
});

it('must be valid serverErrorClassNames', () => {
  assert.ok(Object.keys(status.serverErrorClassNames).length > 0);
  for (var code in status.serverErrorClassNames) {
    assert.ok(status.isServerErrorStatus(code));
    assert.ok(/Error$/.test(status.serverErrorClassNames[code]));
  }
});

it('must be valid serverErrorIdentifiers', () => {
  assert.ok(Object.keys(status.serverErrorIdentifiers).length > 0);
  for (var code in status.serverErrorIdentifiers) {
    assert.ok(status.isServerErrorStatus(code));
    assert.ok(/^[a-zA-Z0-9]+$/.test(status.serverErrorIdentifiers[code]));
  }
});