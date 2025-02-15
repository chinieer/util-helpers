import isType from './isType';

/**
 * 检查值是否为Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIError|DOMException
 *
 * @static
 * @alias module:Type.isError
 * @since 1.1.0
 * @param {*} value 检查值
 * @returns {boolean} 是否为Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIError|DOMException
 * @example
 *
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 */
function isError(value) {
  return isType(value, 'Error') || isType(value, 'DOMException');
}

export default isError;
