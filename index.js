function a10n(target) {
  if (typeof target === 'number') {
    target = `${target}`;
  } else if (typeof target !== 'string') {
    return '';
  }
  target = [...target];
  const prefix = target.slice(0, 1) ? target.slice(0, 1) : '';
  const suffix = target.length >= 2 && target.slice(-1) ? target.slice(-1) : '';
  const count = target.length >= 3 ? target.length - 2 : '';
  return `${prefix}${count}${suffix}`;
}

module.exports = a10n;
