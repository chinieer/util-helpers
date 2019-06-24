// 内置正则模式
const patterns = {
    // 手机号码 11位数字，以1开头，第二位是3456789其中一个，后面再加9个数字
    mobile: /^1[3456789]\d{9}$/,

    // 固定电话 支持区号和分机号 3～4位区号，以0开头；7～8位直播号，以2～9开头；1～6位分机号
    telephone: /^(0\d{2,3}\-)?([2-9]\d{6,7})(\-\d{1,6})?$/,

    // 邮政编码
    postcode: /^\d{6}$/,

    // QQ号 非0开头，5至11位数字
    qq: /^[1-9]\d{4,10}$/,

    // 微信号 6至20位，以字母开头，字母，数字，减号（连接符），下划线
    wx: /^[a-z]([-_a-z0-9]{5,19})+$/i,

    // 邮箱
    email: /^[\da-z]+([\-\.\_]?[\da-z]+)*@[\da-z]+([\-\.]?[\da-z]+)*(\.[a-z]{2,})+$/i,

    // 中文 支持配置是否存在中文或必须全中文校验
    // cn: /\u4e00-\u9fa5/,

    // 18位身份证
    idCard18: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[012]))(([0-2][1-9])|10|20|30|31)\d{3}(\d|X)$/i,

    // 15位身份证
    idCard15: /^[1-9]\d{5}\d{2}((0[1-9])|(1[012]))(([0-2][1-9])|10|20|30|31)\d{3}$/,

    // 车牌号正则
    vehicle: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,

    // ipv4正则
    ipv4: /^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,

    // ipv6正则
    // ipv6: /^((([0-9A-F]{1,4}:){7}([0-9A-F]{1,4}|:))|(([0-9A-F]{1,4}:){6}(:[0-9A-F]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|\d{1,2})(\.(25[0-5]|2[0-4]\d|1\d\d|\d{1,2})){3})|:))|(([0-9A-F]{1,4}:){5}(((:[0-9A-F]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|\d{1,2})(\.(25[0-5]|2[0-4]\d|1\d\d|\d{1,2})){3})|:))|(([0-9A-F]{1,4}:){4}(((:[0-9A-F]{1,4}){1,3})|((:[0-9A-F]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|\d{1,2})(\.(25[0-5]|2[0-4]\d|1\d\d|\d{1,2})){3}))|:))|(([0-9A-F]{1,4}:){3}(((:[0-9A-F]{1,4}){1,4})|((:[0-9A-F]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|\d{1,2})(\.(25[0-5]|2[0-4]\d|1\d\d|\d{1,2})){3}))|:))|(([0-9A-F]{1,4}:){2}(((:[0-9A-F]{1,4}){1,5})|((:[0-9A-F]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|\d{1,2})(\.(25[0-5]|2[0-4]\d|1\d\d|\d{1,2})){3}))|:))|(([0-9A-F]{1,4}:){1}(((:[0-9A-F]{1,4}){1,6})|((:[0-9A-F]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|\d{1,2})(\.(25[0-5]|2[0-4]\d|1\d\d|\d{1,2})){3}))|:))|(:(((:[0-9A-F]{1,4}){1,7})|((:[0-9A-F]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|\d{1,2})(\.(25[0-5]|2[0-4]\d|1\d\d|\d{1,2})){3}))|:)))(%.+)?$/i,

    // url
    url: /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,

    // 银行卡号正则 非0开头，15至19位数字
    bankCard: /^[1-9]\d{14,18}$/,

    // 护照号 9位，包括首字母和数字；支持 普通护照(E*)、外交护照(DE)、公务护照(SE)、公务普通护照(PE)、香港特区护照(K/KJ)、澳门特区护照(MA)
    passport: /^((e[\da-z])|(de)|(se)|(pe)|(k[\da-z])|(kj)|(ma))[\da-z]{7}$/i,
}

export default patterns;