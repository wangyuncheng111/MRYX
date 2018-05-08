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
                        <i className='iconfont icon-shouye1'></i>
                        首页</NavLink>
                </li>
                <li>
                    <NavLink to='/vip'>
                        <i className='iconfont icon-huiyuan'></i>
                        会员</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>
                        <i className='iconfont icon-gouwuche'></i>
                        购物车</NavLink>
                </li>
                <li>
                    <NavLink to='/my'>
                        <i className='iconfont icon-iconfontgerenzhongxin'></i>
                        我的</NavLink>
                </li>
            </div>
        )
    }
}


