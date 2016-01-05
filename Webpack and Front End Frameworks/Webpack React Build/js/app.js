var React = require('react');
var ReactDOM = require('react-dom');

var Timer = React.createClass
({
	//some es6 magic. Will be compiled.
	getInitialState: function()
	{
		return {
			secondsElapsed: 0
		};
	},
	//normal es5 stuffs
	tick: function()
	{
		this.setState
		(
			{
				secondsElapsed: this.state.secondsElapsed + 1
			}
		);
	},
	componentDidMount: function()
	{
		this.interval = setInterval(this.tick, 1000);
	},
	componentWillUnmount: function()
	{		
		clearInterval(this.interval);
	},
  	render: function()
	{
		//JSX in here gets parsed with the babel loader.
		return (
			<div>
				<h3>It's the final countdown</h3>
				Seconds Elapsed: {this.state.secondsElapsed}
			</div>
		);
	}
});


ReactDOM.render(<Timer />,document.getElementById("container"));

//loads the es6 file
require('./login');