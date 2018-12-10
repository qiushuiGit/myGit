import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import echarts from 'echarts';
import Layout from './components/layout';
import {router} from './router/index'


// import Home from './components/home';
// import Line from "./components/line";
// import Sunburst from './components/sunburst'
// import  Pie from './components/pie'
// import  Amap from './components/map'
// import NotFound from "./components/notfound";


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path='/' render={()=>{
                            return(
                                <Layout>
                                    <Switch>
                                        {
                                            router.map((item,index)=>{
                                               if(item.exact){
                                                   return (
                                                       <Route
                                                            key={index}
                                                            exact={item.exact}
                                                            path={item.path}
                                                            component={item.component}
                                                       ></Route>
                                                   )
                                               }
                                               return (
                                                   <Route
                                                        key={index}
                                                        path={item.path}
                                                        render={()=>{
                                                            return (
                                                                <item.component echarts={echarts} />
                                                            )
                                                        }}
                                                   ></Route>
                                               )
                                            })
                                        }
                                        {/*<Route exact path='/' component={Home}></Route>*/}
                                        {/*<Route path={'/line'} render={()=>{*/}
                                            {/*return (*/}
                                                {/*<Line echarts={echarts}></Line>*/}
                                            {/*)*/}
                                        {/*}}></Route>*/}
                                        {/*<Route path={'/sunburst'} render={()=>{*/}
                                            {/*return (*/}
                                                {/*<Sunburst echarts={echarts}></Sunburst>*/}
                                            {/*)*/}
                                        {/*}}></Route>*/}
                                        {/*<Route path={'/pie'} render={()=>{*/}
                                            {/*return (*/}
                                                {/*<Pie echarts={echarts}></Pie>*/}
                                            {/*)*/}
                                        {/*}}></Route>*/}
                                        {/*<Route path={'/map'} render={()=>{*/}
                                            {/*return (*/}
                                                {/*<Amap></Amap>*/}
                                            {/*)*/}
                                        {/*}}></Route>*/}
                                        {/*<Route component={NotFound}></Route>*/}
                                    </Switch>
                                </Layout>
                            )
                        }}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
