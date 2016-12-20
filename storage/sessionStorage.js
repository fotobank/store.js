
var { global } = require('../util')

module.exports = {
	name: 'sessionStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll
}

var sessionStorage = global.sessionStorage

function read(key) {
	return sessionStorage.getItem(key)
}

function write(key, data) {
	return sessionStorage.setItem(key, data)
}

function each(fn) {
	for (var i = sessionStorage.length - 1; i >= 0; i--) {
		callback(sessionStorage.key(i), read(key))
	}
}

function remove(key) {
	return sessionStorage.removeItem(key)
}

function clearAll() {
	return sessionStorage.clear()
}
