
/**
 * @func 实现小于一万直接显示 大于一万保留一位小数 小数位为0不显示
 * @prames num
 * @return string
 * 1218807 =>  121.9 万
 */

 export const NumberFormat = (number:number):string => {
    if (number < 10000) {
        return String(number);
    } else {
        // 千位 进位后为 10 ，或者舍入后为 0 ，只显示万位
        if (Math.round((number % 10000) / 1000) == 0
            || Math.round((number % 10000) / 1000) == 10
        ) {
            return Math.round(number / 10000) + '万';
        } else {
            return (number / 10000).toFixed(1) + '万';
        }
    }
}