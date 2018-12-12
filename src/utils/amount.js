/**
 * Created by hongpao on 2018/11/17.
 */

class Amount {

  /*
   * 金额转换 分转元 （小数点默认保留2位数）
   * @param price 以分为单位的金额，默认是0
   * @param util 金额单位，默认为空
   * */
  fenToYuan(options) {
    let {
      price = 0, util = ''
    } = options
    let p = price.toString()
    let l = p.length

    let y = ''

    if (l > 2) {
      let s = p.substring(0, l - 2)
      let e = p.substring(l - 2)
      y = `${s}.${e}`

    } else if (l === 2) {
      y = `0.${p}`

    } else if (l === 1) {
      y = `0.0${p}`
    }

    return util + y
  }

  /*
   * 金额转换 元转分
   * @param price 以元为单位的金额，默认是0
   * */
  yuanTofen(price) {
    price = price || 0
    let f = ''

    //非0情况下才正常处理
    if (price) {
      //金额转化为字符串处理
      price = price.toString()

      //如果是正数，则改为两位小数
      if (!price.includes('.')) {
        price += '.00'
      }

      //分割正数与小数
      let pAry = price.split('.')

      //获取整数位
      f += parseInt(pAry[0]) ? pAry[0] : ''
      
      /**
       * 小数位如果小于等于2位，则直接拼接
       * 大于2位后，拼接为小数
       */
      if (pAry[1].length <= 2) {
        f += `${pAry[1]}0`.substr(0, 2)
      } else {
        f += `${pAry[1].substr(0, 2)}`
        f += `.${pAry[1].substring(2)}`
      }

      if (!price.includes('.')) {
        return parseInt(f)
      } else {
        return parseFloat(f)
      }
    } else {
      return 0
    }
  }
}

const amount = new Amount()

export default amount
