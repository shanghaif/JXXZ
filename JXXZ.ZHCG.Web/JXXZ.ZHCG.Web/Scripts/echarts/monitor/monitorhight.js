﻿// 基于准备好的dom，初始化echarts实例
var monitorPiehightChart = echarts.init(document.getElementById('hightcity'));

// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['#2AACAF', '#4FC877'],
    series: [
        {
            name: '高照街道',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                //emphasis: {
                //    show: true,
                //    textStyle: {
                //        fontSize: '30',
                //        fontWeight: 'bold'
                //    }
                //}
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: '球机' },
                { value: 310, name: '枪机' },
            ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
monitorPiehightChart.setOption(option);