const expect = require('expect');

const {generateMessage} = require('./message');

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
