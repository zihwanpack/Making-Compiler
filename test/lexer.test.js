import { describe, it, expect } from 'vitest';
import { lexer } from '../src/lexer.js';

describe('lexer', () => {
  it('should tokenize the input correctly', () => {
    const input = 'Paper 100';
    const expectedOutput = [
      { type: 'word', value: 'Paper' },
      { type: 'number', value: '100' },
    ];

    const result = lexer(input);
    expect(result).toEqual(expectedOutput);
  });
});
