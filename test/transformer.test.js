import { describe, it, expect } from 'vitest';
import { transformer } from '../src/transformer.js';

describe('transformer', () => {
  it('should transforming the input correctly', () => {
    const input = {
      type: 'Drawing',
      body: [
        {
          type: 'CallExpression',
          name: 'Paper',
          arguments: [{ type: 'NumberLiteral', value: '100' }],
        },
      ],
    };
    const expectedOutput = {
      tag: 'svg',
      attribute: {
        width: 100,
        height: 100,
        viewBox: '0 0 100 100',
        xmlns: 'http://www.w3.org/2000/svg',
        version: '1.1',
      },
      body: [
        {
          tag: 'rect',
          attribute: {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            fill: 'rgb(0%, 0%, 0%)',
          },
        },
      ],
    };
    const result = transformer(input);
    expect(result).toEqual(expectedOutput);
  });
});
