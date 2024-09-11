export function myStore(reducer){
    let state 
    let listeners = []
    
    const store = {
        getState(){
            return state
        },
        dispatch(action){
           state = reducer(state,action)
           listeners.forEach(listener => listener())
        },
        subscription(listener){
            listeners.push(listener)
            return function(){
                const listenerIndex = listeners.findIndex((selectedListener) => selectedListener === listener)
                listeners.splice(listenerIndex,1)
            }
        }
    }
    return store

}