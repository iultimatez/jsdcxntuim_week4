/**
 * Post
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	title: {
      type: 'string',
      require: true
    },
    content: {
      type: 'string',
      require: true
    }
  	/* e.g.
  	nickname: 'string'
  	*/

  }

};
