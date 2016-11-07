var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples Component</h1>
			<p>Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=Denver'>Denver, CO</Link>
				</li>
				<li>
					<Link to='/?location=San+Francisco'>San Francisco, CA</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = Examples;