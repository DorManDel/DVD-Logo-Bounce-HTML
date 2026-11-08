/* Portfolio bridge v1. Include this classic script AFTER the original DVD
 * game's inline script and before </body>. Only fixed numeric options supported.
 */
(() => {
  'use strict';
  const ORIGIN = 'https://dormandel.github.io';
  const prefix = 'dm:DVD:';
  const bound = (v, lo, hi) => {
    const n = Number(v);
    return Number.isFinite(n) ? Math.max(lo, Math.min(hi, n)) : null;
  };
  const send = () => {
    if (window.parent === window) return;
    const color = getComputedStyle(document.documentElement).getPropertyValue('--logo-color').trim();
    if (/^#[0-9a-f]{6}$/i.test(color))
      window.parent.postMessage({type: prefix + 'STATE', version: 1, color}, ORIGIN);
  };
  window.addEventListener('message', event => {
    if (event.origin !== ORIGIN || event.source !== window.parent) return;
    const p = event.data;
    if (!p || p.version !== 1 || p.type !== prefix + 'SET_PRESET') return;
    const size = bound(p.logoScale, .5, 2), speed = bound(p.speed, .1, 5);
    if (size !== null) {
      dvdSizeScale = size;
      dvdSizeSlider.value = String(size);
      applyDvdSize();
    }
    if (speed !== null) {
      speedMultiplier = speed;
      speedSlider.value = String(speed);
      updateSpeedDisplay();
    }
    savePreferences();
    send();
  });
  new MutationObserver(mutations => {
    if (mutations.some(m => m.attributeName === 'style')) send();
  }).observe(document.documentElement,{attributes:true,attributeFilter:['style']});
  send();
})();
