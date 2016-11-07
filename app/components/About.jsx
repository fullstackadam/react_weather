var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p className="text-center">
				Built with <span style={{color: 'red'}}>&hearts;</span> using <Link to='https://foundation.zurb.com/'>Foundation</Link>, 
				<Link to='https://facebook.github.io/react/'> React </Link> 
				and <br/><Link to='https://openweathermap.org/'>Open Weather Map</Link>
			</p>
		</div>
	);
};

module.exports = About;