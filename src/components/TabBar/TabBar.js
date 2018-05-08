import React from 'react';
import {NavLink} from 'react-router-dom';
import './TabBar.less'

export default class TabBar extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='tab-bar'>
                <li>
                    <NavLink to='/home'>
                        <i className='iconfont icon-xingqiu'></i>
                        首页</NavLink>
                </li>
                <li>
                    <NavLink to='/vip'>
                        <i className='iconfont icon-react'></i>
                        会员</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>
                        <i className='iconfont icon-wode_kecheng'></i>
                        购物车</NavLink>
                </li>
                <li>
                    <NavLink to='/my'>
                        <i className='iconfont icon-wode_kecheng'></i>
                        我的</NavLink>
                </li>
            </div>
        )
    }
}


