export function generator(svgAST) {
  // 속성 객체에서 문자열 생성
  const createAttrString = (attribute) =>
    Object.keys(attribute)
      .map((key) => `${key}="${attribute[key]}"`)
      .join(' ');

  // SVG 속성 문자열 생성
  const svgAttr = createAttrString(svgAST.attribute);

  // SVG 본문 요소 생성
  const elements = svgAST.body
    .map((node) => {
      const attrString = createAttrString(node.attribute);
      return `<${node.tag} ${attrString}></${node.tag}>`;
    })
    .join('\n');

  // SVG 태그로 감싸기
  return `<svg ${svgAttr}>\n${elements}\n</svg>`;
}
