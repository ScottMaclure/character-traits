//var COMPONENT_PATH = '../javascripts/jsx/PatreonBadge.js';
var COMPONENT_PATH = '../javascripts/build/PatreonBadge.js';

jest.dontMock(COMPONENT_PATH);

describe('PatreonBadge test suite', function () {

	var TEST_HID = 123123123;

	var React = require('react/addons');
	var TestUtils = React.addons.TestUtils;
	var patreonBadge = require(COMPONENT_PATH).PatreonBadge;

	var component;
	var anchor;

	beforeEach(function () {

		component = TestUtils.renderIntoDocument(
			patreonBadge({ hid: TEST_HID })
		);

		anchor = TestUtils.findRenderedDOMComponentWithTag(component, 'a');

	});

	it('renders an anchor element', function () {
		expect(anchor.getDOMNode()).not.toBe(null);
	});

	it('has the hid in the anchor\'s url', function () {
		expect(anchor.props.href.indexOf(TEST_HID)).not.toBe(-1);
	});

});

