var axios = require('axios');

const OPEN_WEATHER_MAP_API_KEY = '75acb723f4b873629cd14a59cf81e04f';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid='+OPEN_WEATHER_MAP_API_KEY+'&units=imperial';

module.exports = {
	getTemp: function(city) {
		city = encodeURIComponent(city);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${city}`;

		return axios.get(requestUrl)
			.then(function(res) {
				if(res.data.cod && res.data.message) {
					throw new Error(res.data.message);
				} else {
					return res.data.main.temp;
				}
			}, function(error) {
				throw new Error(error.response.data.message);
			});
	}
};