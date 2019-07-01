// 简体
const chnNumberChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const chnUnitChar = ["", "十", "百", "千"];

// 繁体
const big5NumberChar = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
const big5UnitChar = ["", "拾", "佰", "仟"];

// 最大安全数字
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// 最小安全数字
const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;

// 数字字符、计数单位
let numberChar, unitChar, unitSection;

/**
 * 每个小节的内部进行转化
 * 
 * @private
 * @param {Number} section 数字
 * @returns {String} 转化的数字
 */
function sectionToChinese(section) {
    let str = '',
        chnstr = '',
        zero = false, //zero为是否进行补零， 第一次进行取余由于为个位数，默认不补零
        unitPos = 0;

    while (section > 0) {
        // 对数字取余10，得到的数即为个位数
        let v = section % 10;

        //如果数字为零，则对字符串进行补零
        if (v == 0) {
            if (zero) {
                //如果遇到连续多次取余都是0，那么只需补一个零即可
                zero = false;
                chnstr = numberChar[v] + chnstr;
            }
        } else {
            //第一次取余之后，如果再次取余为零，则需要补零
            zero = true;
            str = numberChar[v];
            str += unitChar[unitPos];
            chnstr = str + chnstr;
        }
        unitPos++;
        section = Math.floor(section / 10);
    }
    return chnstr;
}

/**
 * 转换整数
 * 
 * @private
 * @param {Number} num 要转换的数字
 * @returns {String} 中文数字
 */
function convertInteger(num) {
    num = Math.floor(num);

    let unitPos = 0;
    let strIns = '', chnStr = '';
    let needZero = false;

    if (num === 0) {
        return numberChar[0];
    }
    while (num > 0) {
        var section = num % 10000;
        if (needZero) {
            chnStr = numberChar[0] + chnStr;
        }
        strIns = sectionToChinese(section);
        strIns += (section !== 0) ? unitSection[unitPos] : unitSection[0];
        chnStr = strIns + chnStr;
        needZero = (section < 1000) && (section > 0);
        num = Math.floor(num / 10000);
        unitPos++;
    }
    return chnStr;
}

/**
 * 转换小数
 * 
 * @private
 * @param {Number} num 要转换的数字
 */
function convertDecimal(num) {
    const numStr = num + '';
    const index = numStr.indexOf(".");

    let ret = '';

    if (index > -1) {
        let decimalStr = numStr.slice(index + 1);
        ret = mapNumberChar(parseInt(decimalStr));
    }

    return ret;
}

/**
 * 映射为中文数字
 * 
 * @private
 * @param {Number} num 要处理的数字
 * @returns {String} 返回中文数字的映射
 */
function mapNumberChar(num) {
    const numStr = num + '';
    let ret = '';

    for (let i = 0, len = numStr.length; i < len; i++) {
        ret += numberChar[parseInt(numStr[i])];
    }

    return ret;
}

/**
 * 数字转中文数字
 * 不在安全数字 -9007199254740991～9007199254740991 内，处理会有异常
 * 
 * @module processor/numberToChinese
 * @since 1.2.0
 * @param {Number} num 数字
 * @param {Object} [options] 配置项
 * @param {Boolean} [options.big5=false] 繁体
 * @param {String} [options.unit=true] 计数单位
 * @param {String} [options.decomal=点] 中文小数点
 * @param {String} [options.zero=零] 设置0。常用配置 〇
 * @param {String} [options.negative=负] 负数前面的字
 * @param {Object} [options.unitConfig] 节点单位配置
 * @param {Object} [options.unitConfig.w=万] 设置万。常用配置 萬
 * @param {Object} [options.unitConfig.y=亿] 设置亿。常用配置 億
 * @returns {String} 中文数字
 * @example
 *
 * numberToChinese(100);
 * // => 一百
 *
 * numberToChinese(100.3);
 * // => 一百点三
 *
 * // 繁体
 * numberToChinese(100, {big5: true});
 * // => 壹佰
 * 
 * numberToChinese(1234567890, {big5: true});
 * // => 壹拾贰亿叁仟肆佰伍拾陆万柒仟捌佰玖拾
 *
 * numberToChinese(100.3, {big5: true});
 * // => 壹佰点叁
 *
 * // 不带计数单位
 * numberToChinese(1990, {unit: false});
 * // => 一九九零
 *
 * // 不带计数单位，修改0
 * numberToChinese(1990, {unit: false, zero:'〇'});
 * // => 一九九〇
 * 
 */
function numberToChinese(num, {
    big5 = false,
    unit = true,
    decimal = '点',
    zero = '',
    negative = '负',
    unitConfig = {
        w: '万', // '萬'
        y: '亿' // '億'
    }
} = {}) {
    // 非数字 或 NaN 不处理
    if (typeof num !== 'number' || isNaN(num)) {
        console.error(`参数错误 ${num}，请传入数字`);
        return '';
    }

    // 超过安全数字提示
    if (num > MAX_SAFE_INTEGER || num < MIN_SAFE_INTEGER) {
        console.error(`${num} 参数不在安全数字内，会有异常`);
    }

    // 设置数字字符和计数单位
    if (big5) {
        numberChar = big5NumberChar.slice();
        unitChar = big5UnitChar.slice();
    } else {
        numberChar = chnNumberChar.slice();
        unitChar = chnUnitChar.slice();
    }

    // 设置节点计数单位，万、亿、万亿
    unitSection = ['', unitConfig.w, unitConfig.y, unitConfig.w + unitConfig.y];

    // 设置0
    if (zero) {
        numberChar[0] = zero;
    }

    // 前置字符，负数处理
    const preStr = num < 0 ? negative : '';

    // 整数和小数
    let chnInteger, chnDecimal;

    // 处理整数
    if (unit) {
        chnInteger = convertInteger(num);
    } else {
        chnInteger = mapNumberChar(Math.floor(num));
    }

    // 处理小数
    chnDecimal = convertDecimal(num);

    return chnDecimal ? `${preStr}${chnInteger}${decimal}${chnDecimal}` : `${preStr}${chnInteger}`;
}

export default numberToChinese