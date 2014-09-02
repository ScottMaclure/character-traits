/**
* Simple display of a patreon badge.
*
* @jsx React.DOM
**/

var React = require('react');

exports.PatreonBadge = React.createClass({

	propTypes: {
		hid: React.PropTypes.number
	},

	render: function () {

		/*jshint unused:false*/

		var patreonUrl = 'http://www.patreon.com/creation?hid=' + this.props.hid;

		/*jshint ignore:start*/
		return (
			<div className="patreonBadge">
				Like my work?
				Consider <a href={patreonUrl} target="_blank">supporting me as a patreon</a>!
			</div>
		);
		/*jshint ignore:end*/
	}

});