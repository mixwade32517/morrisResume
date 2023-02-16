// 注意複製時標點符號都不能少，少了會壞掉
// 每次倒數計時的目標時間，格式為"[年,月,日 (時:分:秒)],"(小於10請不要加0，e.g. 10月9日請輸入[2018,10,9]，輸入[2018,10,09]會壞掉。半型空格後選填24小時制的時、分、秒可精確到控制切換時間，不輸入時分秒則以00:00為切換時間)
// 請注意每個標點符號都要有，少了會壞掉！

// 倒數計時＆商品
var linkTime = [
    // 活動開始時間，需要新增插在這句後面，日期不能相同
    // 12/02

    ["2019/12/02 12:12:00"],
    ["2019/12/02 15:12:00"],
    ["2019/12/02 19:12:00"],
    ["2019/12/02 23:12:00"],
    // 12/03
    ["2019/12/03 12:12:00"],
    ["2019/12/03 15:12:00"],
    ["2019/12/03 19:12:00"],
    ["2019/12/03 23:12:00"],
    // 12/04
    ["2019/12/04 12:12:00"],
    ["2019/12/04 15:12:00"],
    ["2019/12/04 19:12:00"],
    ["2019/12/04 23:12:00"],
    // 12/05
    ["2019/12/05 12:12:00"],
    ["2019/12/05 15:12:00"],
    ["2019/12/05 19:12:00"],
    ["2019/12/05 23:12:00"],
    // 12/06
    ["2019/12/06 12:12:00"],
    ["2019/12/06 15:12:00"],
    ["2019/12/06 19:12:00"],
    ["2019/12/06 23:12:00"],
    // 12/07
    ["2019/12/07 12:12:00"],
    ["2019/12/07 15:12:00"],
    ["2019/12/07 19:12:00"],
    ["2019/12/07 23:12:00"],
    // 12/08
    ["2019/12/08 12:12:00"],
    ["2019/12/08 15:12:00"],
    ["2019/12/08 19:12:00"],
    ["2019/12/08 23:12:00"],
    // 12/09
    ["2019/12/09 12:12:00"],
    ["2019/12/09 15:12:00"],
    ["2019/12/09 19:12:00"],
    ["2019/12/09 23:12:00"],
    // 12/10
    ["2019/12/10 12:12:00"],
    ["2019/12/10 15:12:00"],
    ["2019/12/10 19:12:00"],
    ["2019/12/10 23:12:00"],
    // 12/11
    ["2019/12/11 12:12:00"],
    ["2019/12/11 15:12:00"],
    ["2019/12/11 19:12:00"],
    ["2019/12/11 23:12:00"],
    // 12/12
    ["2019/12/12 12:12:00"],
    ["2019/12/12 15:12:00"],
    ["2019/12/12 19:12:00"],
    ["2019/12/12 23:12:00"],

    // 活動結束時間，需要新增插在這句前面
];
var linkData = [
    // 每次顯示三品，final輪(最後一輪顯示後)全露出。
    // 需要複製請連著"{},"整個區塊複製，限28中文字。
    // 第一輪露出
    // 12/02
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/50',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/50',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F50&t=1202%2012%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/51',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/51',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F51&t=1202%2015%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/52',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/52',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F52&t=1202%2019%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/53',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/53',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F53&t=1202%2023%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    // 12/03
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/54',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/54',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F54&t=1203%2012%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/55',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/55',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F55&t=1203%2015%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/56',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/56',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F56&t=1203%2019%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/57',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/57',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F57&t=1203%2023%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    // 12/04
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/58',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/58',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F58&t=1204%2012%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/59',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/59',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F59&t=1204%2015%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/60',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/60',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F60&t=1204%2019%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/61',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/61',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F61&t=1204%2023%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    // 12/05
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/62',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/62',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F62&t=1205%2012%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/63',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/63',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F63&t=1205%2015%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/64',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/64',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F64&t=1205%2019%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/65',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/65',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F65&t=1205%2023%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    // 12/06
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/66',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/66',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F66&t=1206%2012%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/67',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/67',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F67&t=1206%2015%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/68',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/68',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F68&t=1206%2019%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/69',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/69',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F69&t=1206%2023%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    // 12/07
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/70',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/70',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F70&t=1207%2012%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/71',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/71',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F71&t=1207%2015%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/72',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/72',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F72&t=1207%2019%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/73',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/73',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F73&t=1207%2023%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    // 12/08
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/74',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/74',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F74&t=1208%2012%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/75',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/75',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F75&t=1208%2015%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/76',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/76',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F76&t=1208%2019%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/77',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/77',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F77&t=1208%2023%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    // 12/09
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/78',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/78',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F78&t=1209%2012%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/79',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/79',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F79&t=1209%2015%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/80',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/80',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F80&t=1209%2019%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/81',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/81',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F81&t=1209%2023%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    // 12/10
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/82',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/82',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F82&t=1210%2012%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/83',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/83',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F83&t=1210%2015%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/84',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/84',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F84&t=1210%2019%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/85',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/85',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F85&t=1210%2023%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    // 12/11
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/86',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/86',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F86&t=1211%2012%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/87',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/87',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F87&t=1211%2015%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/88',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/88',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F88&t=1211%2019%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/89',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/89',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F89&t=1211%2023%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    // 12/12
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/90',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/90',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F90&t=1212%2012%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/91',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/91',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F91&t=1212%2015%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/92',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/92',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F92&t=1212%2019%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
    {
        'webLink': 'https://www.etmall.com.tw/Activity/CouponPage/93',
        'mobileLink': 'https://www.etmall.com.tw/Activity/CouponPage/92',
        'appLink': 'etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponPage%2F93&t=1212%2023%3A12%20%E4%B8%80%E9%8D%B5%E5%85%A8%E9%A0%98',
    },
];