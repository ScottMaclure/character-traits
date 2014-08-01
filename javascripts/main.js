// Load libraries.
var React = require('react');

// Load app components.
var traitsApp = require('./build/TraitsApp.js').TraitsApp;

// TODO Dynamically load trait sets.

$.get('traits-default.json', function (data) {

	console.log('loaded traits data:', data);

	var app = traitsApp(data);

	React.renderComponent(app, document.getElementById('appContainer'));

	// For debugging during dev. Can remove.
	window.data = data;
	window.app = app;

});