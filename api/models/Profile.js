module.exports = {
	attributes:{
		email: {
			type: 'string',
			required: true
		},
		owner: {
			model: 'User'
		}
	}
};