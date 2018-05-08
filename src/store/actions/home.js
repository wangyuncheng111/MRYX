import * as Types from '../action-types';
import {getSlider,getLesson} from '../../api/home'

let actions = {
    setLesson(lesson){
        return (dispath,getState)=>{
            dispath({type:Types.SET_CURRENT_LESSON,lesson});
            actions.refresh()(dispath,getState)
        }
    },
    setSlider(){
        return (dispath)=>{
            //用来改变loading状态的
            dispath({type:Types.SET_SLIDERS});
            //真正请求
            dispath({type:Types.SET_SLIDERS_SUCCESS,payload:getSlider()})
        }
    },
    refresh(){
      return (dispatch,getState)=>{
          dispatch({type:Types.CLEAR_LESSON});
          actions.setLessonList()(dispatch,getState)
      }
    },
    setLessonList(){
        return ((display,getState)=>{
            let {currentLesson,lesson:{hasMore,loading,limit,offset}} = getState().home;
            if(!hasMore||loading){
                return
            }
            display({type:Types.SET_LESSON});
            display({type:Types.SET_LESSON_SUCCESS,payload:getLesson(offset,limit,currentLesson)})
        })
    }


};
export default actions;