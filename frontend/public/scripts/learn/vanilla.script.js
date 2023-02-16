function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * HTML 요소 생성 유틸리티 함수
 * @param {string} type HTML 요소 이름
 * @param {{}} props HTML 속성 객체
 * @param  {...any} children 자식 요소 집합
 * @returns {HTMLElement}
 */
export function createElement(type, props) {
  var element = document.createElement(type);
  for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      property = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    element.setAttribute(property, value);
  }
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  if (children.length > 0) {
    children.forEach(function (child) {
      element.append(child);
    });
  }
  return element;
}

/**
 * 렌더링 함수
 * @param {{ headline: string; description: string; subjects: string[]}} state 상태 변수
 */
export function render(state) {
  // 초기화
  rootElement.innerHTML = '';

  // 헤드라인 요소
  // const headline = document.createElement('h1');
  // headline.textContent = state.headline;
  var headline = createElement('h1', {}, state.headline);

  // 디스크립션 요소
  // const description = document.createElement('p');
  // description.textContent = state.description;
  var description = createElement('p', {}, state.description);

  // 서브젝트 리스트 요소
  // const subjectList = document.createElement('ul');
  // state.subjects.forEach((subject) => {
  //   const subjectItem = document.createElement('li');
  //   subjectItem.textContent = subject;
  //   subjectList.append(subjectItem);
  // });
  var subjectList = createElement.apply(void 0, ['ul', {}].concat(_toConsumableArray(state.subjects.map(function (subject) {
    return createElement('li', {}, subject);
  }))));

  // 컨테이너 요소
  // const container = document.createElement('div');
  // container.classList.add('container', 'container--md');
  // container.append(headline, description, subjectList);
  var container = createElement('div', {
    className: 'container container--md'
  }, headline, description, subjectList);

  // 루트 요소에 컨테이너 요소 포함
  rootElement.append(container);
}

/**
 * 업데이트 함수 
 * @param {{ headline?: string; description?: string; subjects?: string[]}} newState 업데이트 할 상태
 */
export function update(newState) {
  // 학습 주제가 문자 값인 경우
  if (typeof newState.subjects === 'string') {
    var newSubject = newState.subjects;
    newState.subjects = [newSubject];
  }

  // 상태(객체) 합성
  state = _objectSpread(_objectSpread(_objectSpread({}, state), newState), {}, {
    subjects: [].concat(_toConsumableArray(state.subjects), _toConsumableArray(newState.subjects ? newState.subjects : []))
  });

  // Re-렌더링
  render(state);
}

// 상태 변수 ----------------------------------------------------------------------
// - 제목(headline)
// - 설명(description)
// - 학습 주제(subjects)

export var state = {
  headline: '웹브라우저 환경에서 React 라이브러리 시작하기',
  description: 'React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.',
  subjects: ['React 및 ReactDOM API 활용', '가상(Virtual) 노드 vs. 실제(Actual) DOM 노드']
};

/* 컨테이너 DOM 요소 -------------------------------------------------------------- */

var rootElement = document.getElementById('root');