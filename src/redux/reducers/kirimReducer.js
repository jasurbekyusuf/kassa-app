import * as types from '../action'
import {connect} from "react-redux";
function kirimReducer(state = {
    kirimlar : [],
    kirim : {}

}, action){

    switch (action.type){
        case types.ADD_KIRIM :
            console.log(action)
            let date = new Date();
let a = state.kirimlar
            a.push({
                id : state.kirimlar.length === 0 ? 1 :  state.kirimlar[state.kirimlar.length-1].id+1,
                userId : action.userId,
                kassaId : action.kassaId,
                amount : action.amount,
                date : date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()
            })
            state = {...state, kirimlar: [...a], kirim: state.kirim}
            break;
        case types.EDIT_KIRIM :
            let b = state.kirimlar.map(item=>{
                if (item.id === action.kirimId){
                    item.userId = action.userId
                        item.kassaId = action.kassaId
                item.amount = action.amount
                }
                return {...item}
            })
            state = {...state, kirimlar: [...b], kirim: state.kirim}
            break;
        case types.DELETE_KIRIM :
let c = state.kirimlar.filter(item=> item.id !== action.kirimId)
            state = {...state, kirimlar: [...c], kirim: state.kirim}
            break;
    }

    return state;
}

export default kirimReducer;