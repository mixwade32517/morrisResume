// 注意複製時標點符號都不能少，少了會壞掉
// 每次倒數計時的目標時間，格式為"[年,月,日 (時:分:秒)],"(小於10請不要加0，e.g. 10月9日請輸入[2018,10,9]，輸入[2018,10,09]會壞掉。半型空格後選填24小時制的時、分、秒可精確到控制切換時間，不輸入時分秒則以00:00為切換時間)
// 請注意每個標點符號都要有，少了會壞掉！

// 倒數計時＆商品
var breakTime = [
  // 活動開始時間，需要新增插在這句後面，日期不能相同
  ["2019/11/1"],
  ["2019/11/2 00:00:00"],
  ["2019/11/3 12:56:30"],
  ["2019/11/4 15:56:40"],
  ["2019/11/5 15:56:50"],
  // 活動結束時間，需要新增插在這句前面
];
var productData = [
  // 每次顯示三品，final輪(最後一輪顯示後)全露出。
  // 需要複製請連著"{},"整個區塊複製，限28中文字。
  // 第一輪露出
  [
    {
      'link': 'https://www.etmall.com.tw/i/6211286',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
      'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子',
      'price': '1',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1917049',
      'productImg': 'https://media.etmall.com.tw/NXimg/001917/1917049/1917049-1_XXL.jpg',
      'name': 'TIGER 虎牌300cc 不鏽鋼彈蓋式保溫保冷杯',
      'price': '2',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '3',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '4',
    },
  ],
  // 第二輪露出
  [
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '5',
    },
    {
      'link': 'https://www.etmall.com.tw/i/6211286',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
      'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子鍋',
      'price': '6',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '7',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1917049',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001917/1917049/1917049-1_XXL.jpg',
      'name': 'TIGER 虎牌300cc 不鏽鋼彈蓋式保溫保冷杯',
      'price': '8',
    },
  ],
  // 第三輪露出
  [
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '9',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '10',
    },
  ],
  // 第四輪露出
  [
    {
      'link': 'https://www.etmall.com.tw/i/6211286',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
      'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子鍋',
      'price': '11',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1917049',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001917/1917049/1917049-1_XXL.jpg',
      'name': 'TIGER 虎牌300cc 不鏽鋼彈蓋式保溫保冷杯',
      'price': '12',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '13',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '14',
    },
    {
      'link': 'https://www.etmall.com.tw/i/6211286',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
      'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子鍋',
      'price': '15',
    },
  ],
  // 第五輪露出
  [
    {
      'link': 'https://www.etmall.com.tw/i/6211286',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
      'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子鍋',
      'price': '10',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1917049',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001917/1917049/1917049-1_XXL.jpg',
      'name': 'TIGER 虎牌300cc 不鏽鋼彈蓋式保溫保冷杯',
      'price': '11',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '12',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '13',
    },
    {
      'link': 'https://www.etmall.com.tw/i/6211286',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/006211/6211286/6211286-1_XXL.jpg',
      'name': 'TIGER虎牌 日本製頂級款6人份壓力炊飯電子鍋份壓力炊飯電子鍋',
      'price': '14',
    },
    {
      'link': 'https://www.etmall.com.tw/i/1896888',
      'appLink': 'aaa',
      'productImg': 'https://media.etmall.com.tw/NXimg/001896/1896888/1896888-1_XXL.jpg',
      'name': 'Northern北方電子式葉片恆溫電暖爐12葉片',
      'price': '15',
    },
  ],
];