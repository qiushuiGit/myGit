import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

import './index.css'

class NavLeft extends Component {
    render() {
        return (
            <div className='navLeft'>
                <ul>
                    <li><NavLink exact to='/'>首页</NavLink></li>
                    <li><NavLink to='/line'>折线图</NavLink></li>
                    <li><NavLink to='/sunburst'>旭日图</NavLink></li>
                    <li><NavLink to='/pie'>饼图</NavLink></li>
                    <li><NavLink to='/map'>地图</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default NavLeft;
