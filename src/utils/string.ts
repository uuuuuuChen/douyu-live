// 1. 工具函数
//   字符串相关的操作
/**
 * @func 格式化数字
 * @params  num: number
 * @return string
 * 1218807 =>  121.9 万
 */

export function formatTenThousand(num: number): string {
    const numStr = String(num)
    if (numStr.length <= 4) {
        return numStr
    }
    let wholeNumber = numStr.substring(0, numStr.length - 4)
    // console.log(wholeNumber)
    const thousands = numStr.substring(numStr.length - 4)
    // 通过首位(千位) 与 余位 得到的小数  toFixed(0) 会四舍五入
    let decimalNumber = Number(thousands.substring(0, 1) + "." + thousands.substring(1)).toFixed(0)   // toFixed(0) 不要小数点  四舍五入
    // console.log(decimalNumber)
    // 千位toFixed 进位后可能是10
    if (decimalNumber.length === 2) {
        decimalNumber = '0'
        // ts的类型迎合
        wholeNumber = String(Number(wholeNumber) + 1)
    }
    return `${wholeNumber}.${decimalNumber}万`
}