/** @jsx React.DOM */

var COMPONENT_PATH = '../javascripts/jsx/PatreonBadge.js';
//var COMPONENT_PATH = '../javascripts/build/PatreonBadge.js';

jest.dontMock(COMPONENT_PATH);

describe('PatreonBadge test suite', function () {

	/*jshint unused:false*/

	var TEST_HID = 123123123;

	var React = require('react/addons');
	var TestUtils = React.addons.TestUtils;
	var PatreonBadge = require(COMPONENT_PATH).PatreonBadge;

	var component;
	var anchor;

	beforeEach(function () {

		/*jshint ignore:start*/
		component = TestUtils.renderIntoDocument(
			<PatreonBadge hid={TEST_HID}/>
		);
		/*jshint ignore:end*/

		anchor = TestUtils.findRenderedDOMComponentWithTag(component, 'a');

	});

	it('renders an anchor element', function () {
		expect(anchor.getDOMNode()).not.toBe(null);
	});

	it('has the hid in the anchor\'s url', function () {
		expect(anchor.props.href.indexOf(TEST_HID)).not.toBe(-1);
	});

});

