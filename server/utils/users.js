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
    let removed;

    this.users = this.users.filter((user) => {
      if (user.id === id) {
        removed = user;
      }

      return user.id !== id;
    });

    return removed;

  }

  getUser (id) {
    let result;

    for(let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        return this.users[i];
      }
    }
  }

  getUserList (room) {
    const users = this.users.filter((user) => user.room === room);
    const namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};
