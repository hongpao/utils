/**
 * Created by hongpao on 2018/11/18.
 */

class Time {

    /*
    * 时间格式化
    * Y-M-D（默认）
    * Y-M-D h:m:s
    * Y/M/D
    * Y/M/D h:m:s
    * W
    * h:m
    * */
    getTimes(options) {
        let time = options.time || ''
        let t
        if (time !== '') {
            t = new Date(parseInt(time))
        } else {
            t = new Date()
        }

        let Y = t.getFullYear()
        let M = this.getFull(t.getMonth() + 1)
        let D = this.getFull(t.getDate())
        let W = this.getWeek(t.getDay())
        let h = this.getFull(t.getHours())
        let m = this.getFull(t.getMinutes())
        let s = this.getFull(t.getSeconds())

        let T = options.style || 'Y-M-D'

        if (T.indexOf('Y') > -1) {
            T = T.replace('Y', Y)
        }
        if (T.indexOf('M') > -1) {
            T = T.replace('M', M)
        }
        if (T.indexOf('D') > -1) {
            T = T.replace('D', D)
        }
        if (T.indexOf('W') > -1) {
            T = T.replace('W', W)
        }
        if (T.indexOf('h') > -1) {
            T = T.replace('h', h)
        }
        if (T.indexOf('m') > -1) {
            T = T.replace('m', m)
        }
        if (T.indexOf('s') > -1) {
            T = T.replace('s', s)
        }

        return T
    }

    /*
    * 月日时分秒，位数补足
    * */
    getFull(v) {
        v = v.toString()
        return v[1] ? v : `0${v}`
    }

    /*
    * 根据时间获取星期
    * */
    getWeek(v) {
        v = parseInt(v)
        let weekAry = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        return weekAry[v]
    }
}

const time = new Time()

export default time