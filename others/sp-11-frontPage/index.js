'use strict';

var anchors = [].slice.call(document.querySelector(".anchors").firstElementChild.children);
var listeners = ['init', 'update', 'scroll.before', 'scroll.start', 'scroll', 'scroll.end'];
var list = document.getElementById("listeners");

var pageInfo = document.getElementById("nextPage");
var scrollDownBtn = document.querySelector(".btn__scroll__down");

function pageableInit() {
    var pageable = new Pageable("main", {
        animation: 200,
        delay: 950,
        orientation: "vertical", // or horizontal
        onInit: initScrollButton,
        onBeforeStart: function () {
            this.pages.forEach(function (page, i) {
                duration_animation();
            });

            if (this.pages[this.index].id === 'page-10') {
                setTimeout(function () {
                    scrollDownBtn.style.display = 'none';
                }, 1000);
            }
            else if (this.pages[this.index].id === 'page-1') {
                setTimeout(function () {
                    scrollDownBtn.classList.add('first__scroll');
                }, 1000);
            }
            else if (this.pages[this.index].id === 'page-11') {
                setTimeout(initBuild, 1500);
            }
            else {
                setTimeout(function () {
                    scrollDownBtn.classList.remove('first__scroll');
                    scrollDownBtn.style.display = 'block';
                }, 1000);
            }

        },
        onFinish: update,
        events: {
            mouse: false
        },
    });
}
pageableInit();

// judge app | not app
function initBuild() {
    // app-view | web-view
    var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);

    // is app
    if (isUiWebview) {
        window.location.href = 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201911%2fSP_1113911%2fm%2fapp.html&t=%e9%9b%9911%e6%9a%96%e8%ba%ab%e6%85%b6%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2';
    }
    // not app
    else {
        window.location.href = 'https://www.etmall.com.tw/XML/content/DMSetting/Final/201911/SP_1113911/w/index.html';
    }

}
function initScrollButton(data) {
    // do something when scrolling starts
    var that = this;
    if (that.pages[that.index].id === 'page-10') {
        scrollDownBtn.style.display = 'none';
    }
    else if (that.pages[that.index].id === 'page-1') {
        scrollDownBtn.classList.add('first__scroll');
    }
    else if (this.pages[this.index].id === 'page-11') {
        setTimeout(initBuild, 1000);
    }
    else {
        scrollDownBtn.classList.remove('first__scroll');
        scrollDownBtn.style.display = 'block';
    }
}
function update(data) {
    var that = this;
    anchors.forEach(function (anchor, i) {
        anchor.firstElementChild.classList.toggle("active", i === that.index);
    });
}

// 過場動效
function duration_animation() {
    var $wrapper = $('.wrapper');
    var $square = $('.square');
    var $body = $('body');
    var $main = $('.pg-wrapper');

    var $windowHeight = window.innerHeight;
    var $windowWidth = window.innerWidth;

    var pgWrapper = document.querySelector('.pg-wrapper');
    // doucment --> pgWrapper 電梯可以轉動
    pgWrapper.ontouchmove = function (event) {
        event.preventDefault();
    }


    /*
     // CLICK METHODS
     */
    //Start the epicness of battling...... a present!
    var battle = false;
    var $overlay = $('.overlay');
    var $pixel = $('.main-container .pixel');
    var smallScreen = $windowWidth <= 768;
    var medScreen = $windowWidth > 768 && $windowWidth <= 1024;
    //For some reason body click wouldn't work on iPad so I had to make an overlay.. stupid freakin iPads
    function is__battle() {
        if (battle === false) {
            var battleTimeline = new TimelineMax({
                delay: 0,
            });
            battleTimeline
                .set($overlay, {
                    css: {
                        display: 'none'
                    }
                })
                .set($square, {
                    css: {
                        display: 'block'
                    }
                })
                .set($wrapper, {
                    css: {
                        display: 'block'
                    }
                })
                .to($wrapper, 0.2, {
                    autoAlpha: 0.7
                }, 0)
                .to($wrapper, 0.2, {
                    autoAlpha: 0.2
                })
                .to($wrapper, 0.2, {
                    autoAlpha: 0.7
                })
                .to($wrapper, 0.5, {
                    autoAlpha: 0.2,
                    onUpdate: battleBlackScreen,
                })
                .set($square, {
                    css: {
                        // 設定結束後的顏色，原本在set wrapper後面
                        backgroundColor: '#000',
                        zIndex: '0',
                    }
                })
                .to($wrapper, 1, {
                    autoAlpha: 0
                })
                .set($wrapper, {
                    autoAlpha: 0
                }, '+=1')

            setTimeout(function () {
                battleTimeline
                    .set($square, {
                        css: {
                            display: 'none'
                        }
                    })
                    .set($wrapper, {
                        css: {
                            display: 'none',
                            visibility: 'visible'
                        }
                    })
                    .to($wrapper, 0.2, {
                        autoAlpha: 0
                    }, 0)
                    .to($square, 0.2, {
                        autoAlpha: 0,
                    })
                    .set($square, {
                        css: {
                            // 設定結束後的顏色
                            backgroundColor: '#000',
                            zIndex: '',
                        }
                    })
            }, 0);
        }
    }

    is__battle();


    /*
     // FUNCTIONS
     */
    //Making the sequence random also makes it easier.
    function battleBlackScreen() {
        var blackBattle = new TimelineMax();
        var $shuffledArray = Shuffle($square);
        for (var i = 0; i < $square.length; i++) {

            blackBattle.to($shuffledArray[i], 0.03, {
                autoAlpha: 1
            });
        }
        ;
    };

    //Shuffle array function/technique by Chris Coyier at: https://css-tricks.com/snippets/javascript/shuffle-array/

    function Shuffle(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    function randomNumber(num1, num2) {
        var time = Math.floor((Math.random() * num1) + num2);
        return time;
    };

}

$(window).resize(function () {
    androidError();
})
function androidError() {
    var $winWt = $(window).width();
    var isAndroidview = navigator.userAgent.match(/android/i);
    if ($winWt <= 425 || isAndroidview) {
        console.log($winWt);
        var $section = $("section");
        var $pgWrapper = $(".pg-wrapper");

        $section.css({
            width: $(window).width(),
            height: $(window).height()
        });
        $pgWrapper.css({
            width: $(window).width(),
            height: $(window).height()
        });
    }
}
androidError();