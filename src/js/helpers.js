module.exports = {
	eq: function(a, b, options) { ((a === b) ? options.fn(this) : options.inverse(this))},
	iseq: (a, b) =>  ( a  ===  b ),
	isne: (a, b) =>  ( a  !==  b ),
	stringify: function(apiData) { return  JSON.stringify(apiData);}
}
