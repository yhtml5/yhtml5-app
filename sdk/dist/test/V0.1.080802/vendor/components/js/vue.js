/*
 * @require server/author.js
 */
/************  vue  ************/

var imgAlipay = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAmCAMAAAEkfRPhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFJ4a9AAAAbnBfNAAAAAJ0Uk5T/wDltzBKAAAAkklEQVR42mJgZMADEJIAAYRLAF0YIIAwZFAAWCUjdmUYYgABRAJCswRdkoGgjYwM+O0HCCDquAwtMPDJETIVV0Di8CkjPtcR0A8QQIMFkRWSDGSHMd7AZ8SeqvBIkRL2jDgNIUsTpQAgwEYRsVmavMxO/SRKgd/gRSPx1kNLdhJ10SF26GEVoQoQnwMHJHzI0QMArKYBe945Tv8AAAAASUVORK5CYII=';
var imgCard = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAAGFodtPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFNLzjAAAAK3H3twAAAAJ0Uk5T/wDltzBKAAABDUlEQVR42mJgZIADRjQaIcAIJhiRpAACiAFTG4LLCNeCEAYIIKwIWQEjGMDFkTgwlYzo5gEEEIrV2O1iJI6HbDlGaKDLwfkwAspHczIuABBAVECMWEKWEQ3gliTSUIRyNBlGnMGGGqIMKDZC1SFrQI5wPA4jHK/IACCAcEsx0j1OyJTCG5W4DcSjh5j4ZyA9aWBJG/CcwIghg6YbT0ZEyDKimoySoNBdh5BDTlYYmRaL41DTIV2TDZpdAAFGjm30dCCVcwxpmZ4UTYwEADm6iHUeKT4h0x6qBCNRriPWIjICDrOIIKgJhzh+ncToweJb/EGNXSeugheHvZjm4vM+ugzRyYb09DFUShDSdQAA+qcCbdn16oQAAAAASUVORK5CYII=';
var imgWechat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAF6ePCOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFTroGAAAA7ymdugAAAAJ0Uk5T/wDltzBKAAABPElEQVR42mJgZAABRigGUYwQFiMIwBhwKZgqgACC00jaoHrAiuB6YcoAAgihAcZnRBgM4yAsYkSVR+NBAUAAIZuJJsmIIYhmH9yfcK/CZBnhtiNLMiACA4vLUKxhwAsYAQKIgRG3FCGAYTuyBBKBTQumRiRR7N5CkkXxGJoeFH2Yuon2BEb04QlD7LqBwgABhEOKESm+SQ93QlFCQlThDhpEusMST9CUhaYLd+QyokcuLj0YuRCbFEpKYIC7BptFDHjNw+0I9OIETyjhywQEooOBgeppgBFPIsWRYgACFFvmSACAIAwk//+0ljhDDKGBysI1HIIG5Jioutu+mbFhfN60gA4HZoool0KE433HBuF/D6gIqas0xBvxqKTBp6R4tXhUbQb5q4BB+icVi/CJugBWSy21NAYETEfv/gO+ogPEDzMjOQAAAABJRU5ErkJggg==';

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
        copyright: '该服务由聚宝云计费提供',
        tel: '如果支付问题请拨打 0571-86800282'
    }
})