import React, {Component} from 'react';

// import {a,b,fn,obj} from "./line.js";
// import obj from "./line.js";
import {option} from "./line.js";


class Line extends Component {
    componentDidMount() {
        let echarts = this.props.echarts;
        let element = this.refs.line
        let myChart = echarts.init(element);
        myChart.setOption(option);
        //console.log(a,b,fn,obj)
        //console.log(obj)
        window.onresize = function () {
            myChart.resize();
        };
    }

    render() {

        return (
            <div ref='line'></div>
        );
    }
}

export default Line;