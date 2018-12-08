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

    if (price) {
      price = price.toString()
      if (!price.includes('.')) {
        price += '.00'
      }
      let pAry = price.split('.')
      f += parseInt(pAry[0]) ? pAry[0] : ''
      f += `${pAry[1]}00`.substr(0, 2)

      return parseInt(f)
    } else {
      return 0
    }
  }
}

const amount = new Amount()

export default amount
