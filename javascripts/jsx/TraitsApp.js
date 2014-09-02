/**
 * The main application component.
 *
 * @jsx React.DOM
 **/

/*jshint unused:false*/

var React = require('react');

var SimpleValue = require('./SimpleValue.js').SimpleValue;
var TraitValue = require('./TraitValue.js').TraitValue;
var PatreonBadge = require('./PatreonBadge.js').PatreonBadge;

exports.TraitsApp = React.createClass({

	propTypes: {
		npcs: React.PropTypes.number,
		maxNpcs: React.PropTypes.number,
		names: React.PropTypes.arrayOf(React.PropTypes.string),
		instincts: React.PropTypes.arrayOf(React.PropTypes.string),
		knacks: React.PropTypes.arrayOf(React.PropTypes.string),
		speech: React.PropTypes.arrayOf(React.PropTypes.string),
		hair: React.PropTypes.arrayOf(React.PropTypes.string),
		facialFeatures: React.PropTypes.arrayOf(React.PropTypes.string),
		bodyLocations: React.PropTypes.arrayOf(React.PropTypes.string),
		personality: React.PropTypes.arrayOf(React.PropTypes.string)
	},

	getDefaultProps: function () {
		return {
			npcs: 1,
			maxNpcs: 20
		};
	},

	/**
	 * Just reset the props, let the random selection begin again.
	 */
	handleRegen: function () {

		// Fish the selected value from the DOM.
		var selectElem = this.refs.npcCount.getDOMNode();
		var npcCount = parseInt(selectElem.options[selectElem.selectedIndex].value, 10);

		// Re-render.
		this.setProps({ npcs: npcCount });
	},

	/**
	 * TODO Abstract to helper object?
	 */
	getRandomValue: function (data) {
		return data[Math.floor(Math.random() * data.length)];
	},

	/**
	 * FIXME Not a fan of this gymnastics to get around "Empty block" JSHint error.
	 */
	noop: function () {},

	render: function () {

		// Support multiple sets of NPC data, based on the passed prop value.
		var npcs = [];
		for (var i = 0; i < this.props.npcs; i++) {

			var characteristic = this.getRandomValue(this.props.characteristics);
			var charLoc = characteristic.hasLocation ? this.getRandomValue(this.props.bodyLocations) : null;

			/*jshint ignore:start*/
			npcs.push(
				<div key={i} className="row">
					<div className="col-xs-12">
						<div className="panel panel-info">
		  					<div className="panel-body">

								<div className="row">
									<div className="col-xs-4 col-md-2 text-right">
		  								<h4>NPC #{i+1}</h4>
									</div>
								</div>

		  						<SimpleValue title="Name" text={this.getRandomValue(this.props.names)}/>
								<SimpleValue title="Hair" text={this.getRandomValue(this.props.hair)}/>
								<SimpleValue title="Facial" text={this.getRandomValue(this.props.facialFeatures)}/>
								<SimpleValue title="Speech" text={this.getRandomValue(this.props.speech)}/>
								<TraitValue title="Characteristic" text={characteristic.text} location={charLoc}/>
								<SimpleValue title="Personality" text={this.getRandomValue(this.props.personality)}/>
								<SimpleValue title="Instinct" text={this.getRandomValue(this.props.instincts)}/>
								<SimpleValue title="Knack" text={this.getRandomValue(this.props.knacks)}/>

								{/* For copy+paste niceness */}
								<div>&nbsp;</div>

							</div>
						</div>
					</div>
				</div>
			);
			/*jshint ignore:end*/
		}

		var npcsOptions = [];
		for (var j = 1; j <= this.props.maxNpcs; j++) {
			this.noop();
			/*jshint ignore:start*/
			npcsOptions.push(
				<option value={j}>{j}</option>
			);
			/*jshint ignore:end*/
		}

		/*jshint ignore:start*/
		return (
			<div className="container-fluid">

				<div className="page-header">
  					<h1>
  						Character Traits&nbsp;
  						<small>NPC traits generator, for your roleplaying games.</small>
					</h1>
				</div>

				<div className="row spacer">
					<div className="col-xs-5 col-md-2">
						<label># NPCS:&nbsp;</label>
						<select ref="npcCount">
							{npcsOptions}
						</select>
					</div>
					<div className="col-xs-7 col-md-10 left">
						<button type="button" className="btn btn-primary"
						onClick={this.handleRegen}>Generate new traits</button>
					</div>
				</div>

				{npcs}

				<div className="row">
					<div className="col-xs-12 col-md-9 spacer">
						<PatreonBadge hid={899786}/>
					</div>
					<div className="col-xs-12 col-md-3">
						&copy; 2014 <a href="mailto:scott@maclure.com.au">Scott Maclure</a>. All Rights Reserved.
					</div>
				</div>

			</div>
		);
		/*jshint ignore:end*/

	}

});