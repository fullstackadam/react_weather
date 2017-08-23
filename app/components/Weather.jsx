import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
// const ErrorModal from 'ErrorModal';

const Weather = React.createClass({
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
		const that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			city: undefined,
			temp: undefined
		});

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
					isLoading: false,
					errorMessage: errorMessage.message
				});
			})
	},
	componentDidMount: function() {
		const city = this.props.location.query.location;

		if(city && city.length > 0) {
			console.log('did mount', city);
			this.handleNewLocation(city);
			window.location.hash = '#/';
		}
	},
	componentWillReceiveProps: function(newProps) {
		const city = newProps.location.query.city;

		if(city && city.length > 0) {
			this.handleNewLocation(city);
			window.location.hash = '#/';
		}
	},
	render: function() {
		const {isLoading, city, temp, errorMessage} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if (temp && city) {
				return <WeatherMessage city={city} temp={temp}/>;
			}
		}

		function renderError() {
			if (typeof errorMessage === 'string') {
				return <ErrorModal message={errorMessage}/>
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onNewLocation={this.handleNewLocation}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;