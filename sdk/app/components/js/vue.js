/*
 * @require ../../server/author.js
 */
/************  vue  ************/

var imgAlipay = __inline('../public/yhklogo.png');
var imgArrowRight = __inline('../public/arrow.png');
var imgCard = __inline('../public/zfblogo.png');
var imgEmpty = __inline('../public/konglogo.png');
var imgLogo = __inline('../public/jbylogo_58px.png');
var imgWechat = __inline('../public/wxlogo.png');

var yhtml5Data = {
    appId: 000001,
    imgLogo: imgLogo,
    imgEmpty: imgEmpty,
    imgArrowRight: imgArrowRight,
    name: '测试商品',
    money: '$55.00',
    channels: [
        {
            img: imgAlipay,
            name: '支付宝',
            text: '推荐支付宝用户'
        },
        {
            img: imgWechat,
            name: '微信',
            text: '推荐微信用户'
        },
        {
            img: imgCard,
            name: '信用卡',
            text: '推荐使用信用卡'
        }
    ],
    copyright: '该服务由聚宝云计费提供',
    tel: '如果支付问题请拨打 0571-86800282'
}
var yhtml5VM = new Vue({
    el: '#yhtml5',
    data: yhtml5Data,
    methods: {
        openChannel: function ($index) {
            this.index=$index;
            console.log(yhtml5Data.channels[$index].name)
        },
        isList: function isList() {
            if (yhtml5Data.channels === '') {
                yhtml5Data.isList = false
            } else {
                yhtml5Data.isList = true
            }
            return isList
        }
    }
});
yhtml5VM.isList()
