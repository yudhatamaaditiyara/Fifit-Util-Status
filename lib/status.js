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
'use strict';

/**
 * @var {Object}
 */
const status = module.exports = {};

/**
 * @var {Object}
 */
status.codes = require('./codes.json');

/**
 * @var {Array}
 */
status.entries = Object.entries(status.codes);

/**
 * @var {Object}
 */
status.messages = {};

/**
 * @var {Object}
 */
status.identifiers = {};

/**
 * @var {Object}
 */
status.errorCodes = {};

/**
 * @var {Array}
 */
status.errorEntries = [];

/**
 * @var {Object}
 */
status.errorMessages = {};

/**
 * @var {Object}
 */
status.errorClassNames = {};

/**
 * @var {Object}
 */
status.errorIdentifiers = {};

/**
 * @var {Object}
 */
status.clientErrorCodes = {};

/**
 * @var {Array}
 */
status.clientErrorEntries = [];

/**
 * @var {Object}
 */
status.clientErrorMessages = {};

/**
 * @var {Object}
 */
status.clientErrorClassNames = {};

/**
 * @var {Object}
 */
status.clientErrorIdentifiers = {};

/**
 * @var {Object}
 */
status.serverErrorCodes = {};

/**
 * @var {Array}
 */
status.serverErrorEntries = [];

/**
 * @var {Object}
 */
status.serverErrorMessages = {};

/**
 * @var {Object}
 */
status.serverErrorClassNames = {};

/**
 * @var {Object}
 */
status.serverErrorIdentifiers = {};

/**
 * @param {number|string} code
 * @return {boolean}
 */
status.isInformationalStatus = (code) => (code |= 0) >= 100 && code < 200;

/**
 * @param {number|string} code
 * @return {boolean}
 */
status.isSuccessStatus = (code) => (code |= 0) >= 200 && code < 300;

/**
 * @param {number|string} code
 * @return {boolean}
 */
status.isRedirectionStatus = (code) => (code |= 0) >= 300 && code < 400;

/**
 * @param {number|string} code
 * @return {boolean}
 */
status.isErrorStatus = (code) => (code |= 0) >= 400 && code < 600;

/**
 * @param {number|string} code
 * @return {boolean}
 */
status.isClientErrorStatus = (code) => (code |= 0) >= 400 && code < 500;

/**
 * @param {number|string} code
 * @return {boolean}
 */
status.isServerErrorStatus = (code) => (code |= 0) >= 500 && code < 600;

/**
 * @param {string} message
 * @return {string}
 */
function createIdentifier(message){
	return message.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '');
}

/**
 * @param {string} identifier
 * @return {string}
 */
function createErrorClassName(identifier){
	if (!/Error$/.test(identifier)) {
		identifier += 'Error';
	}
	return identifier;
}

/**
 * @+
 */
status.entries.forEach((entry) => {
	let code = entry[0];
	let message = entry[1];
	status.messages[message] = code;
	status.identifiers[code] = createIdentifier(message);
});

/**
 * @+
 */
status.entries.forEach((entry) => {
	let code = entry[0];
	if (status.isErrorStatus(code)) {
		let message = entry[1];
		status.errorCodes[code] = message;
		status.errorMessages[message] = code;
		status.errorIdentifiers[code] = status.identifiers[code];
		status.errorClassNames[code] = createErrorClassName(status.identifiers[code]);
		status.errorEntries.push(entry);
	}
});

/**
 * @+
 */
status.errorEntries.forEach((entry) => {
	let code = entry[0];
	if (status.isClientErrorStatus(code)) {
		let message = entry[1];
		status.clientErrorCodes[code] = message;
		status.clientErrorMessages[message] = code;
		status.clientErrorIdentifiers[code] = status.errorIdentifiers[code];
		status.clientErrorClassNames[code] = status.errorClassNames[code];
		status.clientErrorEntries.push(entry);
	}
});

/**
 * @+
 */
status.errorEntries.forEach((entry) => {
	let code = entry[0];
	if (status.isServerErrorStatus(code)) {
		let message = entry[1];
		status.serverErrorCodes[code] = message;
		status.serverErrorMessages[message] = code;
		status.serverErrorIdentifiers[code] = status.errorIdentifiers[code];
		status.serverErrorClassNames[code] = status.errorClassNames[code];
		status.serverErrorEntries.push(entry);
	}
});