// Hover colors apply only where a hover exists. On a phone a tap fires mouseenter and
// leaves the control stuck in its hover colors until the next tap elsewhere.
export function shouldHover() {
  return typeof matchMedia === 'function' && matchMedia('(hover: hover)').matches;
}
