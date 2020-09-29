$(function () {
    echarts_1();
    echarts_2();
    echarts_3();
    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        const dom = document.getElementById('echart1');
        const myChart = echarts.init(dom);
        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '25px',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['0', '1', '2', '3', '4', '5', '6'],
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "dashed"
                    },
                },
                splitLine: { // 间隔线
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)",
                        type: "dotted"
                    }
                },
            }],
            series: [
                {
                    type: 'line',
                    data: [200, 300, 300, 900, 1500, 1200, 600],
                    barWidth: '35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    smooth: true, // 是否弧形
                    symbol: 'circle',
                    showSymbol: false,
                    lineStyle: {
                        color: 'rgba(255, 64, 12, 1)'
                    },
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(255, 64, 12, 1)' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#000' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                    areaStyle: {}
                }

            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        this.autoHeight = dom.parentNode.clientHeight // 35为我给每个柱状图的高度，50为柱状图x轴内容的高度(大概的)。
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' }
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '25px',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['09/21', '09/22', '09/23', '09/24', '09/25', '09/26', '09/27'],
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },

                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,1)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        type: "dotted"
                    }
                }
            }],
            series: [
                {
                    type: 'line',
                    data: [1500, 1200, 600, 200, 300, 300, 900],
                    barWidth: '35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            color: '#fff',
                            borderColor: "#fff",
                            borderWidth: 15,
                            lineStyle: {
                                color: 'rgba(255, 64, 12, 1)'
                            }
                        }
                    },
                    emphasis: {
                        itemStyle: {
                            color: '#fff',
                            borderColor: "rgba(255, 64, 12, 1)",
                            normal: {
                                borderWidth: 20,
                            }
                        }
                    }
                },
                {
                    type: 'bar',
                    data: [1500, 1500, 1500, 1500, 1500, 1500, 1500],
                    // barGap: 1, //柱子之间间距
                    barWidth: '75%', //柱子宽度
                    itemStyle: {
                        color: 'rgba(255, 64, 12, 0.2)',
                    },
                }

            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(document.getElementById('echart3'));
        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '0',
                containLabel: true
            },
            xAxis: [{
                type: 'value',
                splitLine: {
                    show: false
                }
            }],
            yAxis: [{
                type: 'category',
                data: ["08重大刑事", '07设毒人员', '06设恐人员', '05在逃人员', '04设稳人员', '03肇事人员', '02涉稳人员', '01重点上访'],
                axisLabel: {
                    //formatter: '{value} %'
                    show: false,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    interval: 0,
                    margin: 8,
                    padding: [0, 0, 0, 25],
                    textStyle: {
                        color: 'rgba(155, 155, 155, 1)',
                        align: 'right',
                        fontSize: 14
                    },
                    rich: {
                        a: {
                            color: '#fff',
                            width: 20,
                            backgroundColor: '#FF400C',
                            height: 20,
                            align: 'center',
                            borderRadius: 50
                        },
                        a1: {
                            color: '#FF400C',
                            height: 20,
                            align: 'center',
                            fontSize: 14
                        },
                        b: {
                            color: '#fff',
                            backgroundColor: '#F5A623',
                            width: 20,
                            height: 20,
                            align: 'center',
                            borderRadius: 50
                        },
                        b1: {
                            color: '#F5A623',
                            height: 20,
                            align: 'center',
                            fontSize: 14
                        },
                        c: {
                            color: '#fff',
                            width: 20,
                            backgroundColor: '#4A4A4A',
                            height: 20,
                            align: 'center',
                            borderRadius: 50
                        },
                        c1: {
                            color: '#fff',
                            height: 20,
                            align: 'center',
                            fontSize: 14
                        },
                        d: {
                            color: 'rgba(155, 155, 155, 1)',
                            width: 20,
                            height: 20,
                            align: 'center',
                            borderRadius: 2
                        },
                        img1: {
                            backgroundColor: {
                                image: 'images/lineImg.png'
                            },
                            width: 10,
                            height: 25,
                        }
                    },
                    formatter: function (params) {
                        if (parseInt(params.slice(1, 3)) <= 1) {
                            return [
                                '{a|' + (parseInt(params.slice(0, 2))) + '}' + '  ' + '{a1|' + params.slice(2) + '}' + '{img1|}'
                            ].join('\n')
                        } else if (parseInt(params.slice(1, 3)) <= 2) {
                            return [
                                '{b|' + (parseInt(params.slice(0, 2))) + '}' + '  ' + '{b1|' + params.slice(2) + '}' + '{img1|}'
                            ].join('\n')
                        } else if (parseInt(params.slice(1, 3)) <= 3) {
                            return [
                                '{c|' + (parseInt(params.slice(0, 2))) + '}' + '  ' + '{c1|' + params.slice(2) + '}' + '{img1|}'
                            ].join('\n')
                        } else {
                            return [
                                '{d|' + (parseInt(params.slice(0, 2))) + '}' + '  ' + params.slice(2) + '{img1|}'
                            ].join('\n')
                        }
                    }
                },
                splitLine: { // 间隔线
                    show: false,
                },
            }],
            series: [
                {
                    type: 'bar',
                    data: [20, 40, 60, 90, 200, 500, 800, 1130],
                    barWidth: "30%",
                    barGap: 0.5,//柱间距离
                    smooth: true, // 是否弧形
                    symbol: 'circle',
                    showSymbol: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            color: '#fff',
                        }
                    },
                    lineStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#ffffff' // 0% 处的颜色
                            }, {
                                offset: 0.5, color: '#5865FF' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#ffffff' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255, 247, 225, 1)',
                            barBorderRadius: 8
                        }
                    },
                },
                {
                    type: 'bar',
                    data: [10, 30, 50, 100, 100, 300, 700, 900],
                    barWidth: '30%', //柱子宽度
                    barGap: 0.5, //柱子之间间距
                    smooth: true, // 是否弧形
                    symbol: 'circle',
                    showSymbol: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            color: '#fff',
                        }
                    },
                    lineStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#ffffff' // 0% 处的颜色
                            }, {
                                offset: 0.5, color: '#5865FF' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#ffffff' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(245, 166, 35, 1)',
                            barBorderRadius: 8
                        }
                    },
                }

            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    $(document).ready(function () {
        var html = $(".wrap ul").html()
        $(".wrap ul").append(html)
        var ls = $(".wrap li").length / 2 + 1
        i = 0
        ref = setInterval(function () {
            i++
            if (i == ls) {
                i = 1
                $(".wrap ul").css({ marginTop: 0 })
                $(".wrap ul").animate({ marginTop: -'.52' * i + 'rem' }, 1000)
            }
            $(".wrap ul").animate({ marginTop: -'.52' * i + 'rem' }, 1000)
        }, 2400);
        var html2 = $(".adduser ul").html()
        $(".adduser ul").append(html2)
        var ls2 = $(".adduser li").length / 2 + 1
        a = 0
        ref = setInterval(function () {
            a++
            if (a == ls2) {
                a = 1
                $(".adduser ul").css({ marginTop: 0 })
                $(".adduser ul").animate({ marginTop: -'.5' * a + 'rem' }, 800)
            }
            $(".adduser ul").animate({ marginTop: -'.5' * a + 'rem' }, 800)
        }, 4300);
    })

})