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
const status = {};

/**
 * @var {Object}
 */
status.codes = require('./codes.json');

/**
 * @var {Object}
 */
status.entries = Object.entries(status.codes);

/**
 * @var {Object}
 */
status.messages = status.entries.reduce((messages, entry) => {
	const code = entry[0];
	const message = entry[1];
	messages[message.toLowerCase()] = code;
	messages[message] = code;
	return messages;
},{});

/**
 * @var {Object}
 */
status.identifiers = status.entries.reduce((identifiers, entry) => {
	identifiers[entry[0]] = entry[1].replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '');
	return identifiers;
},{});

/**
 * @param {number} code
 * @returns {boolean}
 */
status.isInformationalStatus = (code) => (code |= 0) >= 100 && code < 200;

/**
 * @param {number} code
 * @returns {boolean}
 */
status.isSuccessfulStatus = (code) => (code |= 0) >= 200 && code < 300;

/**
 * @param {number} code
 * @returns {boolean}
 */
status.isRedirectionStatus = (code) => (code |= 0) >= 300 && code < 400;

/**
 * @param {number} code
 * @returns {boolean}
 */
status.isErrorStatus = (code) => (code |= 0) >= 400 && code < 600;

/**
 * @param {number} code
 * @returns {boolean}
 */
status.isClientErrorStatus = (code) => (code |= 0) >= 400 && code < 500;

/**
 * @param {number} code
 * @returns {boolean}
 */
status.isServerErrorStatus = (code) => (code |= 0) >= 500 && code < 600;

/**
 * @+
 */
module.exports = status;