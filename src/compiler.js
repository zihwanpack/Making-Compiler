import { JSDOM } from 'jsdom';
import { lexer } from './lexer.js';
import { parser } from './parser.js';
import { transformer } from './transformer.js';
import { generator } from './generator.js';

const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
const { document } = dom.window;

const sbn = {
  VERSION: '0.0.1',
  lexer,
  parser,
  transformer,
  generator,

  compile(code) {
    const tokens = this.lexer(code);
    const ast = this.parser(tokens);
    const svg = this.transformer(ast);
    return this.generator(svg);
  },
};

const code = 'Paper 0 Pen 100 Line 0 50 100 50';
const svg = sbn.compile(code);
document.body.innerHTML = svg;

console.log(document.body.innerHTML);
