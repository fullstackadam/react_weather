var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
	getDefaultProps: function() {
		return {
			city: 'Loveland, CO',
			temp: 44
		};
	},
	getInitialState: function() {
		return {
			city: this.props.city,
			temp: this.props.temp
		};
	},
	handleNewLocation: function(city) {
		this.setState({
			city: city,
			temp: 24
		});
	},
	render: function() {
		var city = this.state.city;
		var temp = this.state.temp;

		return (
			<div>
				<h1>Get Weather</h1>
				<WeatherForm onNewLocation={this.handleNewLocation}/>
				<WeatherMessage city={city} temp={temp}/>
			</div>
		);
	}
});

module.exports = Weather;