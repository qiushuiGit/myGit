import React, {Component} from 'react';
import './index.css'

import Logo from '../logo'
import NavLeft from '../navleft'
import NavTop from "../navtop"


class Layout extends Component {
    render() {
        //console.log(this.props)
        return (
            <div id='main'>
                <div className='side'>
                    <div className='logo'>
                        <Logo></Logo>
                    </div>
                    <NavLeft></NavLeft>
                </div>

                <div className='con'>
                    <NavTop></NavTop>

                    <div className='navCon'>
                        {this.props.children}
                    </div>
                </div>

            </div>
        );
    }
}

export default Layout;