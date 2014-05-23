/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `UserController.crcreate()`
   */
  create: function (req, res) {
    var title = req.body.name;
    var content = req.body.password;
    var email = req.body.email;

    // Send a JSON response
    User.create({
      name: title,
      password: content,
      email: email
    }).exec(function (err, post) {
      if (err) {
        return res.erro();
      }

      req.flash('info', 'info: Create post success !!!');
      res.redirect("/");
    });
  },


  /**
   * `UserController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  },


  /**
   * `UserController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `UserController.list()`
   */
  list: function (req, res) {
    return res.json({
      todo: 'list() is not implemented yet!'
    });
  }
};

