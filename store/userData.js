const initAction = {
    type: 'ADD',
    payload: 0
}


const initState = {
    id: 0,
    userName: "",
    userEmail: ""
}
const reducer = (state = initState, action = initAction) => {
    console.log(action);
    if (action.type === 'ADD') {
        return {
            ...state,
            id: action.payload
        };
    }
    return state;
}

const store = createStore(reducer)
store.dispatch({ type: 'ADD', payload: 3 });
console.log(store.getState());