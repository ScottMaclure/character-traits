/**
 * The main application component.
 *
 * @jsx React.DOM
 **/

/*jshint unused:false*/

var React = require('react');

var SimpleValue = require('./SimpleValue.js').SimpleValue;
var TraitValue = require('./TraitValue.js').TraitValue;

exports.TraitsApp = React.createClass({

	propTypes: {
		speech: React.PropTypes.arrayOf(React.PropTypes.string),
		hair: React.PropTypes.arrayOf(React.PropTypes.string),
		facialFeatures: React.PropTypes.arrayOf(React.PropTypes.string),
		bodyLocations: React.PropTypes.arrayOf(React.PropTypes.string),
		personality: React.PropTypes.arrayOf(React.PropTypes.string)
	},

	/**
	 * Just reset the props, let the random selection begin again.
	 */
	handleRegen: function () {
		this.replaceProps(this.props);
	},

	/**
	 * TODO Abstract to helper object?
	 */
	getRandomValue: function (data) {
		return data[Math.floor(Math.random() * data.length)];
	},

	render: function () {

		var characteristic = this.getRandomValue(this.props.characteristics);
		var charLoc = characteristic.hasLocation ? this.getRandomValue(this.props.bodyLocations) : null;

		console.debug('characteristic:', characteristic, 'charLoc:', charLoc);

		/*jshint ignore:start*/
		return (
			<div className="container-fluid">

				<h1>Character Traits</h1>
				<p>Character Traits generator, for your PnP roleplaying games.</p>

				<SimpleValue title="Hair" text={this.getRandomValue(this.props.hair)}/>
				<SimpleValue title="Facial Features" text={this.getRandomValue(this.props.facialFeatures)}/>

				<TraitValue title="Characteristic" text={characteristic.text} location={charLoc}/>

				<SimpleValue title="Speech" text={this.getRandomValue(this.props.speech)}/>

				<SimpleValue title="Personality" text={this.getRandomValue(this.props.personality)}/>

				<div className="row spacer">
					<div className="col-xs-12">
						<button type="button" className="btn btn-primary"
						onClick={this.handleRegen}>Generate new traits</button>
					</div>
				</div>

			</div>
		);
		/*jshint ignore:end*/

	}

});