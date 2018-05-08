import React from 'react';
import Header from 'src/components/Header/Header';
import './index.less';
import {Link} from 'react-router-dom';
import actions from '../../store/actions/session';
import {connect} from 'react-redux'

class Reg extends React.Component {
    constructor() {
        super();
        this.username = React.createRef();
        this.password = React.createRef();
    }

    render() {
        return (
            <div className='full login'>
                <Header>注册</Header>
                <ul className='box-list'>
                    <li>
                        <label>用户名</label>
                        <input type="text" ref={this.username}/>
                    </li>

                    <li>
                        <label>密码</label>
                        <input type="text" ref={this.password}/>
                    </li>
                    <li>
                        <button onClick={()=>{
                            this.props.setReg({
                                username:this.username.current.value,
                                password:this.password.current.value
                            })
                        }}>注册</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default connect(state => state.session, actions)(Reg)
