var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getDefaultProps: function() {
		return {
			city: 'Loveland, CO',
			temp: 44
		};
	},
	getInitialState: function() {
		return {
			isLoading: false
		};
	},
	handleNewLocation: function(city) {
		var that = this;

		this.setState({isLoading: true});

		openWeatherMap
			.getTemp(city)
			.then(function(temp) {
				that.setState({
					city: city,
					temp: temp,
					isLoading: false
				});
			}, function(errorMessage) {
				that.setState({
					isLoading: false
				});
				alert(errorMessage);
			})
	},
	render: function() {
		var {isLoading, city, temp} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if (temp && city) {
				return <WeatherMessage city={city} temp={temp}/>;
			}
		} 

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onNewLocation={this.handleNewLocation}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;