import React from 'react';
import './index.less';
import {withRouter} from 'react-router-dom'

 class Header extends React.Component {
    constructor() {
        super()
    }

    back = () => {
        this.props.history.go(-1);
    };

    render() {
        return (
            <div className="Header">
                <i className='iconfont icon-fanhui'
                   onClick={this.back}
                ></i>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(Header)

