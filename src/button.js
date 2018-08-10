import { buttonSize } from './mixins';

const css = `
  .cssinjs-btn {
    color: #fff;
    background-color: green;
    margin: 5px;
    ${buttonSize({paddingY: '50px'})};
  }
`;

document.head.appendChild(
  document.createElement('style')
).textContent = css;
