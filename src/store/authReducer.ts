interface IDefaultState {
    isAuth: boolean
}
interface IAuth {
    type: 'AUTH',
    payload: boolean
    
}

const defaultState = {
    isAuth: false
}

export const authReducer = (state: IDefaultState = defaultState, action:IAuth):IDefaultState => {
    switch(action.type) {
        case "AUTH":
            return{isAuth: action.payload}
        default:
            return state
    }
}