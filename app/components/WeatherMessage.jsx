var React = require('react');

var WeatherMessage = React.createClass({
	render: function() {
		var temp = this.props.temp;
		var city = this.props.city;

		return (
			<div>
				<h2>It is {temp} in {city}</h2>
			</div>
		);
	}
});

module.exports = WeatherMessage;