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

  });

  it('should not remove user', () => {

  });

  it('should find user', () => {

  });

  it('should not find user', () => {

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
