/**
 * Created by jing on 2017/12/6.
 */


var piem = 0,
    pieWt = 300,
    pieHt = 300 ,
    radius = 150,
    innerRadius = 25,
    outerRadius = 150;
// colors = d3.scale.category20();
//colors
let colors = d3.scale.ordinal()
    .range(['#E6CAFF', '#FFC1E0', '#ACD6FF', '#FFBD9D', '#1AFD9C', '#CDCD9A']);

var piedata = [
    {
        label: '官網',
        value: 65
    },{
        label: 'Agoda',
        value: 48
    },{
        label: 'Booking',
        value: 59
    },{
        label: 'Expedia',
        value: 39
    },{
        label: 'CTP',
        value: 39
    },{
        label: 'GTA',
        value: 39
    }
]

// 呼叫 d3 layout的api 其中一個叫pie，回傳他的值
// https://scarletsky.github.io/2015/01/04/d3js-learning-2/
var pie = d3.layout.pie()
    .value(function(d) {return d.value; })
    .sort(null)
    .padAngle(.01)

// svg.arc 弧形產生器
// innerRadius ＝＝ 內圈 , outerRadius ＝＝ 外圈
// var arc = d3.svg.arc().outerRadius(radius)
var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)

//  append 的指令在最後面放入物件或元素
//  attr 設定或取得選擇集的屬性
//  g 群組化
//  enter http://www.oxxostudio.tw/articles/201509/svg-d3-18-enter-update-exit.html
// 產生出 <path d = "">

var myChard = d3.select('.chart').append('svg')
    .attr('width',pieWt)
    .attr('height',pieHt)
    .append('g')
    .attr('transform', 'translate('+ (pieWt/2) +', '+ (pieHt/2) +')')
    .selectAll('path').data(pie(piedata))
    .enter().append('g')
    .attr('class','slice')

// 暫時 第二個pie
var myChard2 = d3.select('.chart2').append('svg')
    .attr('width',pieWt)
    .attr('height',pieHt)
    .append('g')
    .attr('transform', 'translate('+ (pieWt/2) +', '+ (pieHt/2) +')')
    .selectAll('path').data(pie(piedata))
    .enter().append('g')
    .attr('class','slice')

var slices = d3.selectAll('g.slice')
    .append('path')
    .attr('fill',function(d,i){
        return colors(i);
    })
    .attr('d',arc)
    .on('mouseover',function(){
        d3.select(this)
            .style('opacity',0.8)
    })
    .on('mouseout', function() {
        d3.select(this)
            .style('opacity', 1)
    })

// 動態展現圖表
slices.transition()
    .duration(1000)
    .attrTween('d', function(d) {
        var interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
        return function(t) {
            return arc(interpolate(t));
        };
    });


var text = d3.selectAll('g.slice')
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('fill', '#4b4b4b')
    .attr('transform', function(d) {
        d.innerRadius = innerRadius;
        d.outerRadius = outerRadius;
        return 'translate('+arc.centroid(d)+')';//puts text at center of slice
    })
    .append('tspan')
    .text(function(d) { return d.data.label + '('+ d.data.value + ')'; }) //slice = d, so we the slice's data.


var aspect = pieWt / pieHt,
    chart = d3.select('.chart');
d3.select(window)
    .on("resize", function() {
        // alert(chart.node().getBoundingClientRect().width);
        var targetWidth = chart.node().getBoundingClientRect().width;
        chart.attr("width", targetWidth);
        chart.attr("height", targetWidth / aspect);
    });