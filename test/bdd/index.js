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

/**
 */
describe('index', () => {
	/**
	 */
	it('typeof(status.codes) === "object"', () => {
		assert.ok(status.codes !== null && typeof status.codes == 'object');
	});

	/**
	 */
	it('Array.isArray(status.entries)', () => {
		assert.ok(Array.isArray(status.entries));
	});

	/**
	 */
	it('typeof(status.messages) === "object"', () => {
		assert.ok(status.messages !== null && typeof status.messages == 'object');
	});

	/**
	 */
	it('typeof(status.identifiers) === "object"', () => {
		assert.ok(status.identifiers !== null && typeof status.identifiers == 'object');
	});

	/**
	 */
	it('typeof(status.errorCodes) === "object"', () => {
		assert.ok(status.errorCodes !== null && typeof status.errorCodes == 'object');
	});

	/**
	 */
	it('Array.isArray(status.errorEntries)', () => {
		assert.ok(Array.isArray(status.errorEntries));
	});

	/**
	 */
	it('typeof(status.errorMessages) === "object"', () => {
		assert.ok(status.errorMessages !== null && typeof status.errorMessages == 'object');
	});

	/**
	 */
	it('typeof(status.errorClassNames) === "object"', () => {
		assert.ok(status.errorClassNames !== null && typeof status.errorClassNames == 'object');
	});

	/**
	 */
	it('typeof(status.errorIdentifiers) === "object"', () => {
		assert.ok(status.errorIdentifiers !== null && typeof status.errorIdentifiers == 'object');
	});

	/**
	 */
	it('typeof(status.clientErrorCodes) === "object"', () => {
		assert.ok(status.clientErrorCodes !== null && typeof status.clientErrorCodes == 'object');
	});

	/**
	 */
	it('Array.isArray(status.clientErrorEntries)', () => {
		assert.ok(Array.isArray(status.clientErrorEntries));
	});

	/**
	 */
	it('typeof(status.clientErrorMessages) === "object"', () => {
		assert.ok(status.errorMessclientErrorMessagesages !== null && typeof status.clientErrorMessages == 'object');
	});

	/**
	 */
	it('typeof(status.clientErrorClassNames) === "object"', () => {
		assert.ok(status.clientErrorClassNames !== null && typeof status.clientErrorClassNames == 'object');
	});

	/**
	 */
	it('typeof(status.clientErrorIdentifiers) === "object"', () => {
		assert.ok(status.clientErrorIdentifiers !== null && typeof status.clientErrorIdentifiers == 'object');
	});

	/**
	 */
	it('typeof(status.serverErrorCodes) === "object"', () => {
		assert.ok(status.serverErrorCodes !== null && typeof status.serverErrorCodes == 'object');
	});

	/**
	 */
	it('Array.isArray(status.serverErrorEntries)', () => {
		assert.ok(Array.isArray(status.serverErrorEntries));
	});

	/**
	 */
	it('typeof(status.serverErrorMessages) === "object"', () => {
		assert.ok(status.serverErrorMessages !== null && typeof status.serverErrorMessages == 'object');
	});

	/**
	 */
	it('typeof(status.serverErrorClassNames) === "object"', () => {
		assert.ok(status.serverErrorClassNames !== null && typeof status.serverErrorClassNames == 'object');
	});

	/**
	 */
	it('typeof(status.serverErrorIdentifiers) === "object"', () => {
		assert.ok(status.serverErrorIdentifiers !== null && typeof status.serverErrorIdentifiers == 'object');
	});

	/**
	 */
	it('typeof(status.isInformationalStatus) === "function"', () => {
		assert.ok(typeof status.isInformationalStatus == 'function');
	});

	/**
	 */
	it('typeof(status.isSuccessStatus) === "function"', () => {
		assert.ok(typeof status.isSuccessStatus == 'function');
	});

	/**
	 */
	it('typeof(status.isRedirectionStatus) === "function"', () => {
		assert.ok(typeof status.isRedirectionStatus == 'function');
	});

	/**
	 */
	it('typeof(status.isErrorStatus) === "function"', () => {
		assert.ok(typeof status.isErrorStatus == 'function');
	});

	/**
	 */
	it('typeof(status.isClientErrorStatus) === "function"', () => {
		assert.ok(typeof status.isClientErrorStatus == 'function');
	});

	/**
	 */
	it('typeof(status.isServerErrorStatus) === "function"', () => {
		assert.ok(typeof status.isServerErrorStatus == 'function');
	});

	/**
	 */
	it('status.isInformationalStatus(100...199)', () => {
		assert.ok(status.isInformationalStatus(100));
		assert.ok(status.isInformationalStatus(199));
		assert.ok(status.isInformationalStatus('150'));
		assert.ok(status.isInformationalStatus('175'));
		assert.ok(!status.isInformationalStatus(99));
		assert.ok(!status.isInformationalStatus(200));
	});

	/**
	 */
	it('status.isSuccessStatus(200...299)', () => {
		assert.ok(status.isSuccessStatus(200));
		assert.ok(status.isSuccessStatus(299));
		assert.ok(status.isSuccessStatus('250'));
		assert.ok(status.isSuccessStatus('275'));
		assert.ok(!status.isSuccessStatus(199));
		assert.ok(!status.isSuccessStatus(300));
	});

	/**
	 */
	it('status.isRedirectionStatus(300...399)', () => {
		assert.ok(status.isRedirectionStatus(300));
		assert.ok(status.isRedirectionStatus(399));
		assert.ok(status.isRedirectionStatus('350'));
		assert.ok(status.isRedirectionStatus('375'));
		assert.ok(!status.isRedirectionStatus(299));
		assert.ok(!status.isRedirectionStatus(400));
	});

	/**
	 */
	it('status.isErrorStatus(400...599)', () => {
		assert.ok(status.isErrorStatus(400));
		assert.ok(status.isErrorStatus(599));
		assert.ok(status.isErrorStatus('450'));
		assert.ok(status.isErrorStatus('575'));
		assert.ok(!status.isErrorStatus(399));
		assert.ok(!status.isErrorStatus(600));
	});

	/**
	 */
	it('status.isClientErrorStatus(400...499)', () => {
		assert.ok(status.isClientErrorStatus(400));
		assert.ok(status.isClientErrorStatus(499));
		assert.ok(status.isClientErrorStatus('450'));
		assert.ok(status.isClientErrorStatus('475'));
		assert.ok(!status.isClientErrorStatus(399));
		assert.ok(!status.isClientErrorStatus(500));
	});

	/**
	 */
	it('status.isServerErrorStatus(500...599)', () => {
		assert.ok(status.isServerErrorStatus(500));
		assert.ok(status.isServerErrorStatus(599));
		assert.ok(status.isServerErrorStatus('550'));
		assert.ok(status.isServerErrorStatus('575'));
		assert.ok(!status.isServerErrorStatus(499));
		assert.ok(!status.isServerErrorStatus(600));
	});

	/**
	 */
	it('status.codes', () => {
		assert.ok(Object.keys(status.codes).length > 0);
		for (var code in status.codes) {
			assert.ok(/^[0-9]+$/.test(code));
			assert.ok(typeof status.codes[code] === 'string');
		}
	});

	/**
	 */
	it('status.entries', () => {
		assert.ok(status.entries.length > 0);
		for (var entry of status.entries) {
			assert.ok(/^[0-9]+$/.test(String(entry[0])));
			assert.ok(typeof entry[1] === 'string');
		}
	});

	/**
	 */
	it('status.messages', () => {
		assert.ok(Object.keys(status.messages).length > 0);
		for (var message in status.messages) {
			let code = String(status.messages[message]);
			assert.ok(/^[0-9]+$/.test(code));
			assert.ok(typeof message === 'string');
		}
	});

	/**
	 */
	it('status.identifiers', () => {
		assert.ok(Object.keys(status.identifiers).length > 0);
		for (var code in status.identifiers) {
			assert.ok(/^[0-9]+$/.test(code));
			assert.ok(/^[a-zA-Z0-9]+$/.test(status.identifiers[code]));
		}
	});

	/**
	 */
	it('status.errorCodes', () => {
		assert.ok(Object.keys(status.errorCodes).length > 0);
		for (var code in status.errorCodes) {
			assert.ok(status.isErrorStatus(code));
			assert.ok(typeof status.errorCodes[code] === 'string');
		}
	});

	/**
	 */
	it('status.errorEntries', () => {
		assert.ok(status.errorEntries.length > 0);
		for (var entry of status.errorEntries) {
			assert.ok(status.isErrorStatus(entry[0]));
			assert.ok(typeof entry[1] === 'string');
			assert.ok(status.entries.indexOf(entry > -1));
		}
	});

	/**
	 */
	it('status.errorMessages', () => {
		assert.ok(Object.keys(status.errorMessages).length > 0);
		for (var message in status.errorMessages) {
			assert.ok(status.isErrorStatus(status.errorMessages[message]));
			assert.ok(typeof message === 'string');
		}
	});

	/**
	 */
	it('status.errorClassNames', () => {
		assert.ok(Object.keys(status.errorClassNames).length > 0);
		for (var code in status.errorClassNames) {
			assert.ok(status.isErrorStatus(code));
			assert.ok(/Error$/.test(status.errorClassNames[code]));
		}
	});

	/**
	 */
	it('status.errorIdentifiers', () => {
		assert.ok(Object.keys(status.errorIdentifiers).length > 0);
		for (var code in status.errorIdentifiers) {
			assert.ok(status.isErrorStatus(code));
			assert.ok(/^[a-zA-Z0-9]+$/.test(status.errorIdentifiers[code]));
		}
	});

	/**
	 */
	it('status.clientErrorCodes', () => {
		assert.ok(Object.keys(status.clientErrorCodes).length > 0);
		for (var code in status.clientErrorCodes) {
			assert.ok(status.isClientErrorStatus(code));
			assert.ok(typeof status.clientErrorCodes[code] === 'string');
		}
	});

	/**
	 */
	it('status.clientErrorEntries', () => {
		assert.ok(status.clientErrorEntries.length > 0);
		for (var entry of status.clientErrorEntries) {
			assert.ok(status.isClientErrorStatus(entry[0]));
			assert.ok(typeof entry[1] === 'string');
			assert.ok(status.errorEntries.indexOf(entry > -1));
		}
	});

	/**
	 */
	it('status.clientErrorMessages', () => {
		assert.ok(Object.keys(status.clientErrorMessages).length > 0);
		for (var message in status.clientErrorMessages) {
			assert.ok(status.isClientErrorStatus(status.clientErrorMessages[message]));
			assert.ok(typeof message === 'string');
		}
	});

	/**
	 */
	it('status.clientErrorClassNames', () => {
		assert.ok(Object.keys(status.clientErrorClassNames).length > 0);
		for (var code in status.clientErrorClassNames) {
			assert.ok(status.isClientErrorStatus(code));
			assert.ok(/Error$/.test(status.clientErrorClassNames[code]));
		}
	});

	/**
	 */
	it('status.clientErrorIdentifiers', () => {
		assert.ok(Object.keys(status.clientErrorIdentifiers).length > 0);
		for (var code in status.clientErrorIdentifiers) {
			assert.ok(status.isClientErrorStatus(code));
			assert.ok(/^[a-zA-Z0-9]+$/.test(status.clientErrorIdentifiers[code]));
		}
	});

	/**
	 */
	it('status.serverErrorCodes', () => {
		assert.ok(Object.keys(status.serverErrorCodes).length > 0);
		for (var code in status.serverErrorCodes) {
			assert.ok(status.isServerErrorStatus(code));
			assert.ok(typeof status.serverErrorCodes[code] === 'string');
		}
	});

	/**
	 */
	it('status.serverErrorEntries', () => {
		assert.ok(status.serverErrorEntries.length > 0);
		for (var entry of status.serverErrorEntries) {
			assert.ok(status.isServerErrorStatus(entry[0]));
			assert.ok(typeof entry[1] === 'string');
			assert.ok(status.errorEntries.indexOf(entry > -1));
		}
	});

	/**
	 */
	it('status.serverErrorMessages', () => {
		assert.ok(Object.keys(status.serverErrorMessages).length > 0);
		for (var message in status.serverErrorMessages) {
			assert.ok(status.isServerErrorStatus(status.serverErrorMessages[message]));
			assert.ok(typeof message === 'string');
		}
	});

	/**
	 */
	it('status.serverErrorClassNames', () => {
		assert.ok(Object.keys(status.serverErrorClassNames).length > 0);
		for (var code in status.serverErrorClassNames) {
			assert.ok(status.isServerErrorStatus(code));
			assert.ok(/Error$/.test(status.serverErrorClassNames[code]));
		}
	});

	/**
	 */
	it('status.serverErrorIdentifiers', () => {
		assert.ok(Object.keys(status.serverErrorIdentifiers).length > 0);
		for (var code in status.serverErrorIdentifiers) {
			assert.ok(status.isServerErrorStatus(code));
			assert.ok(/^[a-zA-Z0-9]+$/.test(status.serverErrorIdentifiers[code]));
		}
	});	
});