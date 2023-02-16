// DOM
// 실제 문서 객체 모델
// const containerElement = document.createElement('div');
// containerElement.setAttribute('class', 'container container--md');
// containerElement.textContent = '컨테이너 요소';

// console.dir(containerElement);

/* -------------------------------------------------------------------------- */

// Virtual DOM
// 실제의 것을 추상화 한 것 
// 가상 문서 객체 모델

var guideHTML = /* html */"\n  <div class=\"container container--md\">\n    <h1>\uC6F9\uBE0C\uB77C\uC6B0\uC800 \uD658\uACBD\uC5D0\uC11C React \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC2DC\uC791\uD558\uAE30</h1>\n    <p>React \uB77C\uC774\uBE0C\uB7EC\uB9AC \uCF54\uB4DC\uAC00 \uC6F9 \uBE0C\uB77C\uC6B0\uC800 \uD658\uACBD\uC5D0\uC11C \uC5B4\uB5BB\uAC8C \uD574\uC11D\uB418\uACE0 \uC791\uB3D9\uB418\uB294 \uC9C0 \uC0B4\uD3B4\uBD05\uB2C8\uB2E4.</p>\n    <ul>\n      <li>React \uBC0F ReactDOM API \uD65C\uC6A9</li>\n      <li>\uAC00\uC0C1(Virtual) \uB178\uB4DC vs. \uC2E4\uC81C(Actual) DOM \uB178\uB4DC</li>\n    </ul>\n  </div>\n";

// React API
// Creating React Element

// alias (별칭) 함수
// 구조 분해 할당
var _React = React,
  h = _React.createElement;

// 가상 DOM 구성 (동적 마크업)
// design pattern: composite pattern
var virtualElement = h('div', {
  className: 'container container--md'
}, h('h1', null, '웹브라우저 환경에서 React 라이브러리 시작하기'), h('p', null, 'React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.'), h('ul', {}, h('li', null, 'React 및 ReactDOM API 활용'), h('li', null, '가상(Virtual) 노드 vs. 실제(Actual) DOM 노드')));

// React가 만들어낸 가상 DOM 루트 노드
// console.log(virtualElement); // App

var actualElement = document.getElementById('root');

// React v17
// ReactDOM 렌더링 해줘
// React가 만든 가상 노드를 실제 DOM 노드 안에 마운트(mount) 해줘
// ReactDOM.render(virtualElement, actualElement);

// React v18
// ReactDOM! 문서에 실제 존재하는 요소노드를 React 트리의 뿌리로 만들어줘
// 생성된 React 트리의 뿌리 요소(객체)의 렌더링 메서드를 사용해
// React가 만든 가상 노드를 렌더링 해줘
var reactDomRoot = ReactDOM.createRoot(actualElement);
reactDomRoot.render(virtualElement);