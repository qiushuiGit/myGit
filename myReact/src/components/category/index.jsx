import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Carousel  } from 'antd';
import "./index.scss";

import Axios from "axios";

class CateGory extends Component {
    state = {
        category: []
    }
    componentDidMount() {
        Axios.get('http://47.99.201.114:6006/api/category')
            .then((res)=>{
                //console.log(res.data.data)
                this.setState({
                    category: res.data.data
                })
            })
    }
    render() {
        return (
            <div className={'category'}>
                {/*分类导航*/}
                <Carousel >
                    <div className={'item'}>
                        {
                            this.state.category.length>0 && this.state.category.map((item,index)=>{
                               if(index>=10){return false}
                               return(
                                    <Link key={item.id} to={`/category/list${index}`}>
                                        <img src={item.img} alt={item.title}/>
                                        <span>{item.title}</span>
                                    </Link>
                               )
                            })
                        }

                    </div>

                    <div className={'item'}>
                        {
                            this.state.category.length>0 && this.state.category.map((item,index)=>{
                                if(index<10){return false}
                                return(
                                    <Link key={item.id} to={`/category/list${index}`}>
                                        <img src={item.img} alt={item.title}/>
                                        <span>{item.title}</span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default CateGory;