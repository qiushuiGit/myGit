import React, {Component} from 'react';

import './index.scss'
import GoodsList from "../../goodsList";
import Menu from "../../recommend/menu";
import Arrow from "../../back";

import Axios from "axios";

class CategoryList extends Component {
    state = {
        list: [],
        cate: ['美食','地方菜系','商超便利','签到红包','果蔬生鲜','新鲜水果','娇艳鲜花','夜宵','特色小吃','医学健康','麻辣烫']
        //cate: []
    }

    componentDidMount() {
        //const id = this.props.match.params.id;
        Axios.get('http://47.99.201.114:6006/api/shop')
            .then((res)=>{
                this.setState({
                    list: res.data.data
                })
            })
    }
    getCate = ()=>{

        const id = this.props.match.params.id;
        return this.state.cate[id];
    }
    loadMoreFn = ()=>{

        // const id = this.props.match.params.id;
        const list = this.state.list;
        Axios.get('http://47.99.201.114:6006/api/shop').then((res)=>{
            // console.log(res.data.data)
            this.setState({
                list: list.concat(res.data.data)
            })
        })
    }
    render() {

        return (
            <div className={'categorylist'}>
                 <div className={'hd'}>
                     <div className={'head'}>
                         <Arrow></Arrow>
                         {/*<div className={'back iconfont icon-arrow1'}></div>*/}
                         <div className={'title'}>{this.getCate()}</div>
                     </div>
                     <div className={'navTop'}>
                         <div className={'list'}>
                             <ul>
                                 <li>
                                     <a href="/" className={'active'}>
                                         全部
                                     </a>
                                 </li>
                                 <li>
                                     <a href="/" >
                                         简餐便当
                                     </a>
                                 </li>
                                 <li>
                                     <a href="/">小吃炸串</a>
                                 </li>
                                 <li>
                                     <a href="/">
                                         面食粥点
                                     </a>

                                 </li>
                                 <li>
                                     <a href="/">
                                         地方菜系
                                     </a>
                                 </li>
                                 <li>
                                     <a href="/">
                                         汉堡披萨
                                     </a>
                                 </li>
                                 <li><a href="/">
                                     香锅冒菜
                                 </a></li>
                                 <li>
                                     <a href="/">
                                         轻食西餐
                                     </a>
                                 </li>
                             </ul>
                         </div>
                         <div className={'icon iconfont icon-arrow-down'}></div>
                     </div>
                 </div>

                {/*菜单列表*/}
                <Menu></Menu>
                {/*商品列表*/}
                {
                    this.state.list.length>0 && <GoodsList loadMore={this.loadMoreFn} list={this.state.list}></GoodsList>
                }

            </div>
        );
    }
}

export default CategoryList;