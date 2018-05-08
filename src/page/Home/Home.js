import React from 'react';

import './index.less';
import {connect} from 'react-redux';
import actions from "../../../src/store/actions/home";
import HomeSwiper from './HomeSwiper'
import {loadMore,pullRefresh} from '../../common/util'
import Loading from '../../components/Loading/Loading';
import {Link} from 'react-router-dom';
class Home extends React.Component {
    constructor(){
        super();
        this.content = React.createRef()
    }
    chooseLesson = (val) => {
        //将当前的课程存入到redux中
        this.props.setLesson(val)
    };

    componentDidMount() {
        if (this.props.setSlider.length === 0) {
            this.props.setSlider();
        }
        if (this.props.lesson.lists.length === 0) {
            this.props.setLessonList()
        }
        loadMore(this.content.current,this.loadMore);
        pullRefresh(this.content.current,this.props.refresh)
    }
    loadMore = () =>{
        this.props.setLessonList()
    };
    render() {

        return (
            <div className='home full'>
                <div className='content' ref={this.content}>
                    {this.props.slider.lists.length > 0 ?
                        <HomeSwiper
                            lists={this.props.slider.lists}
                        /> : <div>正在加载中...</div>}
                    <div className='home-list'>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(state => state.home, actions)(Home)

