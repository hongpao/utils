/**
 * Created by hongpao on 2018/11/28.
 */

class IsEmpty {
    isEmpty(v) {
        //获取准确的数据类型
        let type = Object.prototype.toString.call(v)

        // null 和 undefined 是 "空的"
        if (type === '[object Null]' || type === '[object Undefined]') {
            return true
        }

        //对象类型
        if (type === '[object Object]') {
            return Object.keys(v).length === 0
        }

        //数组类型 【tip】只判断一维数组
        if (type === '[object Array]') {
            return v.length === 0
        }

        //字符串，去空格后判断
        if (type === '[object String]') {
            return v.trim().length === 0
        }

        /**
         * 如果类型为数字类型
         * 1. 如果是 NaN  看为空
         * 2. ===0 不为空
         */
        if (type === '[object Number]') {
            return isNaN(v)
        }

        //布尔值不可能为空, false 也不是空
        if (type === '[object Boolean]') {
            return false
        }

        /*
        * 其余类型（function、date、RegExp），不存在判断空值的意义，所以一律返回true
        * */
        return true
    }
}

let isEmpty = new IsEmpty()