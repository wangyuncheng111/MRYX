import React from 'react';
import Header from 'src/components/Header/Header'
export default class Detail extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className='full profile'>
                <Header>详情页</Header>
                <video src={this.props.location.state.video}
                       style={{width:"100%"}}
                       controls={true}
                ></video>
                {this.props.location.state.price}
            </div>
        )
    }
}


