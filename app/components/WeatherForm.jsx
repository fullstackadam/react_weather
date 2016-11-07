var React = require('react');

var WeatherForm = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();

		var location = this.refs.location.value;

		if(location.length > 0) {
			this.refs.location.value = '';
			this.props.onNewLocation(location);
		}
	},
	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input type="search" ref="location" placeholder="Enter a city name"/>
				</div>
				<div>
					<button className="button expanded hollow">Get Weather</button>
				</div>
			</form>
		);
	}
});

module.exports = WeatherForm;