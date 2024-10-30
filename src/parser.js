// 토큰 사이의 관계 찾기
export function parser(tokens) {
  // AST는 추상 구문 트리
  const AST = {
    type: 'Drawing',
    body: [],
  };

  while (tokens.length > 0) {
    let currentToken = tokens.shift();
    const { type, value } = currentToken;
    if (type === 'word') {
      switch (value) {
        case 'Paper':
          const expression = {
            type: 'CallExpression',
            name: 'Paper',
            arguments: [],
          };
          const argument = tokens.shift();
          const { type, value } = argument;
          if (type === 'number') {
            expression.arguments.push({
              type: 'NumberLiteral',
              value: String(value),
            });
            AST.body.push(expression);
          } else {
            throw 'Paper command must be followed by a number.';
          }
          break;
        //  case 'Pen' :
        //   ...
        // case 'Line':
        //  ...
      }
    }
  }
  return AST;
}
