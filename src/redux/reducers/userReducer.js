import * as types from '../action'
function userReducer(state = {
    users : [
        {
            id : 1,
            name : 'Akbar',
            phone : '1112233'
        },
        {
            id : 2,
            name : 'Qodir',
            phone : '1112277'
        }
    ],
    user : {
        id : '',
        name : '',
        phone : ''
    }
}, action){

    switch (action.type){
        case types.ADD_USER :
let a = state.users;
 state.user = {
     id : state.users.length === 0 ? 1 : state.users[state.users.length -1].id + 1,
     name : action.name,
     phone: action.phone
 }
 a.push({...state.user})
            state = {...state, users: [...a], user: {...state.user}}
            break;
        case types.EDIT_USER:
            let b = state.users.map(item=>{
            if(item.id === action.userId){
               item.name = action.name
               item.phone = action.phone
            }
                return {...item}
            })
            state = {...state, users: [...b], user: state.user}
            console.log(state.users)
            break;
        case types.DELETE_USER :
            let c = state.users.filter(item => item.id !== action.userId )
            state = {...state, users : [...c], user: state.user}
            break;
    }

    return state;
}
export default userReducer;