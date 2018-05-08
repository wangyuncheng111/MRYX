import React from 'react';
import ReactSwipe from 'react-swipe';

export default class HomeSwiper extends React.Component{
    state = {
        index:0
    }
    render(){
        let opts = {
            continuous: true,auto:1000,
            transitionEnd:(index)=>{
                this.setState({index})
            }
        };
        return (
            <div className="home-swiper">
            <ReactSwipe className="carousel" swipeOptions={opts}>
                {this.props.lists.map((item,index)=>(
                    <div key={index}><img src={item} alt=""/></div>
                ))}
            </ReactSwipe>
                <div className="dots">
                    {this.props.lists.map((item, index) => (
                        <span key={index} className={index===this.state.index?'active':''}></span>
                    ))}
                </div>
            </div>
        )
    }
}


