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
		assert.ok(status.codes != null && typeof status.codes == 'object');
	});

	/**
	 */
	it('Array.isArray(status.entries)', () => {
		assert.ok(Array.isArray(status.entries));
	});

	/**
	 */
	it('typeof(status.messages) === "object"', () => {
		assert.ok(status.messages != null && typeof status.messages == 'object');
	});

	/**
	 */
	it('typeof(status.identifiers) === "object"', () => {
		assert.ok(status.identifiers != null && typeof status.identifiers == 'object');
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
	it('for in ...status.codes', () => {
		for (var code in status.codes) {
			assert.ok(/^[0-9]+$/.test(code));
			assert.ok(typeof status.codes[code] === 'string');
		}
	});

	/**
	 */
	it('for of ...status.entries', () => {
		for (var entry of status.entries) {
			assert.ok(/^[0-9]+$/.test(entry[0]));
			assert.ok(typeof entry[1] === 'string');
		}
	});

	/**
	 */
	it('for in ...status.messages', () => {
		for (var message in status.messages) {
			assert.ok(/^[0-9]+$/.test(status.messages[message]));
			assert.ok(typeof message === 'string');
		}
	});

	/**
	 */
	it('for in ...status.identifiers', () => {
		for (var code in status.identifiers) {
			assert.ok(/^[0-9]+$/.test(code));
			assert.ok(/^[a-zA-Z0-9]+$/.test(status.identifiers[code]));
		}
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
});