import React from 'react';

const WeatherMessage = ({temp, city}) => {
	return (
		<div>
			<h3 className="text-center">It is {temp} in {city}</h3>
		</div>
	);
};

module.exports = WeatherMessage;