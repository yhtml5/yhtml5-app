/*
 * @require ../../server/author.js
 */
/************  vue  ************/

var imgAlipay = __inline('images/logo.gif');
var imgWechat = __inline('images/logo.gif');
var imgCard = __inline('images/logo.gif');
var imgArrowRight = __inline('images/logo.gif');

new Vue({
    el: '#yhtml5',
    data: {
        name: '测试商品',
        money: '$55.00',
        channels: [
            {
                img: imgAlipay,
                name: '支付宝',
                text: '推荐支付宝用户'
            }, {
                img: imgWechat,
                name: '微信',
                text: '推荐微信用户'
            }, {
                img: imgCard,
                name: '信用卡',
                text: '推荐使用信用卡'
            }],
        right: imgArrowRight,
        copyright: '该服务由聚宝云计费提供',
        tel: '如果支付问题请拨打 0571-86800282'
    }
})