import * as Types from '../action-types'

let initState = {
    error: 0,
    msg: '',
    user: null
};
export default function session(state = initState, action) {
    switch (action.type) {
        case Types.SET_USER_INFO:
            return {error:action.error,msg:action.msg,user:action.user}
    }
    return state
}