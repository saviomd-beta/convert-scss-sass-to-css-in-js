import { paddingYLg, paddingXLg, fontSizeLg, borderRadiusLg } from './variables';
import { buttonSize } from './mixins';

const css = `
  .cssinjs-btn {
    color: #fff;
    background-color: green;
    margin: 5px;
    ${buttonSize({
      paddingY: paddingYLg,
      paddingX: paddingXLg,
      fontSize: fontSizeLg,
      borderRadius: borderRadiusLg
    })};
  }
`;

document.head.appendChild(
  document.createElement('style')
).textContent = css;
