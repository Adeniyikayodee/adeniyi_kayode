const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Account} = require('./../../accounts/account.model');
const {RefreshToken} = require('./../../accounts/refresh-token.model');

const accountOneID = new ObjectID();
const accountTwoID = new ObjectID();
const accounts = [{
  _id: accountOneID,
  email: "person1@gmail.com",
  password: "person1PASSWORD",
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: accountOneID, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}, {
  _id: accountTwoID,
  email: "person2@gmail.com",
  password: "person2PASSWORD",
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: accountTwoID, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}]

const todos = [{
  _id: new ObjectID(),
  text: "First test todo",
  _creator: userOneID
}, {
  _id: new ObjectID(),
  text: "Second test todo",
  _creator: userTwoID
}];

var addDummyTodoItems = (done) => {
  Todo.deleteMany({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

var addDummyUsers = (done) => {
  User.deleteMany({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
};

module.exports = {
  todos,
  addDummyTodoItems,
  users,
  addDummyUsers
}