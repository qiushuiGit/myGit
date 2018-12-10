import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./index.scss";
import { Carousel  } from 'antd';
import Axios from "axios";

class Promotion extends Component {
    state = {
        // promotion: this.props.promotion
        promotion: []
    }
    componentDidMount() {
        Axios.get('http://47.99.201.114:6006/api/promotion')
            .then((res)=>{
                //console.log(res.data)
                this.setState({
                    promotion: res.data
                })
            })
    }
    render() {
        //console.log(this.state.promotion)
        return (
            <div className={'promotion pd20'}>
                {/*促销*/}
                <Carousel autoplay>

                        {
                            this.state.promotion.length>0 && this.state.promotion.map((item,index)=>{
                               return(
                                   <div className={'item'} key={index}>
                                       <Link  to={`/promotion/sub${index}`}>
                                           <img src={item.img} alt={item.id}/>
                                       </Link>
                                   </div>
                               )
                            })
                        }

                    {/*<div className={'item'}>*/}
                        {/*<Link to={'/promotion/sub5'}>*/}
                            {/*<img src={require('../../static/img/promotion/5.webp')} alt=""/>*/}
                        {/*</Link>*/}
                    {/*</div>*/}
                </Carousel>
            </div>
        );
    }
}

export default Promotion;