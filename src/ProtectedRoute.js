import React, { Component } from 'react';

import { validate } from  './api/session';
import 'babel-polyfill';
import {withRouter} from 'react-router-dom';
class Protected extends Component {
    constructor() {
        super();
    }
    async componentDidMount(){
        let {user} = await validate();
        if(!user){
            // 如果用户不存在 则跳转到登录页面
            this.props.history.push('/login');
        }
    }
    render() {
        let C = this.props.component;
        return <C></C>
    }
}
export default withRouter(Protected);