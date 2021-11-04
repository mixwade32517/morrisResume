// 注意複製時標點符號都不能少，少了會壞掉
// 每次倒數計時的目標時間，格式為"[年,月,日 (時:分:秒)],"(小於10請不要加0，e.g. 10月9日請輸入[2018,10,9]，輸入[2018,10,09]會壞掉。半型空格後選填24小時制的時、分、秒可精確到控制切換時間，不輸入時分秒則以00:00為切換時間)
// 請注意每個標點符號都要有，少了會壞掉！

// 倒數計時＆商品

var brandBreakTime = [
  // 活動開始時間，需要新增插在這句後面，日期不能相同
  ["2019/12/9 10:00:00"],
  ["2019/12/10 10:00:00"],
  ["2019/12/11 10:00:00"],
  ["2019/12/12 10:00:00"],
  // 活動結束時間，需要新增插在這句前面
];
var brandData = [
  // 每次顯示三品，final輪(最後一輪顯示後)全露出。
  // 需要複製請連著"{},"整個區塊複製，限28中文字。
  // 第一輪露出
  [
    {
      'link': 'https://www.etmall.com.tw/Activity/CouponPage/96',
      'appLink': 'https://www.etmall.com.tw/Activity/CouponPage/96',
      'productImg': 'ticket1209-1-min.png',
      'name': '日本味王',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/CouponPage/97',
      'appLink': 'https://www.etmall.com.tw/Activity/CouponPage/97',
      'productImg': 'ticket1209-2-min.png',
      'name': 'HOYA case',
    },
    {
      'link': 'https://www.etmall.com.tw/Activity/CouponPage/98',
      'appLink': 'https://www.etmall.com.tw/Activity/CouponPage/98',
      'productImg': 'ticket1209-3-min.png',
      'name': 'HITACHI',
    },
  ],
  // 第二輪露出
  [
    {
        'link': 'https://www.etmall.com.tw/Activity/CouponPage/99',
        'appLink': 'https://www.etmall.com.tw/Activity/CouponPage/99',
        'productImg': 'ticket1210-1-min.png',
        'name': '夢素肌',
    },
    {
        'link': 'https://www.etmall.com.tw/Activity/CouponPage/100',
        'appLink': 'https://www.etmall.com.tw/Activity/CouponPage/100',
        'productImg': 'ticket1210-2-min.png',
        'name': 'Arowana',
    },
    {
        'link': 'https://www.etmall.com.tw/Activity/CouponPage/101',
        'appLink': 'https://www.etmall.com.tw/Activity/CouponPage/101',
        'productImg': 'ticket1210-3-min.png',
        'name': 'LG',
    },
  ],
  // 第三輪露出
  [
    {
        'link': 'https://www.etmall.com.tw/Activity/CouponPage/102',
        'appLink': 'https://www.etmall.com.tw/Activity/CouponPage/102',
        'productImg': 'ticket1211-1-min.png',
        'name': '佳麗寶',
    },
    {
        'link': 'https://www.etmall.com.tw/Activity/CouponPage/103',
        'appLink': 'https://www.etmall.com.tw/Activity/CouponPage/103',
        'productImg': 'ticket1211-2-min.png',
        'name': '白蘭/熊寶貝',
    },
    {
        'link': 'https://www.etmall.com.tw/Activity/CouponPage/104',
        'appLink': 'https://www.etmall.com.tw/Activity/CouponPage/104',
        'productImg': 'ticket1211-3-min.png',
        'name': 'ACER',
    },
  ],
  // 第四輪露出
  [
    {
        'link': 'https://www.etmall.com.tw/Activity/CouponPage/105',
        'appLink': 'https://www.etmall.com.tw/Activity/CouponPage/105',
        'productImg': 'ticket1212-1-min.png',
        'name': '歐舒丹',
    },
    {
        'link': 'https://www.etmall.com.tw/Activity/CouponPage/106',
        'appLink': 'https://www.etmall.com.tw/Activity/CouponPage/106',
        'productImg': 'ticket1212-2-min.png',
        'name': '漢來海港餐券',
    },
    {
        'link': 'https://www.etmall.com.tw/Activity/CouponPage/107',
        'appLink': 'https://www.etmall.com.tw/Activity/CouponPage/107',
        'productImg': 'ticket1212-3-min.png',
        'name': 'Dyson',
    },
  ],
];