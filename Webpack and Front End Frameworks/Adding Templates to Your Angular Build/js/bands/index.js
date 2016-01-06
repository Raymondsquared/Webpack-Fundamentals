module.exports = function(app)
{
	require('./bandList')(app);
	require('./band-info')(app);
}