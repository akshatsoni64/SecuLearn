const User = require("./model/socket");

class UserController {
  constructor() {}

  addUser(request, response) {
    console.log("\nPOST:", request.originalUrl, new Date(), "Adding User");
    console.log(request.body);
    const user = new User({
      username: request.body.username,
      password: request.body.password,
    });

    user.save().then((user) => {
      response.json(user);
    });
  }

  getUsers(request, response){
    console.log("\nGET:", request.originalUrl, new Date(), "Getting Users");
    User.find().then((users) => {
      response.json(users);
    });
  }

  authenticate(request, response){
    console.log("\nPOST:", request.originalUrl, new Date(), "Authenticating User");
    const username = request.body.username;
    const password = request.body.password;

    User.findOne({ username: username, password: password }, function (err, user) {
      if (err) {
        console.log(err);
        response.status(500);
      }
      if (!user) {
        response.status(404);
      }
      response.status(200);
    });    
  }
}
module.exports = UserController;
