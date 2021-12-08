import * as types from '../action'
function kassaReducer(state = {
    kassalar : [
        {
            id : 1,
            name : 'kassa1',
        },
        {
            id : 2,
            name : 'kassa2',
        },
    ],
    kassa : {
        id : '',
        name : ''
    }
}, action){

    switch (action.type){
        case types.ADD_KASSA :
         let a =  state.kassalar;
         a.push({id : state.kassalar.length === 0 ? 1 : state.kassalar[state.kassalar.length-1].id + 1, name : action.name})
            state = {...state, name: [...a], kassa: {...state.kassa}}
            break;
        case types.EDIT_KASSA :
      let b = state.kassalar.map(item=> {
          if (item.id === action.kassaId) item.name = action.name
      return {...item}
      } )
            state = {...state, kassalar : [...b], kassa: {...state.kassa}}
            break;
        case types.DELETE_KASSA:
        let c = state.kassalar.filter(item => item.id !== action.kassaId)
            state = {...state, kassalar: [...c], kassa: {...state.kassa}}
            break;
    }

    return state;
}
export default kassaReducer;