import {myStore, redux} from './redux';

const initialData = {
    post: 0,
    name: 'Dheeraj'
}

const INCREMENT = 'post/increment'; 
const DECREMENT = 'post/decrement'; 
const INCREMENT_BY = 'post/increment_by'; 
const DECREMENT_BY = 'post/decrement_by'; 
const CHANGENAME = 'post/changename'; 
const CHANGENAME_BY = 'post/changename_by';

function reducer(state = initialData,action){
    switch(action.type){
        case INCREMENT :
            return {...state,post: state.post + 1}
        case DECREMENT :
            return {...state,post: state.post - 1}
        case INCREMENT_BY :
            return {...state,post: state.post + action.payload}
        case DECREMENT_BY :
            return {...state,post: state.post - action.payload}
        case CHANGENAME :
            return {...state,name: state.name + 'Jiiii'}
        case CHANGENAME_BY :
            return {...state,name: action.payload}
        default:
            return state
    }      
}

const store = myStore(reducer)

const unsub1 = store.subscription(() => {
    console.log(store.getState())
})

const unsub2 = store.subscription(() => {
    console.log(store.getState())
})



store.dispatch({type:INCREMENT})
unsub2()
store.dispatch({type:CHANGENAME})
store.dispatch({type:CHANGENAME_BY, payload: 'Golu sharma'})

