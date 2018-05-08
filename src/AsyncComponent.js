import React from 'react';

export default function Async(fn) {
    return class Proxy extends React.Component{
        constructor(){
            super();
            this.state = {component:null}
        }
        async componentDidMount(){
            let { default: component} = await fn();
            this.setState({component})
        }
        render(){
            let C = this.state.component;
            return C?<C/>:null;
        }
    }
}