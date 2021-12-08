import * as types from '../action'
function chiqimReducer(state = {
    chiqimlar : [],
    chiqim : {}

}, action){

    switch (action.type){
        case types.ADD_CHIQIM :
            let date = new Date();
let a = state.chiqimlar
            a.push({
                id : state.chiqimlar.length === 0 ? 1 :  state.chiqimlar[state.chiqimlar.length-1].id+1,
                userId : action.userId,
                kassaId : action.kassaId,
                amount : action.amount,
                date : date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()
            })
            state = {...state, chiqimlar: [...a], chiqim: state.chiqim}
            break;
        case types.EDIT_CHIQIM :
            let b = state.chiqimlar.map(item=>{
                if (item.id === action.chiqimId){
                    item.userId = action.userId
                        item.kassaId = action.kassaId
                item.amount = action.amount
                }
                return {...item}
            })
            state = {...state, chiqimlar: [...b], chiqim: state.chiqim}
            break;
        case types.DELETE_CHIQIM :
let c = state.chiqimlar.filter(item=> item.id !== action.chiqimId)
            state = {...state, chiqimlar: [...c], chiqim: state.chiqim}
            break;
    }

    return state;
}
export default chiqimReducer;