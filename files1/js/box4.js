// var dom = document.getElementById("box4");
// var myChart = echarts.init(dom);
// var app = {};
// option = null;
// option = {
//     //  backgroundColor: '#00265f',
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'shadow'
//         }
//     },
//     grid: {
//         left: '0%',
//         top: '10px',
//         right: '0%',
//         bottom: '25px',
//         containLabel: true
//     },
//     xAxis: [{
//         type: 'category',
//         data: ['商超门店', '教育培训', '房地产', '生活服务', '汽车销售', '旅游酒店', '五金建材'],
//         axisLine: {
//             show: false,
//             lineStyle: {
//                 color: "rgba(255,255,255,.1)",
//                 width: 1,
//                 type: "solid"
//             },
//         },
//         axisTick: {
//             show: false,
//         },
//         axisLabel: {
//             interval: 0,
//             // rotate:50,
//             show: true,
//             splitNumber: 15,
//             textStyle: {
//                 color: "rgba(255,255,255,.6)",
//                 fontSize: '12',
//             },
//         },
//     }],
//     yAxis: [{
//         type: 'value',
//         axisLabel: {
//             //formatter: '{value} %'
//             show: true,
//             textStyle: {
//                 color: "rgba(255,255,255,.6)",
//                 fontSize: '12',
//             },
//         },
//         axisTick: {
//             show: false,
//         },
//         axisLine: {
//             show: false,
//             lineStyle: {
//                 color: "rgba(255,255,255,.1	)",
//                 width: 1,
//                 type: "solid"
//             },
//         },
//         splitLine: { // 间隔线
//             show: true,
//             lineStyle: {
//                 color: "rgba(255,255,255,0.1)",
//             }
//         },
//     }],
//     series: [
//         {
//             type: 'line',
//             data: [200, 300, 300, 900, 1500, 1200, 600],
//             barWidth: '35%', //柱子宽度
//             // barGap: 1, //柱子之间间距
//             smooth: true, // 是否弧形
//             symbol: 'circle',
//             showSymbol: false,
//             lineStyle: {
//                 color: {
//                     type: 'linear',
//                     x: 0,
//                     y: 0,
//                     x2: 1,
//                     y2: 1,
//                     colorStops: [{
//                         offset: 0, color: '#ffffff' // 0% 处的颜色
//                     }, {
//                         offset: 0.5, color: '#5865FF' // 0% 处的颜色
//                     }, {
//                         offset: 1, color: '#ffffff' // 100% 处的颜色
//                     }],
//                     global: false // 缺省为 false
//                 }
//             },
//             itemStyle: {
//                 color: {
//                     type: 'linear',
//                     x: 0,
//                     y: 0,
//                     x2: 0,
//                     y2: 1,
//                     colorStops: [{
//                         offset: 0, color: '#1CD8D2' // 0% 处的颜色
//                     }, {
//                         offset: 1, color: '#ffffff' // 100% 处的颜色
//                     }],
//                     global: false // 缺省为 false
//                 }
//             },
//             areaStyle: {}
//         }

//     ]
// };
// myChart.resize();
// window.addEventListener("resize", function () {
//     myChart.resize();
// });
// if (option && typeof option === "object") {
//     myChart.setOption(option, true);
// }