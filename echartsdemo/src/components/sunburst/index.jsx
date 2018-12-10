import React, {Component} from 'react';
import sunData from './sunburst.js'

class Sunburst extends Component {
    componentDidMount() {
        let element = this.refs.sunburst
        let echarts = this.props.echarts
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(element);

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(sunData);

        window.onresize = function () {
            myChart.resize();
        };
    }

    render() {
        return (
            <div ref={'sunburst'}></div>
        );
    }
}

export default Sunburst;