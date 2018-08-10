import sizes from './sizes';

const button = `
  .cssinjs-btn {
    color: #fff;
    background-color: green;
  }
`;

document.head.appendChild(
  document.createElement('style')
).textContent = sizes + button;
