let counter = 0;

export default styles => {
  const classes = {};
  let cssString = '';
  for (const name in styles) {
    classes[name] = name + '-' + counter++;
    const selector = '.' + classes[name];
    cssString += selector + ' {';
    if (typeof styles[name] === 'string') {
      cssString += styles[name];
    } else {
      for (const property in styles[name]) {
        cssString += property + ': ' + styles[name][property] + ';';
      }
    }
    cssString += '}';
  }

  document.head.appendChild(
    document.createElement('style')
  ).textContent = cssString;

  return classes;
};
