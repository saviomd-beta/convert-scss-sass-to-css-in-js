import { buttonSize, boxShadow } from './mixins';
import { textColor, backgroundColor } from './variables';

const cssString = `
  .cssinjs-btn {
    color: #fff;
    background-color: green;
    margin: 5px;
    ${buttonSize({paddingY: '50px'})};
    ${boxShadow('0px 4px 5px #666', '2px 6px 10px #999')};
  }
`;

const css = {
  '.cssinjs-btn': {
      color: textColor,
      background: backgroundColor
  }
};

const toCssString = (css) => {
  let result = '';
  for (const selector in css) {
    result += selector + ' {';
    for (const property in css[selector]) {
      result += property + ': ' + css[selector][property] + ';';
    }
    result += '}';
  }
  return result;
};

document.head.appendChild(
  document.createElement('style')
).textContent = toCssString(css);
