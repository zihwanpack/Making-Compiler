// 변형 함수 (AST를 SVG에 더 가까운 AST로 변형하기)
export function transformer(AST) {
  const svgAsset = {
    tag: 'svg',
    attribute: {
      width: 100,
      height: 100,
      viewBox: '0 0 100 100',
      xmlns: 'http://www.w3.org/2000/svg',
      version: '1.1',
    },
    body: [],
  };
  // 기본 펜은 검정색이다.
  let penColor = 100;
  while (AST.body.length > 0) {
    const node = AST.body.shift();
    switch (node.name) {
      case 'Paper':
        let paperColor = 100 - node.arguments[0].value;
        svgAsset.body.push({
          // svgAsset의 body에 사각형 정보 추가
          tag: 'rect',
          attribute: {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            // 'rgb(' + paperColor + '%,' + paperColor + '%,' + paperColor + '%)',
            fill: `rgb(${paperColor}%, ${paperColor}%, ${paperColor}%)`,
          },
        });
        break;
      case 'Pen':
        // 현재 펜색 penColor 변수에 넣기
        penColor = 100 - node.arguments[0].value;
        break;
      // case 'Line':
      //   ...
    }
  }
  return svgAsset;
}
