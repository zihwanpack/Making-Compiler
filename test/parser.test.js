import { describe, expect, it } from 'vitest';
import { parser } from '../src/parser.js';

describe('parser', () => {
  it('should parsing the input correctly', () => {
    const input = [
      { type: 'word', value: 'Paper' },
      { type: 'number', value: 100 },
    ];
    const expectedOutput = {
      type: 'Drawing',
      body: [
        {
          type: 'CallExpression',
          name: 'Paper',
          arguments: [{ type: 'NumberLiteral', value: '100' }],
        },
      ],
    };
    const result = parser(input);
    expect(result).toEqual(expectedOutput);
  });
});
