import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./index.scss";
class ScareBuy extends Component {
    render() {
        return (
            <div className={'scarebuy pd20'}>
                {/*抢购*/}
                <Link to={'/scarebuy/sub1'}>
                    <img src={require('../../static/img/scarebuy/1.png')} alt=""/>
                </Link>
                <Link to={'/scarebuy/sub2'}>
                    <img src={require('../../static/img/scarebuy/2.png')} alt=""/>
                </Link>
            </div>
        );
    }
}

export default ScareBuy;