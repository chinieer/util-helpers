import isNil from './utils/type/isNil';
import convertToString from './utils/convertToString';

/**
 * 规整化字符串。如果值为 undefined 或 null 将转为空字符串，如果值不是字符串类型将转为字符串。
 *
 * @static
 * @alias module:Processor.normalizeString
 * @see 参考 {@link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#string_instances|String}
 * @since 4.3.0
 * @param {*} value 待处理的值
 * @returns {string} 规整化的值
 * @example
 * 
 * normalizeString(); // ''
 * normalizeString(undefined); // ''
 * normalizeString(void 0); // ''
 * normalizeString(null); // ''
 *
 * normalizeString(true); // 'true'
 * normalizeString(NaN); // 'NaN'
 * normalizeString(1); // '1'
 * normalizeString('a'); // 'a'
 * 
 */
function normalizeString(value) {
  if (isNil(value)) {
    return '';
  }
  return convertToString(value);
}

export default normalizeString;
