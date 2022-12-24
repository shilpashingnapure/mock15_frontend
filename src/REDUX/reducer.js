import {STORE} from './action'



export const reducer = (state, {type , payload})=>{
    switch(type){
        case STORE:
            return {...payload}
        default:
            return state
    }
}