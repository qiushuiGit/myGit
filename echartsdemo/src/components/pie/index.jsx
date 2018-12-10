import React, { Component } from 'react'
import {option} from './pie'

class Pie extends Component {
    componentDidMount() {
        let element = this.refs.pie;
        let echarts = this.props.echarts;
        let myChart = echarts.init(element);
        myChart.setOption(option);
    }
    render () {
        return (
            <div ref='pie'>

            </div>
        )
    }
}

export default Pie
