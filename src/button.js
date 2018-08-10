import { buttonSize, boxShadow } from './mixins';

const css = `
  .cssinjs-btn {
    color: #fff;
    background-color: green;
    margin: 5px;
    ${buttonSize({paddingY: '50px'})};
    ${boxShadow('0px 4px 5px #666', '2px 6px 10px #999')};
  }
`;

document.head.appendChild(
  document.createElement('style')
).textContent = css;
