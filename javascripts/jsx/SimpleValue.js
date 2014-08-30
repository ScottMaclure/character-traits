/**
 * Simple display of a trait.
 *
 * @jsx React.DOM
 **/

var React = require('react');

exports.SimpleValue = React.createClass({

	propTypes: {
		title: React.PropTypes.string,
		text: React.PropTypes.string
	},

	getDefaultProps: function () {
		return {
			title: 'TBD title',
			text: 'TBD text'
		};
	},

	render: function () {
		/*jshint ignore:start*/
		return (
			<div className="simpleValue">
				<div className="row">
					<div className="col-xs-4 col-md-2 text-right">
						<strong>{this.props.title}:&nbsp;</strong>
					</div>
					<div className="col-xs-8 col-md-10">
						{this.props.text}
					</div>
				</div>
			</div>
		);
		/*jshint ignore:end*/
	}

});