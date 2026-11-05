// Logo lives behind its own subpath: it builds URLs with new URL(..., import.meta.url),
// which a bundler must resolve. Apps that never draw the mark import only the barrel.
export { Logo } from './components/core/Logo.js';
