const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const author = 'Chao';
    const text = 'I love Randy and Darryl';
    const result = generateMessage(author, text);

    expect(result['from']).toBe('Chao');
    expect(result['text']).toBe('I love Randy and Darryl');
    expect(typeof result['createdAt']).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const author = 'Admin';
    const latitude = 1;
    const longitude = 1;
    const message = generateLocationMessage(author, latitude, longitude);

    expect(message.from).toBe('Admin');
    expect(message.url).toBe('https://www.google.com/maps?q=1,1');
  });
});
