import React, {Component} from 'react';
import './index.css'
import '../../static/fonts/iconfont.css'
class NavTop extends Component {
    render() {
        return (
            <div className='navTop'>
                <ul>
                    <li><a href="javascript:;" className='active'>TZ-追梦</a></li>
                    <li><a href="javascript:;" className="icon iconfont icon-qing"></a></li>
                    <li><a href="javascript:;" className="icon iconfont icon-tianqi1"></a></li>
                    <li><a href="javascript:;" className="icon iconfont icon-qing1"></a></li>
                    <li><a href="javascript:;" className="icon iconfont icon-huiyuan"></a></li>
                </ul>
            </div>
        );
    }
}

export default NavTop;