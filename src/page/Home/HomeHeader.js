import React from 'react';
import logo from 'src/common/images/logo.png'

export default class HomeHeader extends React.Component {
    state = {
        isShow: false
    };
    changeShow = () => {
        this.setState({isShow: !this.state.isShow})
    };
    handleSelect = (e) =>{
        //获取li的自定义属性
        let value = e.target.dataset.type;
        //调用父类方法
        this.props.chooseLesson(value);
        //更改显示隐藏
        this.changeShow();
    };
    render() {
        return (
            <div className='home-header'>
                <div className='menu'>
                    <img src={logo} alt=""/>
                    <div onClick={this.changeShow}>
                        {this.state.isShow?<i className='iconfont icon-guanbi'></i>:<i className='iconfont icon-liebiao'></i>}
                    </div>
                </div>
                {this.state.isShow?
                    <div className='menu-list' onClick={this.handleSelect}>
                        <li data-type="0">全部课程</li>
                        <li data-type="1">react课程</li>
                        <li data-type="2">vue课程</li>
                    </div>:null}
            </div>
        )
    }
}


