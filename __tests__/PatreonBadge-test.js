/** @jsx React.DOM */

jest.dontMock('../javascripts/jsx/PatreonBadge.js');

describe('PatreonBadge test suite', function () {

	/*jshint unused:false*/

	var TEST_HID = 123123123;

	var React = require('react/addons');
	var TestUtils = React.addons.TestUtils;
	var PatreonBadge = require('../javascripts/jsx/PatreonBadge.js').PatreonBadge;

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

