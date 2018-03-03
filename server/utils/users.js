class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id) {

  }

  getUser (id) {

  }

  getUserList (room) {
    const users = this.users.filter((user) => user.room === room);
    const namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};
