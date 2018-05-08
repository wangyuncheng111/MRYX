import * as Types from '../action-types'
import {login, reg, validate} from '../../api/session';
import history from '../../history'

let actions = {
    setLogin(userInfo) {
        //登陆
        return (dispath) => {
            login(userInfo).then(data => {
                dispath({type: Types.SET_USER_INFO, ...data});
                if (data.error === 0) {
                    history.push('/profile');
                }
            })
        }
    },
    setValidate() {
        return (dispath) => {
            validate().then(data => {
                dispath({type: Types.SET_USER_INFO, ...data});
            })
        }
    },
    setReg(userInfo) {
        //注册
        return (dispatch) => {
            reg(userInfo).then(data => {
                dispatch({type: Types.SET_USER_INFO, ...data});
                if (data.error === 0) {
                    history.push('/login');
                }
            });
        }
    }
};
export default actions;