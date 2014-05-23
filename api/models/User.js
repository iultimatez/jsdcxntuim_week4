module.exports = {
	attributes:{
		name: {
			type: 'string',
			required: true
		},
		password :{
			type: 'string',
			required: true
		},
		post:{
			collection: "Post",
			via: "owner"
		},
		email:{
			model: 'Profile'
		},
		toDisplay: function(){
			return "Username is: " + this.name;
		}
	},
	beforeCreate: function(values, next){
		console.log("Create params");
		console.log(values);

		next();
	}
};