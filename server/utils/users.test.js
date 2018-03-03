const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

  let preUsers;

  beforeEach(() => {
    preUsers = new Users();
    preUsers.users = [{
      id: '1',
      name: 'Chao',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Randy',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Darryl',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Chao',
      room: 'The Friends Fans'
    };

    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    const id = "1";
    const removedUser = preUsers.removeUser(id);

    expect(removedUser.id).toBe("1");
  });

  it('should not remove user', () => {
    const users = preUsers.users;

    const removedUser = preUsers.removeUser("4");
    expect(removedUser).toBeFalsy();
    expect(preUsers.users).toEqual(users);
  });

  it('should find user', () => {
    const user = preUsers.getUser("2");

    expect(user.name).toBe("Randy");
  });

  it('should not find user', () => {
    const user = preUsers.getUser("325423");

    expect(user).toBeFalsy();
  });

  it('should return names for node course', () => {
    const userList = preUsers.getUserList('Node Course');

    expect(userList).toEqual(['Chao', 'Darryl']);
  });

  it('should return names for react course', () => {
    const userList = preUsers.getUserList('React Course');

    expect(userList).toEqual(['Randy']);
  });

});
