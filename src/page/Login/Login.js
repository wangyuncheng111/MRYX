import React, { Component } from 'react';
import Header from 'src/components/Header/Header';
import './index.less';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
class Login extends Component {
    constructor() {
        super();
        this.username = React.createRef();
        this.password = React.createRef();
    }
    render() {
        return (<div className="full login">
            <Header>登录</Header>
            <ul className="box-list">
                <li>
                    <label >用户名</label>
                    <input type="text" ref={this.username}/>
                </li>
                <li>
                    <label >密码</label>
                    <input type="text" ref={this.password}/>
                </li>
                <li>
                    <button onClick={()=>{
                        this.props.setLogin({
                            username:this.username.current.value,
                            password:this.password.current.value
                        });
                    }}>登录</button>
                </li>
                <li>
                    <Link to="/reg">注册</Link>
                </li>
            </ul>
        </div>)
    }
}
export default connect(state=>state.session,actions)(Login);