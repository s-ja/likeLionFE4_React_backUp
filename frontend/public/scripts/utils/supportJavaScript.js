import { addClass, removeClass } from './classNames.js';
var _document = document,
  rootElement = _document.documentElement;
removeClass(rootElement, 'no-js');
addClass(rootElement, 'js');