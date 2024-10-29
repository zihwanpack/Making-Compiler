export function lexer(code) {
  // 공백문자 정규표현식
  return code
    .split(/\s+/)
    .filter((token) => token.length > 0)
    .map((token) =>
      isNaN(token) ? { type: 'word', value: token } : { type: 'number', value: token }
    );
}
