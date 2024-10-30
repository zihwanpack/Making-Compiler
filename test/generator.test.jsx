import { describe, expect, it } from 'vitest';
import { generator } from '../src/generator.js';
import { JSDOM } from 'jsdom';
describe('generator', () => {
  it('should generating the input correctly', () => {
    const input = {
      tag: 'svg',
      attr: {
        width: 100,
        height: 100,
        viewBox: '0 0 100 100',
        xmlns: 'http://www.w3.org/2000/svg',
        version: '1.1',
      },
      body: [
        {
          tag: 'rect',
          attr: {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            fill: 'rgb(0%, 0%, 0%)',
          },
        },
      ],
    };
    const expectedOutput = `
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
<rect x="0" y="0" width="100" height="100" fill="rgb(0%, 0%, 0%)"></rect>
</svg>
    `;

    const result = generator(input);

    // JSDOM으로 DOM 객체 생성
    const resultDOM = new JSDOM(result).window.document;
    const expectedDOM = new JSDOM(expectedOutput).window.document;

    // DOM 객체를 사용한 테스트 비교
    expect(resultDOM.body.innerHTML.replace(/\s+/g, '')).toEqual(expectedDOM.body.innerHTML);
  });
});
