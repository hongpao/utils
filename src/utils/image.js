/**
 * Created by hongpao on 2018/12/5.
 * 关于图片的处理
 * @param options
 *
 */

import BASE_URL from '../http/baseUrl'
import Utils from './utils'

class ImageUtil {
    getSuffixName(imageUrl) {

        //图片地址
        imageUrl = imageUrl || '';

        //获取图片地址的后缀名
        let imageUrlAry = imageUrl.split('.');
        let lastIndex = imageUrlAry.length - 1;
        let suffixName = imageUrlAry[lastIndex];

        if (suffixName === 'png') {
            return 'jpg';
        } else {
            return suffixName;
        }
    }

    getImageUrl(options) {
        options = options || {}

        //需要处理的图片地址
        let imageUrl = options.imageUrl || ''

        //默认地址
        let defaultImageUrl = 'http://d.2dfire.com/file/images/menulist/default-large.png'

        if (!Utils.isEmpty(imageUrl)) {
            let subUrl = '';
            let index = 0;

            /**
             * 老图片地址的处理
             * http://rest3.zm1717.com/upload_files/00031985/menu/84d4ea26438063fcdf6162b41c79d932.png
             */
            let flagStr = "upload_files";
            if (imageUrl.indexOf(flagStr) > -1) {
                index = imageUrl.indexOf(flagStr) + flagStr.length + 1
                imageUrl = imageUrl.replace("_s", "") //TODO 存疑
                subUrl = imageUrl.substring(index)
            }

            /**
             * 新图片地址的处理
             * http://ifile.2dfire.com/00031985/menu/be4c0716b89e47869cc0d4b610d211e4.jpg
             */
            let newFlagStr = ['ifile.2dfire.com', 'ifiletest.2dfire.com', 'file1.2dfire.com'];
            newFlagStr.map((item) => {
                if (imageUrl.indexOf(item) > -1) {
                    index = imageUrl.indexOf(item) + item.length + 1;
                    subUrl = imageUrl.substring(index);
                }
            });

            //默认图片的宽高设置
            let width = options.width || 144;
            let height = options.height || 144;

            //有些图片不需要裁剪，要等比缩放
            let h = (height !== -1) ? ("_" + height + "h") : "";
            let h2 = (height !== -1) ? (",h_" + height) : ""; //新增

            // 新增分辨率判断
            let ratio = options.ratio || 2

            //图片质量
            let quality = options.quality || 80;

            //图片后缀名的判断
            let imgUrlArr = imageUrl.split('.');
            let l = imgUrlArr.length;

            //图片后缀名
            let suffixName = options.suffixName || imgUrlArr[l - 1];

            //图片是否支持webp格式
            let isWebpSupport = options.isWebpSupport || false;

            //gif图是否显示动图（默认否）
            let isShowGif = options.isShowGif || false;

            /**
             * gif图特殊处理（默认动图）
             * 其他图片判断是否支付webp
             */
            if (suffixName === 'gif') {
                if (!isShowGif) {
                    suffixName = isWebpSupport ? 'webp' : 'jpg';
                }
            } else {
                suffixName = isWebpSupport ? 'webp' : suffixName;
            }

            //完整地址拼接
            if (subUrl !== '') {
                imageUrl = `${BASE_URL.IMAGE_BASE_URL}${subUrl}@1e_${width}w${h}_1c_0i_0o_${quality}Q_${ratio}x.${suffixName}`;
            } else {
                imageUrl += `?x-oss-process=image/resize,m_fill,limit_0,w_${width}${h2}/quality,Q_${quality}/format,${suffixName}`;
            }

            return imageUrl;
        } else {
            return ''
        }
    }
}

const imageUtil = new ImageUtil()

export default imageUtil
